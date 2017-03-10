<template lang="pug">
  .div.bm-layout-admin-panel
    el-menu(mode="horizontal", :router="true")
      el-menu-item.no-interactions(index="5")
        i.fa.fa-fort-awesome(aria-hidden="true")
      el-menu-item.float-right(index="4") Home again 3
      el-menu-item.float-right(index="3") Home again 2
      el-menu-item.float-right(index="2") Home again
      el-menu-item.float-right(index="/Team", :route="{name:'Team'}") Manage team
    router-view
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
  .bm-layout-admin-panel{
    .no-interactions{
      pointer-events: none;
    }
    .float-right{
      float: right;
    }
  }
</style>
