<template lang="pug">
  div.bm-hierarchy
    hierarchy-item(:data="data[0]")
</template>

<script>
  import HierarchyItem from './HierarchyItem.vue'
  export default {
    components: {
      HierarchyItem
    },
    data () {
      return {
        data: [{
          name: 'Amgad Serry',
          role: 'Role',
          image: 'https://s-media-cache-ak0.pinimg.com/originals/da/63/86/da6386ea022e254dbed22c9ff5495b2a.jpg',
          employees: [
            {
              name: 'some one',
              role: 'Role',
              image: 'https://s-media-cache-ak0.pinimg.com/originals/da/63/86/da6386ea022e254dbed22c9ff5495b2a.jpg',
              employees: []
            },
            {
              name: 'some one2',
              role: 'Role',
              image: 'https://s-media-cache-ak0.pinimg.com/originals/da/63/86/da6386ea022e254dbed22c9ff5495b2a.jpg',
              employees: []
            },
            {
              name: 'some one2',
              role: 'Role',
              image: 'https://s-media-cache-ak0.pinimg.com/originals/da/63/86/da6386ea022e254dbed22c9ff5495b2a.jpg',
              employees: []
            }
          ]
        },
        {
          name: 'Amgad Serry',
          role: 'Role',
          employees: [
            {
              name: 'some one',
              role: 'Role',
              employees: []
            },
            {
              name: 'some one',
              role: 'Role',
              employees: []
            }
          ]
        }]
      }
    }
  }
</script>

<style scoped lang="scss">
  .bm-hierarchy{
    display: flex;
    padding: 20px;
  }
</style>
