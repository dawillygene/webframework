const app = Vue.createApp({

    data(){
        return{

            toggleShow:true,
            name : "dawilly brodah gene",
            book: {name: "trials of love", author: "ngungi wa thiongo", published: 2019},
            books : [
                {name:"trials of love" , author:"ngungi wa thiongo" , published:2019 },
                {name:"the witcher" , author:"dawilly gene" , published:2019 },
                {name: "Things Fall Apart", author: "Chinua Achebe", published: 1958},
                {name: "Long Walk to Freedom", author: "Nelson Mandela", published: 1994},
                {name: "Half of a Yellow Sun", author: "Chimamanda Ngozi Adichie", published: 2006},
                {name: "Purple Hibiscus", author: "Chimamanda Ngozi Adichie", published: 2003}


            ]
        }
    },
    methods:{
        toggleVisible(){
            this.toggleShow = !this.toggleShow;
        }
    }


});

app.mount("#app")