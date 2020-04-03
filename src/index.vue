<script>
export default {
  props: {
    config: {
      type: Array,
      default: [{
        keyCodes: null,
        events: ['keyup'],
        modifiers: null
      }]
    }    
  },
  mounted() {
    this._keyListeners = []
    this.config.forEach(config => {
      config.events.forEach(event => {
        let listener = this.emitEvent(config.keyCodes, config.modifiers)
        this._keyListeners.push({event, listener})
        window.addEventListener(event, listener);  
      });    
    })    
  },
  destroyed() {
    this._keyListeners.forEach(({event, listener}) => {
      window.removeEventListener(event, listener);
    })
  },
  methods: {
    emitEvent(keyCodes, modifiers) {
      return (e) => {
        const index = keyCodes.indexOf(event.keyCode)
        if (index != -1 || !keyCodes) {
          if (this.preventDefault){
              e.preventDefault();
          }
          
          if (modifiers && modifiers.length && Array.isArray(modifiers[0])) {
              modifiers = modifiers[index]
          }
          
          // Check if all modifiers were clicked and return, if not
          if (modifiers.length) {          
            if (!modifiers.every(modifier => event[modifier])) {
              return
            }            
          }
          // Success:
          this.$emit("pressed", event.keyCode, event.type, modifiers);        
        }
      }
    }
  },
  render: () => null
};
</script>
