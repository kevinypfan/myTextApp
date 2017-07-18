<template>
  <div class="container">
     <div class="row">
         <h1>
             Counter is : {{ counter }}
         </h1>
     </div>
     <div class="row">
         <app-btn></app-btn>
     </div>
  </div>
</template>

<script>
import Button from './Button.vue'
    export default{
        data(){
            return {
                
            }
        },
        components:{
            appBtn: Button
        },
        computed:{
            counter(){
                return this.$store.state.counter;
            }
        }
    }
</script>

<style>

</style>
