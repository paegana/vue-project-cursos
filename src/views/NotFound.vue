<script>
export default{
    data(){
        return{
            titulo: 'COMPONENTE NO ENCONTRADO. NOT FOUND. ERROR 404'
        }
    }
}
</script>
<template>
    <div id="divNotFound">
        <h1 v-html="titulo"></h1>
    </div>
</template>
<style scoped>
#divNotFound{
    background-color: red;
    color: white;
}
</style>