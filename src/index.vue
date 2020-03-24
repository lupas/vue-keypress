<script>
export default {
  props: {
    keyCode: {
      type: Number,
      default: null
    },
    modifier: {
      type: String, // shiftKey, ctrlKey, altKey, metaKey
      default: null
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
        // Check if modifier was clicked
        if (this.modifier && !event[this.modifier]) return
        // Success:
        this.$emit("pressed", event.keyCode);
      }
    }
  },
  render: () => null
};
</script>
