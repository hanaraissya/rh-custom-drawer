# custom-components

Mini program custom components

> Using this component requires the Mini Program Basic Library version 2.2.1 or above, as well as the npm build of the developer tools. Specific details can be found in the [official npm documentation](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html).

## Instructions

### Install rh-mp-cc

```
npm install --save rh-mp-cc
```

### custom-drawer
1. Add custom-drawer custom component configuration in page.json of the page that needs to use custom-drawer

```json
{
  "usingComponents": {
    "custom-drawer": "rh-mp-cc/drawer/"
  }
}
```

3. Reference custom-drawer: WXML and js slide-view

``` xml
  <custom-drawer show="{{showCustomModal}}" direction="top">
      <view>Drawer Content Here</view>
  </custom-drawer>
  <button bindtap="openCustomDrawer">CustomDrawer</button>
```

``` js
  Page({
    openCustomDrawer() {
      this.setData({showCustomModal: true})
    },
  })
```

**custom-drawer, The properties：**

| Name       | Type     | Possible Values                                  | Description                                       | Default   |
|------------|----------|---------------------------------------------------|---------------------------------------------------|-----------|
| `show`     | Boolean  | -                                                 | Determines whether the drawer is visible or hidden. | `false`   |
| `direction`| String   | `'bottom'`, `'top'`, `'left'`, `'right'`          | Specifies the direction from which the drawer slides in. | `'bottom'` |

### custom-font
1. Add custom-font custom component configuration in page.json of the page that needs to use custom-font

```json
{
  "usingComponents": {
    "custom-font": "rh-mp-cc/font/"
  }
}
```

3. Reference custom-font: WXML and js slide-view

``` xml
  <custom-font fontSize="40rpx" fontStyle="italic" color="#ff0000"
  textDecoration="underline" fontVariant="small-caps">
    This is a custom styled text.
  </custom-font>
```

**custom-font, The properties：**

| Name           | Type    | Default Value | Possible Values                          | Description                            |
|----------------|---------|---------------|------------------------------------------|----------------------------------------|
| fontSize       | String  | `'16px'`        | Any valid CSS size (e.g., `'12px'`, `'2em'`) | Font size of the text                   |
| fontStyle      | String  | `'normal'`      | `'normal'`, `'italic'`, `'oblique'` | Font style                             |
| color          | String  | `'#000000'`     | Hex color code (e.g., `'#ff0000'`)         | Text color                             |
| textDecoration | String  | `'none'`        | `'none'`, `'underline'`, `'overline'`, `'line-through'`, `'underline overline'` | Text decoration                   |
| fontVariant    | String  | `'normal'`      | `'normal'`, `'small-caps'`        | Font variant                           |
| fontWeight     | String  | `'normal'`      | `'normal'`, `'bold'`, `'bolder'`, `'lighter'`, or numeric values (100-900) | Font weight |
| lineHeight     | String  | `'normal'`      | Any valid CSS size or `'normal'`            | Line height of the text                |