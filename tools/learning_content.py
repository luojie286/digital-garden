"""Discover publishable learning notes without changing their source files."""
from __future__ import annotations

import re
import subprocess
from pathlib import Path

from rebuild_content import ROOT, JS, parse_frontmatter, write_const_file

LEARNING = ROOT / "learning"
EXCLUDED = {"_archive", "资料", "java练习", "node_modules"}
SUBJECTS = {
    "java": ("Java 与后端", "从语言基础到 Spring、数据库与 JVM，把知识连成一条后端主线。", "☕"),
    "计算机网络": ("计算机网络", "协议、地址、网络性能与实际排障。", "🌐"),
    "os": ("操作系统", "从进程与线程，到调度、编译与死锁。", "⚙️"),
    "算法": ("数据结构与算法", "记录原理、代码模板，也记下那些踩过的坑。", "🧩"),
    "项目学习": ("项目实践", "园区点餐项目：课程讲义与自己的实现记录。", "🛠️"),
    "数电": ("数字电路", "逻辑函数、公式化简与卡诺图。", "💡"),
    "嵌入式学习": ("嵌入式", "单片机、STM32 与寄存器的入门记录。", "🔌"),
    "cmake": ("CMake", "构建脚本与编译工具链。", "📦"),
    "作业": ("课程练习", "把课程中的问题整理成可以回顾的笔记。", "✏️"),
}


def publishable(path: Path) -> bool:
    parts = path.relative_to(LEARNING).parts
    return not any(p.startswith(".") or p in EXCLUDED for p in parts)


def plain_text(body: str) -> str:
    body = re.sub(r"<[^>]+>", " ", body)
    body = re.sub(r"!?\[([^\]]*)\]\([^)]*\)", r"\1", body)
    body = re.sub(r"[`#*>|_~]", " ", body)
    return re.sub(r"\s+", " ", body).strip()


def modification_date(path: Path) -> str:
    # Git history is stable on CI; checkout mtime is not an update date.
    try:
        result = subprocess.run(
            ["git", "log", "-1", "--format=%cs", "--", path.relative_to(ROOT).as_posix()],
            cwd=ROOT, capture_output=True, text=True, check=False,
        )
        value = result.stdout.strip()
        if re.fullmatch(r"\d{4}-\d{2}-\d{2}", value):
            return value
    except OSError:
        pass
    return ""


def collect_notes() -> tuple[list[dict], list[dict]]:
    notes = []
    for path in sorted(LEARNING.rglob("*.md")):
        if not publishable(path):
            continue
        relative = path.relative_to(LEARNING)
        subject = relative.parts[0] if len(relative.parts) > 1 else "总览"
        meta, body = parse_frontmatter(path.read_text(encoding="utf-8-sig"))
        if not body.strip().strip('#').strip():
            continue
        if str(meta.get("draft", "")).lower() == "true":
            continue
        heading = re.search(r"^#\s+(.+)$", body, re.M)
        title = meta.get("title") or (heading.group(1).strip() if heading else path.stem)
        title = re.sub(r"^\d+[·.、\s-]+", "", title)
        if relative.as_posix() == "README.md" and not meta.get("title"):
            title = "学习笔记 · 总览与复习清单"
        number = re.match(r"(\d+)", path.stem)
        day = re.search(r"day(\d+)", relative.as_posix(), re.I)
        overview = path.stem == "README" or (number and number.group(1) == "00")
        summary = meta.get("description")
        if not summary:
            paragraphs = [plain_text(p) for p in body.split("\n\n")
                          if p.strip() and not p.lstrip().startswith(("#", "|", "```", "---"))]
            summary = next((p for p in paragraphs if len(p) > 15), "按主题整理的学习与实践记录。")[:140]
        order = int(number.group(1)) if number else (100 + int(day.group(1)) if day else 90)
        tags = meta.get("tags", [])
        if not isinstance(tags, list):
            tags = [tags]
        content = plain_text(body)
        notes.append({
            "md": path.relative_to(ROOT).as_posix(), "title": title,
            "description": summary, "subject": subject,
            "tags": tags, "kind": "总览" if overview else ("课程讲义" if "讲义" in relative.parts else "学习笔记"),
            "order": -1 if overview else order,
            "date": meta.get("date") or modification_date(path),
            "minutes": max(1, round(len(content) / 500)),
            "searchText": content.lower(),
        })
    subjects = []
    keys = list(SUBJECTS) + sorted({n["subject"] for n in notes} - set(SUBJECTS))
    for key in keys:
        children = [n for n in notes if n["subject"] == key]
        if not children:
            continue
        name, description, icon = SUBJECTS.get(key, (key, "持续积累的学习记录。", "📚"))
        children.sort(key=lambda n: (n["order"], n["md"]))
        subjects.append({"id": key, "name": name, "description": description,
                         "icon": icon, "count": len(children), "entry": children[0]["md"]})
    positions = {s["id"]: i for i, s in enumerate(subjects)}
    notes.sort(key=lambda n: (positions[n["subject"]], n["order"], n["md"]))
    return notes, subjects


def rebuild_learning() -> list[dict]:
    notes, subjects = collect_notes()
    write_const_file(JS / "learning-data.js", [
        "// 自动生成：编辑 learning/**/*.md 后运行 更新内容.bat，或推送到 GitHub 自动构建。",
        "// _archive、隐藏目录、资料与练习工程不会发布；draft: true 可隐藏单篇。",
    ], {"learningNotes": notes, "learningSubjects": subjects})
    return notes


if __name__ == "__main__":
    print(f"Indexed {len(rebuild_learning())} learning notes.")
