<template>
  <div class="card" :style="dynamicBackgroundStyle">
    <p class="keyCode">
      {{ pressedKeyCode }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    pressedKeyCode: {
      type: Number,
      default: null,
    },
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
}
</script>

<style scoped>
.card {
  background-size: contain;
  background-repeat: no-repeat;
  height: 40vh;
  width: 40vh;
  display: flex;
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
