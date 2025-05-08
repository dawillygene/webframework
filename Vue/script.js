const app = Vue.createApp({

    data() {
        return {

            books: [
                {
                    title: "History of America",
                    year: 1993
                }, {

                    title: "European Nations",
                    year: 5644
                },
                {

                    title: "James Brond",
                    year: 2311
                },
                {

                    title: "GROW RICH THE MAN OF BABILON",
                    year: 3452
                },
            ]
            ,
            visibility: true,
            title: "The trial of brother jewel",
            name: "dawilly brodah gene",
            age: 75

        }
    },
    methods: {
        changeHeader() {
            this.title = "HeavenLight Mariki"
        }
        ,
        toggle() {
            this.visibility = !this.visibility

        }
    }

})

app.mount('#app')

