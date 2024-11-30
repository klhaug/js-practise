
//KINDS OF DATA ->  /posts /users /comments /photos /todos

// øv på å skrive funksjoner hver dag nå. Få inn forskjellen på expression, declaration, arrow, etc. 

function newFunction (a) {
    return function(b) {
        return a * b
    }
}

const multiplier = newFunction(2)
multiplier(2);


//lag en funksjon som returnerer en funksjon og bruk den til noe
//gjør en leetcode
//husk hvordan man lager objekter