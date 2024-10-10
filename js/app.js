const wrapper = document.querySelector(".wrapper")
const API_LINK = "https://jsonplaceholder.typicode.com/posts"

async function getData(api){
    const response = await fetch(api)
    response
        .json()
        .then(res => createCard(res))
        .catch(err => console.log(err))
}
getData(API_LINK)

function createCard(data){
    data.forEach(post => {
        let div = document.createElement("div")
        div.className = "card"
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p><i>${post.body}</i></p>
            <div class="card__items">
                <a href="#"><i class="fa-regular fa-heart"></i></a>
                <a href="#"><i class="fa-regular fa-bookmark"></i></a>
                <a href="#"><i class="fa-solid fa-share"></i></a>
            </div>
        `
        wrapper.appendChild(div)
    });
}
