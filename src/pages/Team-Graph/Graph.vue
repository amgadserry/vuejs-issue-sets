<template lang="pug">
  div.bm-graph
    svg(
        @mousedown="setCanMove(true, $event)",
        @mouseup="setCanMove(false, $event)",
        @mousemove="move",
        width="100%",
        height="100%",
        viewBox="0 0 1000 1000",
        preserveAspectRatio='xMaxYMax',
        xmlns="http://www.w3.org/2000/svg",
        xmlns:xlink="http://www.w3.org/1999/xlink")
      graph-item(:data="$store.state.Graph.currentTree", :isMain="true")
</template>

<script>
  import GraphItem from './GraphItem.vue'
  export default {
    components: {
      GraphItem
    },
    data () {
      return {
        zoomFactor: 1,
        canMove: false,
        offset: {
          x: 0,
          y: 0
        },
        location: {
          x: 0,
          y: 0
        }
      }
    },
    methods: {
      zoom (e) {
        /* let direction = {
          x: e.offsetX / e.target.clientWidth,
          y: e.offsetY / e.target.clientHeight
        } */
        if (e.deltaY < 0 && this.zoomFactor > 0.1) {
          this.zoomFactor -= 0.2
          // this.location.x -= direction.x * this.zoomFactor * 10
          // this.location.y -= direction.y * this.zoomFactor * 10
        } else {
          this.zoomFactor += 0.2
          // this.location.x += direction.x * this.zoomFactor * 10
          // this.location.y += direction.y * this.zoomFactor * 10
        }
      },
      move (e) {
        if (this.canMove) {
          if (this.buttons === 0) {
            this.canMove = false
            return
          }
          this.location.x = (-e.offsetX + this.offset.x)
          this.location.y = (-e.offsetY + this.offset.y)
        }
      },
      setCanMove (val, e) {
        this.canMove = val
        if (this.canMove) {
          this.offset.x = e.offsetX + this.location.x
          this.offset.y = e.offsetY + this.location.y
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .bm-graph{
    width: 100%;
    height: 100%;
    svg svg{
      overflow: visible;
    }
  }
</style>
