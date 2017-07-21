<template>
  <div class="container">
     <div class="row">
         <h1>
             Counter is : {{ counter }}
         </h1>
     </div>
     <app-counter></app-counter>
     <div class="row">
         <app-btn></app-btn>
     </div>
     <div class="row">
         <app-button-too></app-button-too>
     </div>
  </div>
</template>

<script>
import Button from './Button.vue'
import Counter from './Counter2.vue'
import ButtonToo from './Button2.vue'
    export default{
        data(){
            return {
                
            }
        },
        components:{
            appBtn: Button,
            appCounter: Counter,
            appButtonToo: ButtonToo
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
