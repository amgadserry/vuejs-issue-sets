<template lang="pug">
  div.input-wrapper
    slot
</template>

<script>
    export default { }
</script>

<style scoped lang="scss">
  .el-input__inner.invalid{
    border-color: red;
  }
  .input-wrapper{
    display: flex;
    align-items: baseline;
    margin-bottom: 20px;
    label{
      flex: 1;
    }
    div{
      flex: 3;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      span{
        opacity: 0;
        margin-left: 5px;
        font-size: 12px;
        color: red;
        font-weight: 100;
        margin-top: 2px;
        display: none;
      }
      span:first-of-type{
        display: inline;
      }
    }
  }
</style>

<style lang="scss">
  .input-wrapper.invalid{
    .el-input__inner{
      border-color: red;
    }
    span{
      opacity: 1 !important;
      transition: all .5s ease;
    }
  }
</style>
