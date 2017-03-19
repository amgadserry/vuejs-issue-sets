<template lang="pug">
  div.image-picker
    input(type="file", ref="imgInput", @change="imageSelected")
    img(v-if="imageData || image",
        :src="imageData || image",
        @click="handleClick")
    div.add-image(v-else, @click="handleClick")
      i.fa.fa-plus
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
    img, .add-image{
      width: 150px;
      height: 150px;
      margin-bottom: 20px;
      border-radius: 50%;
      cursor: pointer;
    }
    .add-image{
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #E2E9ED;
      i {
        font-size: 50px;
      }
    }
  }
</style>
