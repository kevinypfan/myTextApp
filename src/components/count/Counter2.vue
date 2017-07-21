<template>
     <div class="row">
         <h1>
            Double  Counter is : {{ doubleCounter }}
         </h1>
         <h1>
            Button click : {{ counterString }}
         </h1>
     </div>
</template>

<script>
import Button from './Button.vue'
import { mapGetters } from 'vuex'
    
    export default{
        
        components:{
            appBtn: Button
        },
        computed: {
            ...mapGetters([
                'doubleCounter',
                'counterString'
            ])
        }
    }
</script>

<style>

</style>
