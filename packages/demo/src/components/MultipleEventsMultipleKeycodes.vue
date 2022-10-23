<template>
  <div>
    <Keypress
      v-for="keypressEvent in keypressEvents"
      :key="keypressEvent.id"
      :key-event="keypressEvent.keyEvent"
      :multiple-keys="keypressEvent.multipleKeys"
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
          keyEvent: 'keydown',
          multipleKeys: [
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
          keyEvent: 'keyup',
          multipleKeys: [
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
