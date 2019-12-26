<template>
    <div>
        <h1 >{{demo}}</h1>
        <h2 v-test="'yellow'">{{dm}}</h2>
        <h1>
            <test-props='abcxyz'/>
        </h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            demo:'dang test'
        }
    },
    name:'DangDemo',
    props: {
        dm: String
    },
    beforeCreate(){
      console.log('beforeCreate')  
    },
    created(){
        console.log('created') 
    },
    beforeMount(){
        console.log('beforeMount') 
    },
    mounted(){
        console.log('befomountedreCreate') 
    },
    beforeUpdate(){
        console.log('beforeUpdate') 
    },
    updated(){
        console.log('updated') 
    },
    beforeDestroy(){
        console.log('beforeDestroy') 
    },
    destroyed(){
        console.log('destroyed') 
    }
}
</script>

<style>

</style>