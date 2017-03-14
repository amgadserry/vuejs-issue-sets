<template lang="pug">
  div.image-picker
    input(type="file", ref="imgInput", @change="imageSelected")
    img(:src="imageData || image", @click="handleClick")
</template>

<script>
  export default {
    data () {
      return {
        imageData: ''
      }
    },
    props: {
      image: String
    },
    methods: {
      handleClick () {
        let clickEvent = new MouseEvent('click', {
          bubbles: false,
          cancelable: true,
          view: window
        })
        this.$refs.imgInput.dispatchEvent(clickEvent)
      },
      imageSelected (e) {
        let fr = new FileReader()
        fr.onloadend = (e) => {
          this.imageData = e.target.result
        }
        fr.readAsDataURL(e.target.files[0])
        this.$emit('input', e.target.files[0])
      }
    }
  }
</script>

<style scoped lang="scss">
  .image-picker{
    display: flex;
    justify-content: center;
    input{
      display: none;
    }
    img{
      width: 150px;
      height: 150px;
      margin-bottom: 20px;
      border-radius: 50%;
    }
  }
</style>
