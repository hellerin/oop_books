// App object
const ui = new UI()
const ls = new LS()

//User input form
const form = document.querySelector("#book-form")
form.addEventListener("submit", addBook)

//addBook function
function addBook(event){
//get form data value from form input
    const title = ui.title.value
    const author = ui.author.value
    const isbn = ui.isbn.value

    // Create book object with user data
    const book = new Book(title, author, isbn)
    console.log(book)

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
