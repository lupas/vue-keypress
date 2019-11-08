<template>
  <div></div>
</template>

<script>
export default {
  props: {
    keyCode: {
      type: Number,
      default: 13 // ENTER Key
    },
    event: {
      type: String,
      default: "keyup"
    }
  },
  mounted() {
    window.addEventListener(this.event, this.emitEvent);
  },
  destroyed() {
    window.removeEventListener(this.event, this.emitEvent);
  },
  methods: {
    emitEvent() {
      if (event.keyCode === this.keyCode) {
        this.$emit("pressed");
      }
    }
  }
};
</script>