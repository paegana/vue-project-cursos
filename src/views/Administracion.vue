<script>
import { mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default{
    data(){
        return{
            titulo: 'Administracion'
        }
    },
    computed:{
        ...mapState(useCounterStore, ['losCursos']),
    }
}
</script>
<template>
    <div id="divAdministracion">
        <h1 v-html="titulo"></h1>

        <table class="table table-dark table-hover ">
            <thead>
                <tr>
                    <th scope="col">Curso</th>
                    <th scope="col">Cupos</th>
                    <th scope="col">Inscritos</th>
                    <th scope="col">Duración</th>
                    <th scope="col">Costo</th>
                    <th scope="col">Terminado</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="curso in losCursos">
                    <th scope="row">{{ curso.id }}</th>
                    <td>{{ curso.cupos }}</td>
                    <td>{{ curso.inscritos }}</td>
                    <td v-html="curso.duracion"></td>
                    <td>{{ curso.costo }}</td>
                    <td>{{ curso.completado }}</td>
                    <td>{{ curso.fecha_registro }}</td>
                    <td><p>BOTONES</p></td>
                </tr>

            </tbody>
        </table>

    </div>
</template>
<style scoped>
#divAdministracion{
    background-color:aquamarine;
    color: black;
}
</style>