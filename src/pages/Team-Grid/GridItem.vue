<template lang="pug">
  div.grid-item(
      v-loading.body="user.grid.isBeingDeleted",
      element-loading-text="Deleting...",
      @click="toggleSelected")
    img(:src="user.info.image")
    div.name {{user.fullname()}}
    div.role Role
    div.actions
      i.fa.fa-pencil(aria-hidden="true", @click.stop="$refs.editUserDrawer.toggle()")
      i.fa.fa-trash(aria-hidden="true", @click.stop="deleteUser")
      i.fa.fa-sitemap(aria-hidden="true", @click.stop="$refs.relationsDrawer.toggle()")
    div.checkmark(v-if="user.grid.isSelected")
      i.fa.fa-check
    bm-drawer(:isOpened="false", ref="editUserDrawer")
      bm-user-form(:user="user")
    bm-drawer(:isOpened="false", ref="relationsDrawer")
      bm-user-relations-form
</template>

<script>
  import User from '../../store/models/User.model'
  import { DELETE_USER_ACTION } from '../../store/actionTypes'
  import BmDrawer from '../../components/BmDrawer.vue'
  import BmUserForm from '../../components/BmUserForm.vue'
  import BmUserRelationsForm from '../../components/BmUserRelationsForm.vue'
  export default {
    data () {
      return {
      }
    },
    props: {
      user: {
        type: User,
        required: true
      }
    },
    methods: {
      toggleSelected () {
        this.user.grid.isSelected = !this.user.grid.isSelected
      },
      deleteUser () {
        this.$confirm('Are you sure you want to delete ' + this.user.fullname() + ' ?',
            'Warning', {
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              type: 'warning'
            }).then(() => {
              this.user.grid.isBeingDeleted = true
              this.$store.dispatch(DELETE_USER_ACTION, [this.user]).then(() => {
                this.$message({
                  type: 'success',
                  message: this.user.fullname() + ' has been deleted'
                })
              })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: 'Delete canceled'
              })
            })
      }

    },
    components: {
      BmDrawer,
      BmUserForm,
      BmUserRelationsForm
    }
  }
</script>

<style scoped lang="scss">
  .grid-item{
    width: 200px;
    height: 210px;
    overflow: hidden;
    border: 1px solid #E2E9ED;
    transition: all .3s ease;
    background-color: white;
    z-index:1;
    position: relative;
    img{
      border-radius: 100%;
      width: 70px;
      height: 70px;
      margin-top: 20px;
    }
    .name{
      color: #313435;
      font-family: 'Roboto', sans-serif;
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 2.625rem;
    }
    .role{
      color: #6F808A;
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      line-height: 2.375rem;
    }
    .actions{
      display: flex;
      width: 100px;
      align-items: center;
      justify-content: space-around;
      margin: 0px auto;
      font-size: 20px;
      padding: 10px 0px;
      opacity: 0;
      transition: all .8s ease;
      i{
        cursor: pointer;
      }
    }
    .checkmark{
      font-size: 25px;
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
  .grid-item:hover{
    transform: scale(1.1);
    box-shadow: 0 8px 50px rgba(0, 0, 0, 0.2);
    z-index:2;
    .actions{
      opacity: 1;
    }
  }
</style>
