<p align="center"><img align="center" height="300px" src="https://github.com/lupas/vue-keypress/blob/master/misc/keypressLogo.png?raw=true"/></p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-keypress"><img src="https://badgen.net/npm/dm/vue-keypress" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue-keypress"><img src="https://badgen.net/npm/v/vue-keypress" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue-keypress"><img src="https://badgen.net/npm/license/vue-keypress" alt="License"></a>
 </p>
</p>

# Vue Keypress

Want to capture _keydown_, _keypress_ and _keyup_ and events globally in Vue? Nothing easier than that.

The Vue Keypress Component let's you do just that.

Just add the component to the view/component that should start a global keypress handler and add . When the component gets destroyed, the global event handler also gets removed.

# How to install?

```js
yarn add vue-keypress
// or
npm i vue-keypress
```

# How to use in your project?

Import the component in any .vue file like so:

```js
...
components: {
  Keypress: () => import('vue-keypress')
}
...
```

# Props

| Prop    | Type   | Default | Possible Values                   | Description c                                                             |
| ------- | ------ | ------- | --------------------------------- | ------------------------------------------------------------------------- |
| keyCode | Number | null    | [see here](https://keycode.info/) | Key that should trigger the event. If _null_, any key will trigger event. |
| event   | String | 'keyup' | _keydown_, _keypress_, _keyup_    | |
| modifier   | String | null | _ctrlKey_, _shiftKey_, _altKey_, _metaKey_    | Key that needs to be clicked befre the actual set keyCode.  |
| preventDefault   | Boolean | false | _true_,_false_    | Prevent the default action of the event |

# Events

| Event    | Attributes | Description                                          |
| -------- | ---------- | ---------------------------------------------------- |
| @pressed | (key-code) | Get's emitted when the defined key has been pressed. |

# Example Usage

HTML:

```html
<Keypress :key-code="13" event="keyup" @pressed="someMethod" />
```

Script:

```js
export default {
  components: {
    Keypress: () => import('vue-keypress')
  },
  methods: {
    someMethod() {
      // Do something
    }
  }
}
```
