<template>
  <div class="container">
    <Keypress event="keyup" @pressed="someMethod" :modifiers="['shiftKey', 'altKey', 'metaKey']" />
    <div class="card" :style="dynamicBackgroundStyle">
      <p class="keyCode">{{pressedKeyCode}}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Keypress: () => import('vue-keypress')
  },
  data: () => ({
    pressedKeyCode: null
  }),
  computed: {
    dynamicBackgroundStyle() {
      if (!this.pressedKeyCode) {
        return { 'backgroundImage': "url('/keypressLogo.png')" }
      } else {
        return { 'backgroundImage': "url('/emptyKey.png')" }
      }
      
    }
  },
  methods: {
    someMethod(val) {
      this.pressedKeyCode = val
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

.card {
  background-size: contain;
  background-repeat: no-repeat;
  height: 40vh;
  width: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.keyCode {
  font-size: 70px;
  font-weight: 600;
  margin-bottom: 40%;
  margin-right: 3%;
}
</style>
