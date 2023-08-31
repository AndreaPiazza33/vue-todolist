//TO DO LIST
const toDo = [
    {
        title:'prendere il giornale',
        done: false,
    },
    {
        title:'fare la spesa',
        done: true,
    },
    {
        title:'portare fuori il cane',
        done: true,
    },
    {
        title:'preparare da mangiare',
        done: false,
    },
    {
        title:'tagliare il prato',
        done: false,
    },
    {
        title:'andare a camminare',
        done: true,
    },
    {
        title:'leggere un libro',
        done: true,
    },
]



//VUE
const { createApp } = Vue;

createApp({
  data() {
    return {
        toDo,
    }
  },   
}).mount('#app')

