<template lang="pug">
  div.team-grid(v-loading.fullscreen="users.length === 0")
    div.grid-filters
      el-input(icon="search", v-model="nameFilter")
    div.grid
      grid-item(:user="user",v-for="user in filteredUsers(nameFilter)")
</template>

<script>
  import {GET_ALL_USERS_ACTION} from '../../store/actionTypes'
  import GridItem from './GridItem.vue'
  import {mapGetters} from 'vuex'
  export default {
    created () {
      if (this.users.length === 0) {
        this.$store.dispatch(GET_ALL_USERS_ACTION)
      }
    },
    data () {
      return {
        nameFilter: ''
      }
    },
    computed: {
      users () {
        return this.$store.state.User.users
      },
      ...mapGetters(['filteredUsers'])
    },
    components: {
      GridItem
    }
  }
</script>

<style scoped lang="scss">
  .team-grid{
    .grid-filters{
      display: flex;
      justify-content: flex-end;
      padding: 10px;
      background-color: #eef1f6;
      *{
        float: right;
      }
    }
    .grid{
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      flex-direction: row;
    }
  }
</style>
