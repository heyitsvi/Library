let my_library = [];
let removeBtns = undefined; 
let readBtns = undefined;

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


addBook("LOTR","J.R.R Tolkein", "500","Yes");


let display = document.querySelector("#display");

const addBtn = document.querySelector("#add-btn");
const close = document.querySelector("#close");
const addBookBtn = document.querySelector("#add");

function displayBooks(size){
    let div_list = [];
    display.innerHTML = '';
    console.log(my_library.length);
    createGrid(size,div_list);
    appendDivs(display,div_list);

    fillInfo(display);
    removeBtns = document.querySelectorAll(".removeBtn");
    removeBtns.forEach(button => {
        button.addEventListener("click", event =>{
            let child = document.getElementById(`book-${button.id}`)
            display.removeChild(child);
            removeElement(button.id);
        })
    })
    readBtns = document.querySelectorAll(".readBtn");
    readBtns.forEach(button => {
        button.addEventListener("click", event =>{
            let id = button.id.split("-")[1];
            if(button.textContent == "Yes"){
                button.textContent = "No";
                console.log(id);
                changeStatus(id,"No");
            }
            else{
                button.textContent = "Yes";
                changeStatus(id,"Yes");
            }
        })
    })
}

function removeElement(id){
    my_library.splice(id-1,1);
}

function clearInput(){
    document.querySelector('#input-title').value = null;
    document.querySelector('#input-author').value= null;
    document.querySelector('#input-pages').value = null;
}

addBookBtn.addEventListener("click",event => {
    let title = document.querySelector('#input-title').value;
    let author = document.querySelector('#input-author').value;
    let pages = document.querySelector('#input-pages').value; 
    let yes = document.querySelector("#input-read-yes");
    let no = document.querySelector("#input-read-no");
    let read=undefined;
    if(yes.checked == true){
        read = yes.value;
    }
    else{
        read=no.value;
    }
    addBook(title,author,pages,read);
    let size = my_library.length;
    displayBooks(size);
    clearInput();
})


addBtn.addEventListener("click", () =>{
    modal_container.classList.add('show');
})


close.addEventListener("click", ()=>{
    modal_container.classList.remove('show');
})


function createDivs(id){
    let div = document.createElement('div');
    div.setAttribute("id", `book-${id}`);
    div.setAttribute("class","book-info");
    return div;
}

function bookDivs(id){
    let bookname = my_library[id-1].title;
    let authorname = my_library[id-1].author;
    let numofpages = my_library[id-1].pages;
    let isRead = my_library[id-1].read;
    let div = document.createElement('div');
    div.setAttribute("id", "bookname");
    div.innerText =  `${bookname}`;
    let div2 = document.createElement('div');
    div2.setAttribute("id", "authorname");
    div2.innerText =  `${authorname}`;
    let div3 = document.createElement('div');
    div3.setAttribute("id", "pages");
    div3.innerText =  `${numofpages}`;
    let div4 = document.createElement('button');
    div4.setAttribute("id", `read-${id}`);
    div4.setAttribute("class","readBtn");
    div4.innerText =  `${isRead}`;
    let div5 = document.createElement('button');
    div5.setAttribute("id",`${id}`);
    div5.textContent = "X";
    div5.setAttribute("class","removeBtn");
    return [div,div2,div3,div4,div5];
}


function changeStatus(id,value){
    my_library[id-1].read = value;
    // console.log(my_library[id-1].read);
}

function appendDivs(parent,child){
    child.forEach(child =>{
        parent.appendChild(child);
    })
}


function createGrid(size,div_list){
    for(let i =1; i <= size; i++){
        div_list.push(createDivs(i));
    }
}

function fillInfo(display){
    for(let i = 1; i <= my_library.length;i++){
        let x = document.querySelector(`#book-${i}`);
        let children = bookDivs(i);
        children.forEach(child =>{
            x.appendChild(child);
        })
    }
}





