import { customRef } from 'vue'

export default function (value) {
  let timer = null;

  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newVal) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newVal
          trigger()
        }, 1000);
      }
    }
  })

}