# My Digital Garden · 罗杰的数字花园

保留原有玻璃拟态卡片、背景轮播、樱花特效和日夜主题的静态个人博客。使用纯 HTML / CSS / JavaScript，Python 负责扫描内容，GitHub Actions 自动构建和发布。

## 网站内容

- **首页**：个人信息、学习主题入口、继续阅读、技术文章、创作、画作与音乐。
- **学习笔记**：自动收录 `learning/` 中的有效 Markdown，按主题和编号组织；支持正文搜索、主题筛选、学习顺序 / 最近更新 / 标题排序、已读筛选。
- **阅读页**：主题返回入口、分节目录、上一篇 / 下一篇、表格、代码块、数学公式和相对路径图片。手动已读与最近阅读保存在当前浏览器，不跨设备同步。
- **项目实践**：园区点餐学习项目与博客维护；内容配置在 `js/site-data.js`。
- **技术 / 创作 / 动漫**：保留 `sources/text/` 下的原有文章。
- **画作 / 音乐**：自动扫描 `sources/img/` 与 `sources/music/`。

## 日常更新：只管写 Markdown

1. 在 `learning/主题目录/` 中新增或编辑 `.md`，例如 `learning/java/37-Redis基础.md`。
2. 本地双击 **更新内容.bat**，刷新网页即可。只更新学习笔记也可以运行 `python tools/learning_content.py`。
3. 提交并推送到 GitHub 后，Actions 会重新扫描并发布，无需手动提交生成的数据文件。

新建主题目录会自动出现在知识地图里。`00-` 开头与 `README.md` 作为总览置顶，其他数字前缀决定学习顺序。目录不必在 JavaScript 里登记；如要自定义主题名和介绍，可修改 `tools/learning_content.py` 中的 `SUBJECTS`。

已有笔记无需改写。新笔记可以按需添加以下元信息（简单的单行字段与数组格式）：

```markdown
---
title: Redis 基础
description: 数据结构、缓存与持久化的学习记录
date: 2026-10-16
tags: [Redis, 缓存]
---

# Redis 基础

## 今天学到了什么

正文支持表格、代码块和 $a^2 + b^2 = c^2$ 这样的公式。

![示意图](assets/redis.png)

[回到相关主题](32-MySQL基础.md)
```

`title` 默认取首个一级标题；摘要默认从正文提取；日期优先使用 `date`，否则使用该文件最近一次 Git 提交日期，没有日期时不显示。`draft: true` 可暂不收录某篇笔记。空文件、隐藏目录、`_archive/`、`资料/` 和练习工程不会进入笔记库或 Pages 产物。草稿与归档仍可能存在于 Git 源码仓库，隐藏发布不等于私密存储。

总览表中写成反引号的 `.md` 文件名，也会自动链接到已收录的笔记。课程讲义只收录实际存在的 Markdown，不补造缺失章节。原始学习文件保持原样。

## 本地预览与检查

安装 Python 3.10 或更高版本；音乐封面功能使用 `mutagen`：

```powershell
python -m pip install mutagen==1.47.0
python tools/rebuild_content.py
python -m http.server 5500
```

也可双击 **启动博客.bat** 打开本地预览。使用 HTTP 服务访问，不能直接双击 HTML。停止服务后，本地预览也会停止。

双击 **部署检查.bat**，或运行：

```powershell
python tools/build_site.py
python tools/test_content.py
```

`dist/` 是发布产物，包含网站页面、资源、已收录笔记和笔记引用的本地图片。不会把课程安装包、后端配置、归档文件和练习工程复制到公开站点。`dist/` 不提交到 Git。

## 首次部署到 GitHub Pages

1. 在 GitHub 新建一个空仓库。普通名称（如 `digital-garden`）和 `用户名.github.io` 都支持。
2. 在项目根目录打开终端，替换下面的用户名和仓库名后运行；也可以使用 GitHub Desktop 发布本地项目。

```powershell
git init -b main
git add .
git commit -m "Build digital garden with learning notes"
git remote add origin https://github.com/YOUR_NAME/YOUR_REPO.git
git push -u origin main
```

3. 打开仓库 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
4. 在 **Actions** 中运行或等待 **Deploy blog to GitHub Pages**。如果首次推送时还没开启 Pages，可用 **Run workflow** 再运行一次。
5. 成功后，在 Pages 设置或部署任务里打开网站链接。普通仓库通常位于 `https://用户名.github.io/仓库名/`。

以后把笔记修改提交并推送至 `main`（或 `master`）即可自动更新。工作流先构建和检查，再上传 `dist/` 并部署。没有后端数据库或在线编辑接口；可直接在 GitHub 中编辑 Markdown 并提交。

部署流程参考 [GitHub Pages 自定义工作流文档](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

## 其他内容维护

| 内容 | 编辑位置 |
| --- | --- |
| 站点名称、头像、简介、GitHub 和邮箱 | `js/site-data.js` |
| 项目介绍 | `js/site-data.js` 的 `projects` |
| 技术文章 | `sources/text/tech/*.md` |
| 小说 / 同人 | `sources/text/fiction/*.md` |
| 动漫观后感 | `sources/text/anime/*.md` |
| 画作 | `sources/img/` |
| 音乐 | `sources/music/*.mp3` |

`social.github` 和 `social.email` 目前仍需填写自己的信息。原有文章、音乐与图片文件保留。

Markdown 与公式渲染器已固定版本存放于 `js/vendor/`，阅读功能无需连接外部 CDN。字体与部分旧文章封面仍可能使用原站外链。
