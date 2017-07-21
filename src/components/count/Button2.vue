<template>
  <div>
     <button class="btn btn-success" @click="addNotto({by: 100, delay: 100})">add</button>
     <button class="btn btn-success" @click="minusNotto({ by: 50, delay: 100})">discout</button>
  </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default{
        methods:{
            ...mapActions([
                 'addNotto',
                'minusNotto'
            ]),
            addNotto(num){
                this.$store.dispatch('addNotto',num)
            },
            minusNotto(num){
                this.$store.dispatch('minusNotto',num)
            }
        }
    }
</script>

<style>

</style>
