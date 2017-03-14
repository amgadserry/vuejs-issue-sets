<template lang="pug">
  div.bm-user-form
    form(@submit.prevent="")
      image-picker(:image="user.editInfo.image", v-model="user.editInfo.imageFile")
      bm-input-wrapper( :class="{ 'invalid': $v._user.editInfo.firstName.$error}")
        label First name
        div
          el-input(placeholder="first name", v-model="_user.editInfo.firstName")
          span.error(v-if="!$v._user.editInfo.firstName.required") First name is required
      bm-input-wrapper( :class="{ 'invalid': $v._user.editInfo.lastName.$error}")
        label Last name
        div
          el-input(placeholder="first name", v-model="_user.editInfo.lastName")
          span.error(v-if="!$v._user.editInfo.lastName.required") Last name is required
      bm-input-wrapper( :class="{ 'invalid': $v._user.editInfo.phone.$error}")
        label Phone
        div
          el-input(placeholder="Phone", v-model="_user.editInfo.phone")
          span.error(v-if="!$v._user.editInfo.phone.required") Phone is required
      bm-input-wrapper( :class="{ 'invalid': $v._user.editInfo.email.$error}")
        label Email
        div
          el-input(placeholder="Email", v-model="_user.editInfo.email")
          span.error(v-if="!$v._user.editInfo.email.required") Email is required
      el-button(type="primary", native-type="submit", @submit="user.save") Submit

</template>

<script>
  import BmInputWrapper from './BmInputWrapper.vue'
  import { validationMixin } from 'vuelidate'
  import {required} from 'vuelidate/lib/validators'
  import User from '../store/models/User.model'
  import ImagePicker from './ImagePicker.vue'
  export default {
    data () {
      return {
        _user: null
      }
    },
    props: {
      user: {
        type: User,
        required: true
      }
    },
    components: {
      BmInputWrapper,
      ImagePicker
    },
    mixins: [validationMixin],
    validations: {
      _user: {
        editInfo: {
          firstName: {
            required
          },
          lastName: {
            required
          },
          phone: {
            required
          },
          email: {
            required
          }
        }
      }
    },
    created () {
      this._user = this.user
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
