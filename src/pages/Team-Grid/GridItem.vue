<template lang="pug">
  div.grid-item(  @mouseenter="setActions(true)",
                  @mouseleave="setActions(false)")
    transition( name="custom-classes-transition"
                enter-active-class="animated fadeIn",
                leave-active-class="animated fadeOut")
      div.name(v-if="shouldShowActions")
        span {{user.fullname()}}
    img(:src="user.image")
    transition( name="custom-classes-transition"
                enter-active-class="animated fadeIn",
                leave-active-class="animated fadeOut")
      div.actions(v-if="shouldShowActions")
        i.fa.fa-pencil(aria-hidden="true")
        i.fa.fa-trash(aria-hidden="true")
</template>

<script>
  import User from '../../store/models/User.model'
  export default {
    data () {
      return {
        shouldShowActions: false
      }
    },
    props: {
      user: {
        type: User,
        required: true
      }
    },
    methods: {
      setActions (val) {
        this.shouldShowActions = val
      }
    }
  }
</script>

<style scoped lang="scss">
  .grid-item{
    position: relative;
    border-radius: 4px;
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
    margin-right: 10px;
    overflow: hidden;
    img{
      height: 100%;
      width: 100%;
    }
    .actions,.name{
      position: absolute;
      width: 100%;
      font-size: 24px;
      background-color: rgba(128, 128, 128, 0.74);
      padding: 5px 0px;
      color: white;
      animation-duration: .5s;
    }
    .name{
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    .actions{
      bottom: 0px;
      display: flex;
      justify-content: space-between;
      color: white;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      i{
        cursor: pointer;
      }
      i:first-child{
        margin-left: 10px;
      }
      i:last-child{
        margin-right: 10px;
      }
    }
    .name{
      top: 0px;
    }
  }
  .grid-item:hover{
    box-shadow: 0px 0px 10px ;
  }
</style>
