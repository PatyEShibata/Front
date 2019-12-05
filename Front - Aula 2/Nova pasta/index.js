var app = new Vue({
    el: '#app',
    data: {
        title: 'Meus estados favoritos',
        message: 'Hello Vue!',
        aula: 'FRONT END COM VUEJS',
        states: [
          {"id":0,"nome":"Paraná"},
          {"id":1,"nome":"Rio de Janeiro"},
          {"id":2,"nome":"Bahia"},
          {"id":3,"nome":"Santa Catarina"}
        ],
        stateName: ''
        
    },
    methods: {
        changeInputValue(event) {
            this.message = event.target.value;
        },
        setStateName(event){
            this.stateName = event.target.value;
        },
        addStateList(){
            const id = this.states.length;
            this.states.push({
                id: id,
                nome: this.stateName
            });
        }
    },
    created(){
        console.log('criou o componente')
        this.getStates()
    }
  })