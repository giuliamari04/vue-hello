const {createApp}=Vue

const miaApp = createApp({
    data(){
        return{
            message: 'prima app in vue', 
            img: 'img/cheeems.png',  
            imgClass:'w-50',  
        }
    }
   
}).mount('#app');