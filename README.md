# custom-drawer

Mini program custom components

> Using this component requires the Mini Program Basic Library version 2.2.1 or above, as well as the npm build of the developer tools. Specific details can be found in the [official npm documentation](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html).

## Instructions

1. Install custom-drawer

```
npm install --save rh-mp-drawer
```

2. Add custom-drawer custom component configuration in page.json of the page that needs to use custom-drawer

```json
{
  "usingComponents": {
    "custom-drawer": "rh-mp-drawer"
  }
}
```

3. Reference: WXML and js slide-view

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

**slide-view, The properties：**

### `show`

- **Type**: `Boolean`
- **Description**: Determines whether the drawer is visible or hidden.
- **Default**: `false`

### `direction`

- **Type**: `String`
- **Description**: Specifies the direction from which the drawer slides in.
- **Possible values**: `'bottom'`, `'top'`, `'left'`, `'right'`
- **Default**: `'bottom'`