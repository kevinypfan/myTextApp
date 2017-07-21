<template>
  <div>
      <h1>
          {{ getValue }}
      </h1>
      <input type="text" v-model="getValue">
  </div>
</template>

<script>
    
    export default{
        computed:{
            getValue:{
                get(){
                    return this.$store.getters.getValue;
                },
                set(value){
                    this.$store.dispatch("updateValue",value)
                }
            }
        }
    }
</script>

<style>

</style>
