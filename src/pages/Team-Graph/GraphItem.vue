<template lang="pug">
  svg(class="node", :x="x", :y="y", v-if="display")
    line(:style="{opacity: childrenOpacity }", v-if="displayChildrenLines", v-for="employee in data.employees", :x1="0", :y1="0", :x2="employee.x", :y2="employee.y", stroke="gray")
    g(@mousedown.left="selectCurrent")
      circle(:r="radius")
      text( dy="0em", :textLength="1.5 * radius",fill="white", lengthAdjust="spacingAndGlyphs") {{data.name}}
      text( dy="1.2em", :textLength=".5 * radius",fill="white", lengthAdjust="spacingAndGlyphs") {{data.role}}
    graph-item(
        v-for="employee in data.employees",
        :data="employee",
        :x="employee.x",
        :y="employee.y",
        :isMain="false",
        :style="{opacity: childrenOpacity }")
</template>

<script>
  import GraphItem from './GraphItem.vue'
  import TWEEN from 'tween.js'
  export default {
    name: 'graph-item',
    data () {
      return {
        currentlySelectedChild: undefined,
        position: {
          x: 0,
          y: 0
        },
        childrenOpacity: 1.0
      }
    },
    props: {
      data: Object,
      isMain: {
        type: Boolean,
        default: true
      }
    },
    components: {
      GraphItem
    },
    created () {
      if (this.isMain) {
        this.data.x = 500
        this.data.y = (this.radius + 20)
        this.data.level = 1
        this.data.isSelected = false
        this.$store.commit('setSelected', this.data)
      }
      this.setChildrenLocations()
    },
    updated () {
      this.setChildrenLocations()
    },
    methods: {
      setChildrenLocations () {
        let getIteration = (idx, length, itemsPerIteration = 12) => {
          let iteration = 1
          let currentItemsPerIteration
          while (idx >= 0) {
            currentItemsPerIteration = iteration % 2 === 0 ? itemsPerIteration - 1 : itemsPerIteration
            idx -= currentItemsPerIteration
            iteration++
          }
          let maxIterations = 1
          let maxIdx = length
          let currentItemsPerIterationForMax
          while (maxIdx >= 0) {
            currentItemsPerIterationForMax = maxIterations % 2 === 0 ? itemsPerIteration - 1 : itemsPerIteration
            maxIdx -= currentItemsPerIterationForMax
            maxIterations++
          }
          return {
            currentItemsPerIteration,
            iteration,
            xIdx: idx + currentItemsPerIteration,
            itemShortageInIteration: maxIterations === iteration ? Math.abs(maxIdx) : 0}
        }
        this.data.employees = this.data.employees.map((employee, idx) => {
          let { iteration, xIdx, itemShortageInIteration } = getIteration(idx, this.data.employees.length)
          employee.level = this.data.level + 1
          employee.y = 40 + ((iteration - 1) * 80)
          let margin = iteration % 2 === 1 ? 40 : 0
          employee.x = ((xIdx * (1000 / 12)) + (this.radius)) - 507
          employee.x += margin
          employee.x += Math.floor(itemShortageInIteration / 2) * (1000 / 12)
          return employee
        })
      },
      selectCurrent () {
        if (!this.isSelected) {
          this.position.x = this.data.x
          this.position.y = this.data.y
          this.childrenOpacity = 0
          let opacityTween =
            new TWEEN.Tween(this.childrenOpacity)
            .easing(TWEEN.Easing.Quadratic.Out)
            .to(100, 500).onUpdate((val) => { this.childrenOpacity = val })
          new TWEEN.Tween(this.position)
            .easing(TWEEN.Easing.Quadratic.Out)
            .to({x: 0, y: 110}, 250)
            .chain(opacityTween)
            .start()
          requestAnimationFrame(animate)
        } else if (this.$store.state.Graph.selectedNodes[this.$store.state.Graph.selectedNodes.length - 1] !== this.data) {
          this.childrenOpacity = 0
          new TWEEN.Tween(this.childrenOpacity)
          .easing(TWEEN.Easing.Quadratic.Out)
          .to(100, 250).onUpdate((val) => { this.childrenOpacity = val })
          .start()
          requestAnimationFrame(animate)
        }
        function animate (time) {
          requestAnimationFrame(animate)
          TWEEN.update(time)
        }
        this.$store.commit('setSelected', this.data)
      }
    },
    computed: {
      radius () {
        return this.isSelected ? 50 : 40
      },
      levelDiff () {
        return Math.abs(this.data.level - this.$store.state.Graph.currentlySelectedLevel)
      },
      display () {
        if (this.isSelected) {
          return true
        }
        if (this.data.level > this.$store.state.Graph.selectedNodes.length) {
          if (this.$store.state.Graph.selectedNodes[this.$store.state.Graph.selectedNodes.length - 1].employees.find(
              (el) => el === this.data)) {
            return true
          }
        }
        return false
      },
      displayChildrenLines () {
        return this.$store.state.Graph.selectedNodes[this.$store.state.Graph.selectedNodes.length - 1] === this.data
      },
      x () {
        return this.isSelected && !this.isMain ? this.position.x : this.data.x
      },
      y () {
        return this.isSelected && !this.isMain ? this.position.y : this.data.y
      },
      isSelected () {
        return this.$store.state.Graph.selectedNodes.find((el) => this.data === el)
      }
    }
  }
</script>

<style scoped lang="scss">
  .node{
    overflow: visible;
    g {
      transition: transform 450ms ease 0ms;
      cursor: pointer;
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
