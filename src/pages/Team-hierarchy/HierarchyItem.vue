<script src="../../../.eslintrc.js"></script>
<template lang="pug">
  div.bm-hierarchy-item
    div.user
      div.img-wrapper
        img(:src="data.image")
      div.user-info
        p {{data.name}}
        p {{data.role}}
    div.children-container(v-if="data.employees.length > 0")
      hierarchy-item(v-for="employee in data.employees", :data="employee")
</template>

<script>
  import HierarchyItem from './HierarchyItem.vue'
  export default {
    name: 'hierarchy-item',
    data () {
      return {
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
      HierarchyItem
    }
  }
</script>

<style scoped lang="scss">
  .bm-hierarchy-item{
    display: flex;

    .user{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 130px;
      height: 130px;
      position: relative;
      z-index: 1;
      img{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
      }
      .user-info{
        background-color: rgba(255, 255, 255, 0.64);
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 50px;
        p{
          font-weight: bolder;
          position: relative;
          top: -10px;
        }
        p:last-child{
          top: -22px;
        }
      }
    }
    .user::before{
      content: '';
      width: 25px;
      background-color: black;
      height: 4px;
      position: absolute;
      right: -25px;
    }
    .children-container{
      position: relative;
      .bm-hierarchy-item{
        margin-left: 50px;
        margin-bottom: 10px;
        .user::before{
          left: -25px;
        }
      }
    }
    .children-container::before{
      height: auto;
      width: 4px;
      position: absolute;
      content: '';
      background-color: black;
      top: 67px;
      bottom: 73px;
      left: 25px;
      display: block;
    }
  }
</style>
