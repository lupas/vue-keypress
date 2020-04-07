<script>

const supportedModifiers = ['altKey', 'metaKey', 'ctrlKey', 'shiftKey']

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
        let listener = this.emitEvent(config.keyCodes, config.modifiers, config.preventDefault)
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
    emitEvent(keyCodes, modifiers, preventDefaults) {
      return (e) => {
        const index = keyCodes.indexOf(event.keyCode)
        if (index != -1 || !keyCodes) {
          let preventDefault = preventDefaults
          if (Array.isArray(preventDefaults)) {
            preventDefault = preventDefault[index]
          }
          if (preventDefault){
              e.preventDefault();
          }          
          let mods = modifiers
          if (modifiers && modifiers.length && Array.isArray(modifiers[0])) {
              mods = modifiers[index]
          }          
          // Check if only the specified modifiers were pressed
          if (mods.length) {          
            if (!supportedModifiers.every(modifier => event[modifier] == (mods.indexOf(modifier) != -1))) {
              return
            }            
          }
          // Success:
          this.$emit("pressed", event.keyCode, event.type, mods);        
        }
      }
    }
  },
  render: () => null
};
</script>
