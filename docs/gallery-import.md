# 画作资源维护

网站保留 `sources/img/` 中的收藏，同时导入 LiteGameLibrary 画廊里的原图。更新内容时由 `tools.gallery_assets.import_gallery(root)` 生成公开元数据，不需要手动改画作列表。

默认目录为用户指定的 LiteGameLibrary `gallery` 文件夹。需要更换目录时，在项目根目录创建仅供本机使用的 `content-sources.local.json`：

```json
{
  "galleryDirectories": ["C:/Users/YOUR_NAME/AppData/Local/LiteGameLibrary/gallery"]
}
```

此本机配置不应上传或进入公开构建。脚本只读取路径中包含 `originals` 的图片，跳过 `thumbnails`；不修改 LiteGameLibrary 文件。PNG、JPEG、WebP、GIF、BMP 受支持，动图列表使用第一帧缩略图。

导入文件保存在 `sources/gallery-imports/originals/`，列表缩略图保存在 `sources/gallery-imports/thumbnails/`；文件名使用内容 SHA-256，站内与外部重复图片只展示一次。清单 `catalog.json` 记录已导入画作，外部目录缺失时继续使用这些资源。清单只含相对 URL，不含本机绝对路径。不要删除清单或自动生成的导入文件，否则离线保留会失效。

缩略图采用 Pillow 生成，最长边 720px。运行环境需安装 Pillow。导入失败的图片在终端提示，不会破坏其他画作；损坏的持久清单会中止导入，避免静默覆盖。

公开数据字段为 `id`、`url`、`thumbnail`、`caption`、`source`、`width`、`height`。`id` 是稳定内容哈希，可用来保留筛选或浏览状态。目录不可用不代表删除；如需主动移除已导入画作，应同时移除清单记录和对应资源，再执行内容更新。
