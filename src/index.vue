<script>

const supportedModifiers = ['altKey', 'metaKey', 'ctrlKey', 'shiftKey']

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
    },
    config: {
      type: Array,
      default: null
    }    
  },
  mounted() {
    this.m_keyListeners = []    
    if (this.config) {
      // use multi-key config exclusively
      this.config.forEach(config => {
        config.events.forEach(event => {
          let listener = this.emitEvent(config.keyCodes, config.modifiers, config.preventDefault)
          this.m_keyListeners.push({event, listener})
          window.addEventListener(event, listener);  
        });    
      })    
    } else {
      let listener = this.emitEvent([this.keyCode], this.modifiers, this.preventDefault)
      this.m_keyListeners.push({event: this.event, listener})
      window.addEventListener(this.event, listener);  
    }
  },
  destroyed() {
    this.m_keyListeners.forEach(({event, listener}) => {
      window.removeEventListener(event, listener);
    })
  },
  methods: {
    emitEvent(keyCodes, modifiers, preventDefaults) {
      return (e) => {
        let index = keyCodes.indexOf(event.keyCode)
        while (index != -1 || !keyCodes) {
          let preventDefault = preventDefaults
          if (Array.isArray(preventDefaults)) {
            preventDefault = preventDefaults[index]
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
              // try another code configuration
              index = keyCodes.indexOf(event.keyCode, index + 1)
              continue
            }            
          }
          // Success:
          this.$emit("pressed", event.keyCode, event.type, mods);        
          break
        }
      }
    }
  },
  render: () => null
};
</script>
