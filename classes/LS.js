class LS {
    getData(key){

    }
    getData(key){
        let data
        if(localStorage.getItem("key") === null){
            data = []
        } else {
            data = JSON.parse(localStorage.getItem("key"))
        }
        return
    }
}
setData (key, data){
    localStorage.setItem(key, JSON.stringify(data))
}
addBook(book) {
    const books = this.getData("books")
    books.push(book)
    this.getData("books", books)
}
