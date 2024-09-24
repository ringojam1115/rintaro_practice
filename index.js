//DOM
const addNameBaddtton = document.getElementById("addNameBtn");
const addEmailButton = document.getElementById("addEmailBtn");
const loadButton = document.getElementById("loadBtn");
const lists = document.getElementById("lists");

async function getUsers() {
    //データのやりとり
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
}

function addTag(tag){
    const list = document.createElement("li");
    list.innerText = tag;
    lists.appendChild(list);
}

async function listNames(user) {
    const users = await getUsers();
    users.forEach(function(user){
        addTag(user.name);
    });
}

async function listEmails(user) {
    const users = await getUsers();
    users.forEach(function (user) {
        addTag(user.email);
    });
}

function reload() {
    window.location.reload(true);
}

addEventListener("load", listNames);
addNameBaddtton.addEventListener("click", listNames);
addEmailButton.addEventListener("click", listEmails);
loadButton.addEventListener("click", reload);
