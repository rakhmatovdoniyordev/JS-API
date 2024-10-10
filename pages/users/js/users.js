const userLink = "https://jsonplaceholder.typicode.com/users"
const wrapper = document.querySelector(".users__wrapper")

async function getData(api){
    let response = await fetch(api)
    response
        .json()
        .then(res => createCard(res))
        .catch(err => console.log(err))
}
getData(userLink)

function createCard(data){
    data.forEach(post => {
        let div = document.createElement("div")
        div.className = "user__card"
        div.innerHTML = `
        <div class="users__header">
                          <div class="users__img">
                            <a href="#"><i class="fa-solid fa-circle-user"></i></a>
                          </div>
                          <div class="users__name">
                            <h2 class="name">${post.name}</h2>
                            <p class="username">@${post.username}</p>
                          </div>
                        </div>

                        <div class="users__body">
                          <div class="info">
                            <h3>Email:</h3>
                            <p class="email">${post.email}</p>
                          </div>
                          <div class="info">
                            <h3>Address:</h3>
                            <p class="address">${post.address.street}, ${post.address.suite}, ${post.address.city}</p>
                          </div>
                          <div class="info">
                            <h3>Phone:</h3>
                            <p class="phone">${post.phone}</p>
                          </div>
                          <div class="info">
                            <h3>Website:</h3>
                            <p class="website"><a href="#">${post.website}</a></p>
                          </div>
                          <div class="info">
                            <h3>Company:</h3>
                            <p class="company">${post.company.name}, ${post.company.catchPhrase}, ${post.company.bs}</p>
                          </div>
                        </div>
                      </div>
        `
        wrapper.appendChild(div)
    });
}