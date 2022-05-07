---
home: true
heroImage: /logo.png
heroImageStyle: { maxWidth: '200px', width: '100%', display: block, margin: '0 auto 2rem', borderRadius: '1rem' }
heroText: imba-npm-ts
tagline: imba-npm-ts文档。
isShowTitleInHome: true
# actionText: About
# actionLink: /views/other/about
# features
# - title: 过去
# details: 开发一款看着开心、写着顺手的 vuepress 博客主题
# - title: 当下
# details: 帮助更多的朋友节省时间去用心书写内容，而不是仅仅配置一个博客去孤芳自赏
# - title: 未来
# details: 吸引更多的朋友参与到开发中来，继续强大功能
---

# 用于发布 npm 包 ts 打包

#### 首先先执行 -> 成功登录后

`pnpm run adduser`

#### 编写代码并测试

`pnpm run test`

#### 编译打包

`pnpm run build`

#### 上传 npm 包 当前是打 tag 并上传到 npm

`pnpm run pub`

#### 上传到 npm 包需要手动修改 package.json version 版本号

`pnpm run pub2`

#### 测试版快速发布测试查看 一般第一次用

`pnpm run pub2:beta`

#### 删除已发布的包

`pnpm run rm:package`

# ------------------------

# 初始化

```
pnpm run init
```

### 编译并发布

```
pnpm run build        # 编译
pnpm run pub          # 打标签并且 发布到npmjs.org
pnpm run pub2         # 不打标签 直接发布到npmjs.org
pnpm run pub2:beta    # 不打标签 测试版直接发布到npmjs.org
```

### jest 测试

```
pnpm run test # jest
```

### 文档

```
pnpm run docs # vuepress
```

### 安装

```
# pnpm
pnpm i xxx
```

### 使用

```
例:
import { aaa } from 'xxx'
或者
import * as aaa from 'xxx'
aaa('key')
```
