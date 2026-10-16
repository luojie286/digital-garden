---
title: Redis 缓存穿透与击穿实战
description: 常见缓存问题的成因与解决方案，附伪代码示例。
date: 2026-07-05
tags: [Redis, 后端]
cover: https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop
---

## 缓存穿透

查询一个**不存在**的数据，缓存和数据库都没有，导致每次请求都打到 DB。

**解决方案**：

- 缓存空值（设置较短 TTL）
- 布隆过滤器预判 key 是否存在

## 缓存击穿

某个**热点 key** 过期瞬间，大量并发请求同时打到数据库。

**解决方案**：

- 互斥锁（只有一个线程查 DB 并回填缓存）
- 热点 key 永不过期 + 异步更新

## 代码思路（互斥锁）

```text
val, err := redis.Get(key)
if err == nil { return val }

// 获取分布式锁
if lock.Acquire(key) {
    defer lock.Release(key)
    val = db.Query(key)
    redis.Set(key, val, ttl)
}
return val
```
