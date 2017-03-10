<template lang="pug">
  div.bm-page-login
    el-card
      form(@submit.prevent="onSubmit")
        bm-input-wrapper( :class="{ 'invalid': $v.username.$error}")
          label Username
          div
            el-input(placeholder="Username", v-model="username")
            span.error(v-if="!$v.username.required") Username is required
        bm-input-wrapper( :class="{ 'invalid': $v.password.$error}")
          label Password
          div
            el-input(placeholder="Password", type="password", v-model="password")
            span.error(v-if="!$v.password.required") Password is required
        el-button(type="primary", native-type="submit") Login
</template>

<script>
  import BmInputWrapper from '../../components/BmInputWrapper.vue'
  import { validationMixin } from 'vuelidate'
  import {required} from 'vuelidate/lib/validators'
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    validations: {
      username: {
        required
      },
      password: {
        required
      }
    },
    methods: {
      onSubmit () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.$router.push('admin')
        }
      }
    },
    components: {
      BmInputWrapper
    },
    mixins: [validationMixin]
  }
</script>

<style scoped lang="scss">
  .bm-page-login{
    min-width:100%;
    min-height:100%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-card{
      width: 50%;
    }
    .el-button{
      width: 100%;
    }
  }
</style>
