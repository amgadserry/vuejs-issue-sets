<template lang="pug">
  div.team-management-layout
    div.actions
      el-button-group
        el-button
          i.fa.fa-sitemap(aria-hidden="true")
        el-button(@click="() => this.$router.push({name: 'Grid'})")
          i.fa.fa-th-large(aria-hidden="true")
    router-view
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
  .team-management-layout{
    .actions{
      background-color: #eef1f6;
      .el-button-group{
        margin-top: 20px;
        margin-bottom: 20px;
        i{
          font-size: 30px;
          margin-left: 30px;
          margin-right: 30px;
        }
      }
    }
  }
</style>
