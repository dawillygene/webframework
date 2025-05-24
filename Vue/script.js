const app = Vue.createApp({

    data() {
        return {
        listShow: true,
            books: [
                { name: "The Final Revival of Opal & Nev", author: "Dawnie Walton", img: "https://media.istockphoto.com/id/1771936111/photo/vintage-books-plant-in-pot-candle-in-candlestick-minimalistic-interior-decor-scandinavian.jpg?s=1024x1024&w=is&k=20&c=RbYrvMeTqTe8DU4HWr38cBlYkoeGtKUJDbhD6xrd12c=", isFav: true },
                { name: "The Midnight Library", author: "Matt Haig", img: "https://media.istockphoto.com/id/1771936111/photo/vintage-books-plant-in-pot-candle-in-candlestick-minimalistic-interior-decor-scandinavian.jpg?s=1024x1024&w=is&k=20&c=RbYrvMeTqTe8DU4HWr38cBlYkoeGtKUJDbhD6xrd12c=", isFav: false },
                { name: "The Invisible Life of Addie LaRue", author: "V.E. Schwab", img: "https://media.istockphoto.com/id/1771936111/photo/vintage-books-plant-in-pot-candle-in-candlestick-minimalistic-interior-decor-scandinavian.jpg?s=1024x1024&w=is&k=20&c=RbYrvMeTqTe8DU4HWr38cBlYkoeGtKUJDbhD6xrd12c=", isFav: true },
                { name: "The Vanishing Half", author: "Brit Bennett", img: "https://media.istockphoto.com/id/1771936111/photo/vintage-books-plant-in-pot-candle-in-candlestick-minimalistic-interior-decor-scandinavian.jpg?s=1024x1024&w=is&k=20&c=RbYrvMeTqTe8DU4HWr38cBlYkoeGtKUJDbhD6xrd12c=", isFav: false },
                { name: "Where the Crawdads Sing", author: "Delia Owens", img: "https://media.istockphoto.com/id/1771936111/photo/vintage-books-plant-in-pot-candle-in-candlestick-minimalistic-interior-decor-scandinavian.jpg?s=1024x1024&w=is&k=20&c=RbYrvMeTqTe8DU4HWr38cBlYkoeGtKUJDbhD6xrd12c=", isFav: true },
                { name: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", img: "https://media.istockphoto.com/id/1771936111/photo/vintage-books-plant-in-pot-candle-in-candlestick-minimalistic-interior-decor-scandinavian.jpg?s=1024x1024&w=is&k=20&c=RbYrvMeTqTe8DU4HWr38cBlYkoeGtKUJDbhD6xrd12c=", isFav: false },
            ]
        }
    },
    methods:{
        togglefav(book){
            book.isFav = !book.isFav
        }
    }
,
computed:{
    filteredBooks(){
        return this.books.filter((book)=> book.isFav);
    }
}


});

app.mount("#app");