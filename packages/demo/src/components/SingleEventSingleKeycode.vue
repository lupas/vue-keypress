<template>
  <div>
    <Keypress
      key-event="keyup"
      :key-code="65"
      :modifiers="['shiftKey']"
      prevent-default
      @success="handleSuccess"
      @wrong="handleWrong"
    />
    <p class="title">Single Event - Single Keycode</p>
    <KeyBackground :pressed-key-code="pressedKeyCode" />
  </div>
</template>

<script>
import KeyBackground from './KeyBackground.vue'

export default {
  components: {
    KeyBackground,
    Keypress: () => import('vue-keypress'),
  },
  data() {
    return {
      pressedKeyCode: null,
    }
  },
  methods: {
    handleSuccess(response) {
      console.log('Response: ', response)
      this.pressedKeyCode = response.event.keyCode
    },
    handleWrong(response) {
      console.log('Response: ', response)
    },
  },
}
</script>
