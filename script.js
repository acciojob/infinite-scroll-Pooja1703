let list = document.getElementById("list");

for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.innerText = "Item " + i;
    list.appendChild(li);
}

window.onscroll = function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        for (let i = 1; i <= 2; i++) {
            let li = document.createElement("li");
            li.innerText = "Item " + (list.children.length + 1);
            list.appendChild(li);
        }
    }
};
