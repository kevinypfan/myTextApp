<template>
  <div>
      <h1>
          {{ getValue }}
      </h1>
      <input type="text" :value="getValue" @input="updateValue">
      <app-model></app-model>
  </div>
</template>

<script>
    import Model from './Model2.vue'
    export default{
        components:{
            appModel: Model
        },
        computed:{
            getValue(){
                    return this.$store.getters.getValue;
                }
            },
        methods:{
            updateValue(event){
                this.$store.dispatch("updateValue",event.target.value)
            }
        }
    }
    
</script>

<style>

</style>
