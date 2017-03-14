<template lang="pug">
  svg(class="node")
    line(:style="{ opacity: employee.opacity }", v-for="employee in data.employees", :x1="0", :y1="0", :x2="employee.x", :y2="employee.y", stroke="gray")
    g
      circle(:style="{ opacity: opacity }", :r="radius")
      text(:style="{ opacity: opacity }", dy="0em", :textLength="1.5 * radius",fill="white", lengthAdjust="spacingAndGlyphs") {{data.name}}
      text(:style="{ opacity: opacity }", dy="1.2em", :textLength=".5 * radius",fill="white", lengthAdjust="spacingAndGlyphs") {{data.role}}
    graph-item(
        v-for="employee in data.employees",
        :data="employee",
        :x="employee.x",
        :y="employee.y",
        :radius="employee.r",
        :level="level + 1")
</template>

<script>
  import GraphItem from './GraphItem.vue'
  export default {
    name: 'graph-item',
    data () {
      return {
      }
    },
    props: {
      data: Object,
      isMain: {
        type: Boolean,
        default: false
      },
      radius: {
        type: Number,
        default: 5
      },
      level: {
        type: Number,
        default: 1
      }
    },
    components: {
      GraphItem
    },
    created () {
      this.setupChildrenLocation()
    },
    watch: {
      radius (newVal) {
        this.setupChildrenLocation()
      }
    },
    methods: {
      setupChildrenLocation () {
        let length = this.data.employees.length
        if (length === 0) return
        let angle = (Math.PI * 2) / length
        let childRadius = this.radius / 1.3
        let r = (this.radius + childRadius) * 2
        for (let i = 0; i < length; i++) {
          let y = r * Math.sin(angle * i)
          let x = r * Math.cos(angle * i)
          this.data.employees[i].x = x
          this.data.employees[i].y = y
          this.data.employees[i].r = childRadius
        }
      }
    },
    computed: {
      opacity () {
        return 1 - (Math.abs(this.radius - 50) / 50)
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
