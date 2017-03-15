<template lang="pug">
  svg(class="node", :x="data.x", :y="data.y")
    line(:style="{display: childDisplay}", v-for="employee in data.employees", :x1="0", :y1="0", :x2="employee.x", :y2="employee.y", stroke="gray")
    g(@mousedown="selectSubtreeAsParent", :style="{display}")
      circle(:r="radius")
      text( dy="0em", :textLength="1.5 * radius",fill="white", lengthAdjust="spacingAndGlyphs") {{data.name}}
      text( dy="1.2em", :textLength=".5 * radius",fill="white", lengthAdjust="spacingAndGlyphs") {{data.role}}
    graph-item(
        v-for="employee in data.employees",
        :data="employee",
        :x="employee.x",
        :y="employee.y")
</template>

<script>
  import GraphItem from './GraphItem.vue'
  export default {
    name: 'graph-item',
    data () {
      return {
        opacity: 0
      }
    },
    props: {
      data: Object,
      isMain: {
        type: Boolean,
        default: false
      }
    },
    components: {
      GraphItem
    },
    created () {
      this.setupChildrenLocation(this.radius)
      this.setupLocation()
    },
    updated () {
      this.setupChildrenLocation(this.radius)
      this.setupLocation()
    },
    methods: {
      setupChildrenLocation (radius) {
        let length = this.data.employees.length
        if (length === 0) return
        let angle = (Math.PI * 2) / length
        for (let i = 0; i < length; i++) {
          this.data.employees[i].angle = angle * i
          this.data.employees[i].level = this.data.level + 1
        }
      },
      selectSubtreeAsParent () {
        this.$store.commit('setCurrentTree', this.data)
      },
      setupLocation () {
        console.log(this.isMain)
        if (this.levelDiff === 0) {
          this.data.x = '50%'
          this.data.y = '50%'
        } else {
          let r = ((this.radius * 2) + 30) + ((2 - this.levelDiff) * 100)
          let y = r * Math.sin(this.data.angle)
          let x = r * Math.cos(this.data.angle)
          this.data.x = x
          this.data.y = y
        }
      }
    },
    computed: {
      display () {
        return this.levelDiff >= 0 && this.levelDiff <= 2 ? 'block' : 'none'
      },
      childDisplay () {
        return this.levelDiff >= 0 && this.levelDiff <= 1 ? 'block' : 'none'
      },
      radius () {
        if (this.levelDiff > 2) return 0
        return (3 - this.levelDiff) * 30
      },
      childRadius () {
        if (this.levelDiff > 2) return 0
        return (2 - this.levelDiff) * 30
      },
      levelDiff () {
        return (this.data.level - this.$store.state.Graph.currentlySelectedLevel)
      }
    }
  }
</script>

<style scoped lang="scss">
  .node{
    overflow: visible;
    g {
      transition: transform 450ms ease 0ms;
      circle {
        fill: rgb(31, 79, 80);
        fill-opacity: 2.75;
        stroke: rgb(31, 119, 80);
        stroke-width: 1px;
      }
      text {
        text-anchor: middle;
      }
    }
  }
  .node g:hover{
    transform: scale(1.1);
  }
</style>
