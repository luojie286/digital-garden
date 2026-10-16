// ===== 站点配置中心 =====
// 修改这个文件即可更新大部分内容，无需动 HTML

const siteConfig = {
  title: "My Digital Garden",
  navTitle: "Roger",
  navSuffix: "の",
  navAfter: "数字空间",
  authorName: "罗杰",
  bio: "后端开发者 · 记录代码、创作与学习。在这里存放技术笔记、项目实践，以及动漫、小说与收藏。",
  avatarUrl: "sources/img/黎之轨迹_童年.png",
  faviconUrl: "favicon.png",
  defaultCover: "sources/img/属于你的王国.png",
  buildDate: "2026-07-14T00:00:00",
  // 虚化背景默认循环 galleryItems 全部作品；仅在收藏为空时使用下面兜底
  bgImages: [
    "sources/img/残花的迷宫.png"
  ],
  social: {
    github: "https://github.com",
    email: "your@email.com"
  },
  footerBadges: [
    { name: "HTML/CSS/JS", color: "#f97316" },
    { name: "Java", color: "#22c55e" },
    { name: "Python", color: "#3b82f6" }
  ]
};

// 文章 / 画作 / 音乐列表由 更新内容.bat（tools/rebuild_content.py）生成：
//   js/posts-data.js · js/gallery-data.js · js/music-data.js
// 学习目录自动扫描 learning/；项目在下方维护。

// ===== 项目：只记录实际在做的内容 =====
const projects = [
  {
    slug: "campus-ordering",
    title: "园区点餐 · 后端实践",
    description: "跟着苍穹外卖课程做项目，记录登录鉴权、服务启动与业务实现。理论在笔记里，落地在实践中。",
    tags: ["Java", "Spring Boot", "MySQL", "Redis"],
    md: "learning/项目学习/README.md",
    status: "学习实践中"
  },
  {
    slug: "digital-garden",
    title: "My Digital Garden",
    description: "用纯 HTML、CSS 与 JavaScript 维护的个人数字花园。学习笔记自动归档，和代码、创作与收藏一起慢慢生长。",
    tags: ["静态博客", "Markdown", "GitHub Pages"],
    url: "index.html",
    status: "持续维护"
  }
];
