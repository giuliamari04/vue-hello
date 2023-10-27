const {createApp}=Vue

const miaApp = createApp({
    data(){
        return{
            message: 'prima app in vue',     
        }
    }
   
}).mount('#app');