<template>
  <div>
     <button class="btn btn-primary" @click="add">add</button>
     <button class="btn btn-primary" @click="discount">discout</button>
  </div>
</template>

<script>

    export default{
        methods:{
            add(){
                this.$store.state.counter++
            },
            discount(){
                this.$store.state.counter--
            }
        }
    }
</script>

<style>

</style>
