---
title: Go + Gin 快速搭建 REST API
description: 从零搭建一个带中间件、路由分组和 JSON 响应的 API 服务。
date: 2026-07-10
tags: [Go, 后端]
cover: https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop
---

本文记录如何用 Gin 框架在几分钟内搭起一个可运行的 REST API 服务。

## 1. 初始化项目

```bash
mkdir task-api && cd task-api
go mod init task-api
go get -u github.com/gin-gonic/gin
```

## 2. 最小可运行示例

```go
package main

import "github.com/gin-gonic/gin"

func main() {
    r := gin.Default()
    r.GET("/ping", func(c *gin.Context) {
        c.JSON(200, gin.H{"message": "pong"})
    })
    r.Run(":8080")
}
```

## 3. 路由分组

实际项目中建议用路由分组组织 API：

```go
v1 := r.Group("/api/v1")
{
    v1.GET("/tasks", listTasks)
    v1.POST("/tasks", createTask)
}
```

## 小结

Gin 的 API 简洁直观，适合快速原型和后端服务开发。下一步可以接入数据库和中间件。
