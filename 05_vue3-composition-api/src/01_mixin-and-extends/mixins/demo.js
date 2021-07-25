export const Demo = {
  data() {
    return {
      message: 'hello mixin'
    }
  },
  methods: {
    foo() {
      console.log('mixin console')
    },
  },
  created() {
    console.log('mixin created')
  },
}