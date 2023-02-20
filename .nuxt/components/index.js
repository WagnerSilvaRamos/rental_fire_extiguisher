export { default as Hero } from '../..\\components\\Hero.vue'
export { default as LargeCard } from '../..\\components\\LargeCard.vue'
export { default as LargeCardDisplay } from '../..\\components\\LargeCardDisplay.vue'
export { default as Nav } from '../..\\components\\Nav.vue'
export { default as PageNotFound } from '../..\\components\\PageNotFound.vue'
export { default as RentModal } from '../..\\components\\RentModal.vue'
export { default as ReviewCard } from '../..\\components\\ReviewCard.vue'
export { default as Reviews } from '../..\\components\\Reviews.vue'
export { default as SmallCard } from '../..\\components\\SmallCard.vue'
export { default as SmallCardDisplay } from '../..\\components\\SmallCardDisplay.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
