<template lang="pug">
  div.bm-graph
    svg(
      width="100%",
      height="100%",
      viewBox="0 0 1000 1000",
      preserveAspectRatio='xMaxYMax',
      xmlns="http://www.w3.org/2000/svg",
      xmlns:xlink="http://www.w3.org/1999/xlink")
      hierarchy-item(:data="$store.state.Hierarchy.currentTree", :isMain="true")
</template>

<script>
  import HierarchyItem from './HierarchyItem.vue'
  export default {
    components: {
      HierarchyItem
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
