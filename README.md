# 文字高亮（小程序）

![背景](/bg.png)

最近经手的一个项目用到了高亮需求，为了下次开发方便就做成了这个库，如果对你有帮助欢迎`star`

[文章:小程序文字高亮](https://github.com/bosens-China/blog/issues/61)

## 使用方法

1. npm 下载

```sh
npm i @boses/highlight
# 小程序工具 -> 构建npm
```

2. 拷贝 dist 目录到小程序

## 快速使用

- index.json

```json
{
  "usingComponents": {
    "highlight": "@boses/highlight"
  }
}
```

- index.wxml

```html
<highlight data="hello wrold" keyWord="wro"></highlight>
```

## api 相关

- prop

| name    | type   | default | describe           |
| ------- | ------ | ------- | ------------------ |
| data    | String | none    | 字符串数据         |
| keyWord | String | none    | 需要被高亮的关键词 |
| color   | String | red     | 高亮文字的颜色     |

- class 相关

| name         | describe                |
| ------------ | ----------------------- |
| cs-class     | 全局 class 类名         |
| cs-class-i   | 全局 class 下的子项     |
| cs-class-i-h | 全局 class 下的高亮子项 |

- 事件相关
  bind:click 被点击触发

## License

MIT
