<template lang="pug">
  div.bm-drawer
    transition
      div.content(v-if="isOpened")
        slot
</template>

<script>
    export default {
      data () {
        return {
          isOpened: false
        }
      },
      methods: {
        toggle () {
          // TODO implement toggle
        }
      }
    }
</script>

<style scoped lang="scss">

</style>
