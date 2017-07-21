<template>
  <div>
     <button class="btn btn-primary" @click="addCounter">add</button>
     <button class="btn btn-primary" @click="minusCounter">discout</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
    export default{
        methods:{
            ...mapMutations([
                 'addCounter',
                'minusCounter'
            ])
        }
    }
</script>

<style>

</style>
