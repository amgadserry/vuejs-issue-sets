<template lang="pug">
  div
    div.test-block(@click="toggleSelected") {{isSelected}}
</template>

<script>
  export default {
    data () {
      return {
        user: undefined
      }
    },
    created () {
      this.user = this.$store.state.User.users[0]
    },
    methods: {
      toggleSelected () {
        this.$store.commit('toggleSelected', this.user)
      }
    },
    computed: {
      isSelected () {
        return this.$store.state.User.selectedUsers.has(this.user)
      }
    }
  }
</script>

<style scoped lang="scss">
  .test-block{
    width: 100px;
    height: 100px;
    background-color: #7f7f7f;
  }
</style>
