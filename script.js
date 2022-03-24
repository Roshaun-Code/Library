const openForm = document.querySelectorAll("[data-form-popup]");
const closeForm = document.querySelectorAll("[data-close-button]");
const submitButton = document.querySelectorAll("[data-submit-button]")
const overlay = document.querySelector(".overlay");
const cards = document.querySelector(".cards");
const removeButton = document.querySelectorAll(".remove-button")

openForm.forEach(button => {
    button.addEventListener('click', () => {
        const form = document.querySelector(".form-popup")
        openFormPopup(form)
    })
})


closeForm.forEach(button => {
    button.addEventListener('click', () => {
        const form = document.querySelector(".form-popup")
        closeFormPopup(form)
    })
})

overlay.addEventListener('click', () => {
    const forms = document.querySelectorAll(".form-popup.active")
    forms.forEach(form => {
        closeFormPopup(form);
    })
})

function openFormPopup(form){
    if (form == null) return
    form.classList.add('active');
    overlay.classList.add('active');
}

function closeFormPopup(form){
    form.classList.remove('active');
    overlay.classList.remove('active');
}
/* End of form popup */


//Array to contain all books
let myLibrary = [];



//Object contructer for a book
function Book(name, author, pages, read){
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        console.log(`${this.name} ${this.author} ${this.pages} ${this.read}`)
    }
}

//Function alls for the object to be pushed in the array
function addBookToLibrary(name, author, pages, read){
    const book1 = new Book(name, author, pages, read);
    myLibrary.push(book1);
}

//Display books
function displayBook(book){
    let card = document.createElement("div")
    let bookName = document.createElement("p")
    let authorName = document.createElement("p")
    let pages = document.createElement("p")
    let isRead = document.createElement("p")
    let removeButton = document.createElement("button")
    removeButton.addEventListener('click', () => {
        const card = removeButton.closest(".card")
        card.remove()
    })

    bookName.innerHTML = book.name
    authorName.innerHTML = book.author
    pages.innerHTML = book.pages
    isRead.innerHTML = book.read
    removeButton.innerText = "Remove"

    card.classList.add("card")
    removeButton.classList.add("remove-button")
    cards.appendChild(card)
    card.append(bookName, authorName, pages, isRead, removeButton)
}
submitButton.forEach(button => {
    button.addEventListener('click', () => {
        const form = document.querySelector(".form-popup")
        //getting form values
        let bookName = document.getElementById("name").value
        let author = document.getElementById("author").value
        let pages = document.getElementById("pages").value
        let read = document.getElementById("read").value

        addBookToLibrary(bookName, author, pages, read)
        displayBook(myLibrary[0])
        closeFormPopup(form)

    })
})

removeButton.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest(".card")
        card.remove()
    })
})


