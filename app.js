// App object
const ui = new UI()
const ls = new LS()

//User input form
const form = document.querySelector("#book-form")
form.addEventListener("submit", addBook)

//Page reload
document.addEventListener("DOMContentLoaded", getBooks)

//Books table click event
const bookList = document.querySelector("#book-list")
bookList.addEventListener("click", delBook)

// book filter keyboard event
const filter = document.querySelector("#filter")
filter.addEventListener("keyup", filterBook)

function filterBook(event){
    let filter = event.target.value.toLowerCase()
    ui.filterData(filter)
}

//delBook
function delBook(event){
    if(event.target.textContent === "x"){
        const book = ui.getBook(event.target)
        if(ui.delBook(event.target) === true){
            ls.delBook(book)
        }
    }
}

function getBooks(){
    // Get data from ls
    const books = ls.getData("books")
    console.log(books)
    //for each book in books
    books.forEach(function (booksFromLS){
        ui.addBook(booksFromLS)
    })
}

//addBook function
function addBook(event){
//get form data value from form input
    const title = ui.title.value
    const author = ui.author.value
    const isbn = ui.isbn.value

    // Create book object with user data
    const book = new Book(title, author, isbn)

    // Save book data to ls
    ls.addBook(book)

    // Add book data to UI and show it
    ui.addBook(book)

    // clear form input value
    ui.title.value = ""
    ui.author.value = ""
    ui.isbn.value = ""
    event.preventDefault()
}
