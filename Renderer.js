class Renderer {
    renderKanye = (data) => {
        $(`.quote-container`).empty()
        let kanyeQ = `<p>${data}</p>`
        $(`.quote-container`).append(kanyeQ)
    }

    renderPokemon = (name, pic) => {
        $(`.pokemon-container`).empty()
        let pokemonName = `<p>${name}</p>`
        let pokemonImg = `<img src=${pic}>`
        $(`.pokemon-container`).append(pokemonName)
        $(`.pokemon-container`).prepend(pokemonImg)
    }
    renderUser = (pic, firstName, lastName, city, state) => {
        $(`.user-container`).empty()
        let userPic = `<img src=${pic}>`
        let userName = `<span>${firstName} ${lastName}</span>`
        let userCity = `<p> ${city}</p>`
        let userState = `<p>${state}</p>`
        $(`.user-container`).append(userPic)
        $(`.user-container`).append(userName)
        $(`.user-container`).append(userCity)
        $(`.user-container`).append(userState)
    }

    renderUserFriend = (friends) => {
        $(`.friends-container`).empty()
        for (let friend of friends){
            let userFriendName = `<p>${friend}</p>`
            $(`.friends-container`).append(userFriendName)
        }
    }

    renderMeat = (aboutMe) => {
        $(`.meat-container`).empty()
        let meatSetence = `<p>${aboutMe}</p>`
        $(`.meat-container`).append(meatSetence)
    }
}




// getKanyeQuote()

// getUsers ()

// return {getKanyeQuote, getUsers}