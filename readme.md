# React Salt - Tree 组件

你想要什么样的Tree？
* 展示特定数据结构的数据，可以设置默认值、选定值，选定的可以张开
* 动态数据结构，可以设置默认值、选定值
* 以上两种，可以绑定特定事件
* 实现手风琴功能

## 组件

数据上理解为单个条目和列表条目。

### 列表条目

列表条目在数据层面是数组，每一项是单个条目。

### 单个条目

数据格式:

* name: 显示名
* href: 点击跳转的目标
* icon: 当前条目可以自带显示
* children: 当前条目的子目录，子目录格式和列表条目一样
* content: 表现为手风琴

```
[{
    name: 'GitHub'
    href: 'github.com/Sobranier',
    icon: 'glyphicon-film'
    children: []
}]
```
