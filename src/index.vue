<script>
export default {
  props: {
    keyCode: {
      type: Number,
      default: null
    },
    modifiers: {
      type: Array, // ['shiftKey', 'ctrlKey', 'altKey', 'metaKey']
      default: () => []
    },
    event: {
      type: String,
      default: "keyup"
    },
    preventDefault: {
      type: Boolean
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
      if (event.keyCode === this.keyCode || !this.keyCode) {
        if (this.preventDefault){
            e.preventDefault();
        }
        // Check if all modifiers were clicked and return, if not
        if (this.modifiers.length) {
          for (const modifier of this.modifiers) {
            if (!event[modifier]) return
          }
        }
        // Success:
        this.$emit("pressed", event.keyCode);
      }
    }
  },
  render: () => null
};
</script>
