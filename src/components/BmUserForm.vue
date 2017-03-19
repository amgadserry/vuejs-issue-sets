<template lang="pug">
  div.bm-user-form
    el-form(:model="user.editInfo", :rules="rules", ref="form")
      image-picker(:image="user.editInfo.image", v-model="user.editInfo.imageFile")
      el-form-item(
          prop="firstName",
          label="First name")
        el-input(placeholder="first name", v-model="user.editInfo.firstName")
      el-form-item(
          prop="lastName",
          label="Last name")
        el-input(placeholder="last name", v-model="user.editInfo.lastName")
      el-form-item(
          prop="phone",
          label="Phone")
        el-input(placeholder="phone", v-model="user.editInfo.phone")
      el-form-item(
          prop="email",
          label="Email")
        el-input(placeholder="email", v-model="user.editInfo.email")
      el-form-item
        el-button(type="primary", native-type="submit", @click.prevent="submit") Submit
</template>

<script>
  import BmInputWrapper from './BmInputWrapper.vue'
  import User from '../store/models/User.model'
  import ImagePicker from './ImagePicker.vue'
  export default {
    data () {
      return {
        rules: {
          firstName: [
            {required: true, message: 'Please enter first name', trigger: 'change'}
          ],
          lastName: [
            {required: true, message: 'Please enter last name', trigger: 'change'}
          ],
          phone: [
            {required: true, message: 'Please enter phone number', trigger: 'change'}
          ],
          email: [
            {required: true, message: 'Please enter email', trigger: 'change'}
          ]
        }
      }
    },
    props: {
      user: {
        type: User,
        default: () => new User({})
      }
    },
    components: {
      BmInputWrapper,
      ImagePicker
    },
    methods: {
      submit () {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.$emit('submit', this._user)
          } else {
            return false
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .bm-user-form{
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    form{
      .img-wrapper{
        display: flex;
        justify-content: center;
        width: 100%;
        img{
          border-radius: 50%;
          height: 150px;
          width: 150px;
          margin-bottom: 20px;
        }
      }
      .el-button{
        width: 100%;
      }
    }
  }
</style>
