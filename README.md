# 小程序文字高亮

![bg](/bg.png)

最近经手的一个项目用到了高亮需求，为了下次开发方便就做成了这个库，如果对你有帮助欢迎`star`

> [实现原理](https://github.com/bosens-China/blog/issues/61)

## 使用方法

### 1. npm 下载

```sh
npm i @boses/highlight
# 小程序工具 -> 构建npm
```

### 2. 拷贝 dist 目录到小程序

推荐使用方法 1

## 使用方法

### index.json

```json
{
  "usingComponents": {
    "highlight": "@boses/highlight"
  }
}
```

### index.wxml

```html
<highlight data="hello wrold" keyWord="wro"></highlight>
```

## Api

### props

#### data

- type: `string`
- required: `true`

字符串数据

#### keyWord

- type: `string`
- required: `true`

需要被高亮的关键词

#### color

- type: `string`
- required: `false`

高亮文字的颜色，默认为`red`。

### class

#### cs-class

- type: `string`
- required: `false`

全局 class 类名

#### cs-class-i

- type: `string`
- required: `false`

全局 class 下的子项

#### cs-class-i-h

- type: `string`
- required: `false`

全局 class 下的高亮子项

### 事件

#### click

- type: `Function`
- required: `false`

被点击触发

## License

[MIT](/License)
