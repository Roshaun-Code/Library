const openForm = document.querySelectorAll("[data-form-popup]");
const closeForm = document.querySelectorAll("[data-close-button]");
const submitButton = document.querySelectorAll("[data-submit-button]")
const overlay = document.querySelector(".overlay");

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

/* End of form stuff */

//Array to contain all books
let myLibrary = [];

//Object contructer for a book
function Book(name){
    this.name = name;
}

//Function alls for the object to be pushed in the array
// function addBookToLibrary(){
//     let input = prompt("Insert book name");
//     let book1 = new Book(input);
//     myLibrary.push(book1);
// }

// addBookToLibrary();
// console.log(myLibrary[0].name);

