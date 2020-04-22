<template>
  <div>
    <Keypress
      v-for="keypressEvent in keypressEvents"
      :key="keypressEvent.id"
      :key-event="keypressEvent.event"
      :multiple-keys="keypressEvent.multiple"
      @success="handleSuccess"
      @wrong="handleWrong"
    />
    <p class="title">Multiple Events - Multiple Keycodes</p>
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
      keypressEvents: [
        {
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
        },
        {
          event: 'keyup',
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
        },
      ],
    }
  },
  computed: {
    dynamicBackgroundStyle() {
      if (!this.pressedKeyCode) {
        return { backgroundImage: "url('/keypressLogo.png')" }
      } else {
        return { backgroundImage: "url('/emptyKey.png')" }
      }
    },
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
