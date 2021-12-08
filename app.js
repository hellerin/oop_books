// App object
const ui = new UI()

//User input form
const form = document.querySelector("#book-form")
form.addEventListener("submit", addBook)

//addBook function
function addBook(event){
//get form data value from form input
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const isbn = document.querySelector("#isbn").value

    // Create book object with user data
    const book = new Book(title, author, isbn)
    console.log(book)

    // Add book data to UI and show it
    ui.addBook(book)

    // clear form input value
    document.querySelector("#title").value = ""
    document.querySelector("#author").value = ""
    document.querySelector("#isbn").value = ""
    event.preventDefault()
}
