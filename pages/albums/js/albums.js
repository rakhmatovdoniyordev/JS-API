const albumsLink = "https://jsonplaceholder.typicode.com/albums"
const wrapper = document.querySelector(".albums__wrapper")

async function getData(api){
    const response = await fetch(api)
    response.json().then(res => createCard(res)).catch(err => console.log(err))
}
getData(albumsLink)

function createCard(data){
    data.forEach(post => {
        let div = document.createElement("div")
        div.className = "albums__card"
        div.innerHTML = `
        <div class="albums__icon">
                            <a href="#"><i class="fa-solid fa-compact-disc"></i></a>
                        </div>
                        <div class="albums__text">
                            <p>${post.title}</p>
                        </div>
                        <div class="albums__like">
                            <a href="#"><i class="fa-regular fa-heart"></i></a>
                            <a href="#"><i class="fa-regular fa-bookmark"></i></a>
                            <a href="#"><i class="fa-solid fa-share"></i></a>
                        </div>
        `
        wrapper.appendChild(div)
    });
}
