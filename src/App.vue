<template>
  <div id="app" :style="{ backgroundColor: bgColor}">
    <transition name="custom-classes-transition"
                enter-active-class="animated fadeIn">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    bgColor () {
      return this.$route.name.toLowerCase() === 'login' ? '#bdbdbd' : 'white'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  min-width: 100%;
  width: 100%;
  height: 100%;

}
</style>
