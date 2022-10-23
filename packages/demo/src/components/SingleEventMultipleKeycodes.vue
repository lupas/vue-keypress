<template>
  <div>
    <Keypress
      :key-event="event"
      :multiple-keys="multiple"
      @success="handleSuccess"
      @wrong="handleWrong"
    />
    <p class="title">Single Event - Multiple Keycodes</p>
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
      // Props:
      event: 'keydown',
      multiple: [
        {
          keyCode: 65, // A
          modifiers: ['shiftKey'],
          preventDefault: true,
        },
        {
          keyCode: 83, // S
          modifiers: ['shiftKey'],
          preventDefault: false,
        },
      ],
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
