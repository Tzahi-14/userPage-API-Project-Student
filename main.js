
const apiM = new APIManager()
const renderer = new Renderer()




//add event listeners (two)
// load
$(`#get`).click(function(){
    apiM.getKanyeQuote()
    apiM.getUsers()
    apiM.getPokemon()
    apiM.getMeat ()
})



// render btn
$(`#push`).click(function(){
    console.log(apiM.data)
    renderer.renderKanye(apiM.data.quote)
    renderer.renderPokemon(apiM.data.pokemon.name, apiM.data.pokemon.pic)
    renderer.renderUser(apiM.data.user.pic, apiM.data.user.firstName,apiM.data.user.lastName,apiM.data.user.city,apiM.data.user.state)
    renderer.renderUserFriend(apiM.data.friends)
    renderer.renderMeat(apiM.data.meat)

})
