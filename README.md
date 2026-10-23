# Roger ／ 数字空间

纯 HTML、CSS、JavaScript 与 Python 构建的个人博客。Mechanical Paper 界面保留项目、画作、音乐和系统学习课程；关于页介绍留空。本轮仅在本地重构，没有提交、推送或部署。

## 本地使用

首次准备：`python -m pip install -r requirements.txt`。

- 双击 `更新内容.bat`：生成课程全文索引、画作和音乐数据。
- 运行 `python tools/build_site.py`：重建 `dist/`，只打包公开内容与必要资源。
- 双击 `启动博客.bat`：构建后在 `http://localhost:5500/dist/` 预览；关闭命令窗口或按 Ctrl+C 停止。
- 校验：`python tools/test_content.py`、`node tools/test_frontend.cjs`。

`learning` 是独立 Git 子模块。首次克隆需要递归初始化子模块；本地构建不会替你提交或上传任何仓库。

## 更新课程

规范课程只维护 `learning/courses/` 中的 Markdown，以及 `learning/course-map.json`。新增章节需登记唯一且长期不变的 `id`、`md` 路径、标题、顺序和 `sources` 原稿映射；课程的 `prerequisites` 引用课程 ID。标题可以改，ID 请保留，否则现有阅读记录无法关联。

每篇按概念、原理、实际例子、误区、适度拓展组织，给出参考来源，最后用二级标题 `模拟面试问题` 列出问题，勿附答案。Java 示例以 Java 17+ / Spring Boot 3.x 为基线，版本差异须明确注明。

历史原稿保留原位作为来源档案，不重复列入网站，也不打包公开。`learning/项目学习/` 作为独立原文资料区，保持原文不变。未来新增项目资料可运行更新脚本重新索引。

旧 `article.html?md=…` 地址使用原稿映射进入课程选择页；新课程可用 `article.html?id=稳定ID`。章节锚点由标题生成，重复标题追加序号。修改标题时要考虑已有章节深链接。

## 阅读与复习

学习页支持正文与问题搜索、课程筛选、命中摘要。阅读页提供章节树、本篇目录、前后章节、字号／行距／行宽、代码复制、公式、流程图及图片放大。中小屏的本篇目录位于章节抽屉。

阅读位置、已读勾选、问题复习勾选及显示偏好只存当前浏览器，可在学习页导出／导入 JSON。更换浏览器或清理站点数据前先导出；勾选“已掌握”只是个人复习标记，不代表能力评估。

## 画作和音乐

原有画作在 `sources/img/`，音乐在 `sources/music/`。本地画作来源可在忽略提交的 `content-sources.local.json` 配置 `galleryDirectories` 数组，默认包含指定 LiteGameLibrary 图库。

导入器递归读取外部 `originals`、排除 `thumbnails`，以内容哈希去重，复制到 `sources/gallery-imports/` 并生成缩略图；不修改外部图库。外部目录缺失时保留已导入文件并提示。网页只引用相对资源地址。详情见 [画作导入说明](docs/gallery-import.md)。

音乐共享一个音频实例，站内切页和返回不中断；播放状态刷新后不自动恢复播放。全局条控制进度、切歌，手机的随机／循环／音量设置在队列中。机械装置使用真实音频 RMS 驱动，暂停、页面隐藏和减少动效偏好下停止动画。

## 构建与维护

`tools/rebuild_content.py` 统一生成三个索引；`tools/build_site.py` 按清单复制课程、项目资料、图片和音乐，排除原稿档案、工程文件、安装包和本地图库目录配置。HTML 的脚本与样式引用使用内容哈希，部署在仓库子路径下也可使用。

本地读取受浏览器限制，请通过 HTTP 服务器预览，不要双击 HTML。Markdown 渲染器、公式字体、代码高亮和 Mermaid 均在本地，许可文件位于 `js/vendor/`。

知识修订及覆盖记录见 [Java 修订记录](docs/knowledge-audit-java.md)、[基础课程修订记录](docs/knowledge-audit-foundations.md) 和 [重构验收记录](docs/reconstruction-report.md)。

现有 GitHub Actions 配置仍在仓库中，本轮没有触发发布。今后要上线时，需要分别处理笔记仓库提交和博客子模块引用；发布前先检查两个仓库中原有的未提交删除与修改。
