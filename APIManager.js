// //This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {
            
        }

        // this.data = {
        //     quote: "kkkk",
        //     user: {
        //         firstName: "kkkk",
        //         lastName: "ooo"
        //     },
        //     friends: ["ll iii", "pp ddd"],

        // }


    }

    getKanyeQuote = () => {
        $.ajax({
            method: "GET",
            url: `https://api.kanye.rest`,
            success: (d) => {
                this.data.quote = d.quote
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    }

    getUsers = () => {
        $.ajax({
            method: "GET",
            url: `https://randomuser.me/api/?&results=7&nat=US`,
            success: (main) => {
                this.data.user = {
                pic: main.results[0].picture.large,
                firstName: main.results[0].name.first,
                lastName: main.results[0].name.last,
                city: main.results[0].location.city,
                state : main.results[0].location.state,
                }
                this.data.friends = []
                for (let i = 1; i < 7; i++) {
                    this.data.friends.push(main.results[i].name.first + " " + main.results[i].name.last)

                }
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        })
    }

    getPokemon = function () {
        let id = Math.floor(Math.random() *100)
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${id}`,
            success: (p) => {
                this.data.pokemon = {
                   name : p.name,
                   pic :  p.sprites.front_default

                }

                // console.log(pokemon);
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    }


        getMeat = () => {
            $.ajax({
                method: "GET", 
                url: `https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1`,
                success: (m) => {
                    this.data.meat = m[0]
                    console.log(this.data)
                    // console.log(m)
                },
                error: function(xhr, text , error){
                    console.log(text);
                }
            });
            
        }
}

// const apiM = new APIManager()

// apiM.getKanyeQuote()
// apiM.getUsers()
// apiM.getPokemon()
// apiM.getMeat ()
