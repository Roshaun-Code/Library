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
    let yesRead = 'Yes'
    let noRead = 'No'

    bookName.innerHTML = `Book Name: "${book.name}"`
    authorName.innerHTML = `Author Name: "${book.author}"`
    pages.innerHTML = `${book.pages} pages`

    if (book.read = 'true'){
        book.read == yesRead
    } else if (book.read == 'false'){
        book.read = noRead
    }
    isRead.innerHTML = `Read: ${book.read}`
    removeButton.innerText = "Remove"

    card.classList.add("card")
    removeButton.classList.add("remove-button")
    cards.appendChild(card)
    card.append(bookName, authorName, pages, isRead, removeButton)
}


let count = 0;

//submit button
submitButton.forEach(button => {
    button.addEventListener('click', () => {
        const form = document.querySelector(".form-popup")
        //getting form values
        let bookName = document.getElementById("name").value
        let author = document.getElementById("author").value
        let pages = document.getElementById("pages").value
        let read = document.getElementById("read").checked

        addBookToLibrary(bookName, author, pages, read)
        for (let i = 0; i < myLibrary.length; i++){
            if (count == i) {
                displayBook(myLibrary[i])
            } else {
                continue
            }
            count++;
        }
        //displayBook(myLibrary[0])
        closeFormPopup(form)

    })
})

removeButton.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest(".card")
        card.remove()
        myLibrary.slice(0, myLibrary.length)
    })
})


