<template>
  <div>
      <h1>
          User {{msg.msg}}
      </h1>
  </div>
</template>

<script>
import msg from './data.js'

export default {
  data(){
    return {
      msg: msg
    }
  }
}
</script>

<style>

</style>
