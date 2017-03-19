<template lang="pug">
  div.team-grid(v-loading.fullscreen="!this.$store.state.User.isInitialized")
    div.grid-filters
      el-input(
        icon="search",
        v-model="filter",
        placeholder="search by name, email, phone")
    transition(name="fade")
      div.grid-filters(v-if="selectedUsers && selectedUsers().length > 0")
        i.fa.fa-trash(aria-hidden="true", @click="deleteSelectedUsers")
    transition-group.grid(name="grid", tag="div")
      add-grid-item(key="addUserGridItem")
      grid-item(:user="user",:key="user.animationId", v-for="(user, idx) in filteredUsers(filter)")
</template>

<script>
  import {GET_ALL_USERS_ACTION, DELETE_USER_ACTION} from '../../store/actionTypes'
  import GridItem from './GridItem.vue'
  import AddGridItem from './AddGridItem.vue'
  import {mapGetters} from 'vuex'
  export default {
    created () {
      if (this.users.length === 0) {
        this.$store.dispatch(GET_ALL_USERS_ACTION)
      }
    },
    data () {
      return {
        filter: ''
      }
    },
    computed: {
      users () {
        return this.$store.state.User.users
      },
      ...mapGetters(['filteredUsers', 'selectedUsers'])
    },
    components: {
      GridItem,
      AddGridItem
    },
    methods: {
      deleteSelectedUsers () {
        let amountOfSelectedUsers = this.selectedUsers().length
        this.$confirm('Are you sure you want to delete ' + amountOfSelectedUsers + ' employees ?',
          'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
          }).then(() => {
            this.selectedUsers().map((user) => { user.grid.isBeingDeleted = true })
            this.$store.dispatch(DELETE_USER_ACTION, this.selectedUsers()).then(() => {
              this.$message({
                type: 'success',
                message: amountOfSelectedUsers + ' employees has been deleted'
              })
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: 'Delete canceled'
            })
          })
      }
    }
  }
</script>

<style scoped lang="scss">
  .team-grid{
    display: flex;
    flex-direction: column;
    justify-content: center;
    .grid-filters{
      display: flex;
      justify-content: center;
      padding: 10px;
      background-color: #eef1f6;
      i{
        font-size: 25px;
        cursor: pointer;
      }
    }
      .grid{
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
      }
  }
  .grid-enter, .grid-leave-to{
    opacity: 0;
    transform: scale(0);
  }
  .grid-move {
    transition: opacity 1s ease ;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active{
    transition: opacity .2s ease;
  }
</style>
