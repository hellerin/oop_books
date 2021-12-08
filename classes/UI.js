class UI {
    addBook(book){
        const tr = document.createElement("tr")
        const trContent =`<td>${book.title}</td>
               <td>${book.author}</td>
               <td>${book.isbn}</td>
               <td><a href="#">X</a></td>`

        tr.innerHTML = trContent
        const bookList = document.querySelector("#book-list")
        bookList.appendChild(tr)

    }
}