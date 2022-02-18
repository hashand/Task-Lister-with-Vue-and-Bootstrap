Vue.createApp({
    data() {
        return{
            inputs:'',
            outputs:[],
        
        }
    },
    methods:{
        addNotes(){
            event.preventDefault();
            this.outputs.push(this.inputs);
            this.inputs = '';

        },
        deleteNotes(index){
            event.preventDefault();
            this.outputs.splice(index, 1);
        }
    }
}).mount(".app")