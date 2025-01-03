// Example File Path:
// ./src/stores/counter.js

import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    losCursos:[]
  }),
  actions:{
    establecerCursos(arregloCursos){
      this.losCursos = arregloCursos;
    }
  }
})