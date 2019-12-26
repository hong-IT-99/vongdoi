<template>
    <div>
        <h1>{{demo}}</h1>
        <h2>{{msg}}</h2>
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
        msg: String
    },
    beforeCreate(){
        alert('beforeCreate')
    },
    created(){
        alert('created')
    },
    beforeMount(){
        alert('beforeMount')
    },
    mounted(){
        alert('mounted')
    },
    beforeUpdate(){
        alert('beforeUpdate')
    },
    updated(){
        alert('updated')
    },
    beforeDestroy(){
        alert('beforeDestroy')
    },
    destroyed(){
        alert('destroyed')
    }
}
</script>

<style>

</style>