<template lang="pug">
  div
    transition(name="slide")
      div.bm-drawer(v-if="opened")
        div.content
          slot
    transition(name="fade")
      div.locker(@click="toggle", v-if="opened")
</template>

<script>
    export default {
      props: {
        isOpened: {
          type: Boolean,
          deafult: false
        }
      },
      data () {
        return {
          opened: this.isOpened
        }
      },
      methods: {
        toggle () {
          this.opened = !this.opened
        }
      },
      watch: {
        isOpened (newVal) {
          this.opened = newVal
        }
      },
      mounted () {
        document.body.appendChild(this.$el)
      }
    }
</script>

<style scoped lang="scss">
  .bm-drawer{
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 40%;
    max-width: 400px;
    min-width: 240px;
    background: white;
    box-shadow: 0px 0px 5px gray;
    z-index: 10001;
    .content{
      height: 100%;
    }
  }
  .slide-enter, .slide-leave-to{
    right: -400px;
  }
  .slide-enter-active, .slide-leave-active{
    transition: right 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0
  }
  .fade-enter-active, .fade-leave-active{
    transition: opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  }
  .locker{
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgba(127, 127, 127, 0.6);
    top: 0;
    left: 0;
    z-index: 10000;
  }
</style>
