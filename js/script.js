const {createApp}=Vue

const miaApp = createApp({
    data(){
        return{
            message: 'Shiba Inu Samurai', 
            textClass:'text-light',
            img: 'img/cheeems.png',  
            imgClass:'w-50 m-4 rounded-4',  
            sfondo:'d-flex flex-column justify-content-center align-items-center align-content-center my-bg h-100vh',
        }
    }
   
}).mount('#app');