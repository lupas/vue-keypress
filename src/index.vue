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
        if( this.preventDefault ){
            e.preventDefault();
        }
        this.$emit("pressed", event.keyCode);
      }
    }
  },
  render: () => null
};
</script>
