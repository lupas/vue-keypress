<template>
  <div class="container">
    <div>
      <SingleEventSingleKeycode v-if="index === 0" />
      <SingleEventMultipleKeycodes v-if="index === 1" />
      <MultipleEventsMultipleKeycodes v-if="index === 2" />
      <button @click="switchIndex">Switch Mode</button>
    </div>
  </div>
</template>

<script>
import MultipleEventsMultipleKeycodes from './components/MultipleEventsMultipleKeycodes.vue'
import SingleEventMultipleKeycodes from './components/SingleEventMultipleKeycodes.vue'
import SingleEventSingleKeycode from './components/SingleEventSingleKeycode.vue'

export default {
  components: {
    MultipleEventsMultipleKeycodes,
    SingleEventMultipleKeycodes,
    SingleEventSingleKeycode,
  },
  data() {
    return {
      inSingleMode: true,
      index: 0,
      modes: [
        'SingleEventSingleKeycode',
        'SingleEventMultipleKeycodes',
        'MultipleEventsMultipleKeycodes',
      ],
    }
  },
  methods: {
    switchIndex() {
      if (this.index === 2) {
        this.index = 0
      } else {
        this.index = this.index += 1
      }
    },
  },
}
</script>

<style>
body {
  margin: 0;
}

.container {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>
