<script>
export default {
  props: {
    keyCode: {
      type: Number,
      default: null
    },
    event: {
      type: String,
      default: "keyup"
    },
    preventDefault: {
      type: Bolean,
      default: null
    }
  },
  mounted() {
    window.addEventListener(this.event, this.emitEvent);
  },
  destroyed() {
    window.removeEventListener(this.event, this.emitEvent);
  },
  methods: {
    emitEvent(e) {
      if (this.preventDefault) {
          e.preventDefault();
      }
      
      if (event.keyCode === this.keyCode || !this.keyCode) {
        this.$emit("pressed", event.keyCode);
      }
    }
  },
  render: () => null
};
</script>
