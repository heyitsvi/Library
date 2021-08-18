let my_library = [];

function Book(title, author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(title,author,pages,read){
    let bookObject = new Book(title,author,pages,read);
    my_library.push(bookObject);
}

function displayBooks(my_library){
    for (let i = 0;i < my_library.length; i++){
        console.table(my_library[i]);
    }
}


addBook("LOTR","J.R.R Tolkein", "500","Yes");
addBook("Song of Ice and Fire","George R.R Martin", "1000","Yes");
// console.log(my_library);

displayBooks(my_library);


let display = document.querySelector("#display");

const addBtn = document.querySelector("#add-btn");
const modal = document.querySelector("#modal_container");
const close = document.querySelector("#close");

addBtn.addEventListener("click", () =>{
    modal_container.classList.add('show');
})

close.addEventListener("click", ()=>{
    modal_container.classList.remove('show');
})