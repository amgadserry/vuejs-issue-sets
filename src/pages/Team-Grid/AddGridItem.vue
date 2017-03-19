<template lang="pug">
  div.add-grid-item(@click="addUser")
    i.fa.fa-plus
    bm-drawer(:isOpened="false", ref="drawer")
      bm-user-form
</template>

<script>
  import BmDrawer from '../../components/BmDrawer.vue'
  import BmUserForm from '../../components/BmUserForm.vue'
  export default {
    components: {
      BmDrawer,
      BmUserForm
    },
    methods: {
      addUser () {
        this.$refs.drawer.toggle()
      }
    }
  }
</script>

<style scoped lang="scss">
  .add-grid-item{
    width: 200px;
    height: 210px;
    overflow: hidden;
    border: 1px solid #E2E9ED;
    transition: all .3s ease;
    background-color: white;
    z-index:1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    i{
      font-size: 50px;
    }
  }
  .add-grid-item:hover{
    transform: scale(1.1);
    box-shadow: 0 8px 50px rgba(0, 0, 0, 0.2);
    z-index: 2;
  }
</style>
