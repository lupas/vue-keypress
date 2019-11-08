# Vue Keypress

Want to capture _keyup_ and _keydown_ events globally in Vue? Nothing easier than that.

The Vue Keypress Component let's you easily implement this functionality in your Vue.js application.

Just add the component to the view/component where you need the functionality. When the component gets destroyed, the global event handler also gets removed.

# How to install?

```js
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
