
//KINDS OF DATA ->  /posts /users /comments /photos /todos

// øv på å skrive funksjoner hver dag nå. Få inn forskjellen på expression, declaration, arrow, etc. 

function shitDeclaration() {
    const shitConst = ['shit', 'poop', 'lolz'];
    return shitConst;
};

const runShit = shitDeclaration();

const moreShit = runShit.map(shit => 'more ' + shit)

console.log(moreShit);


const shitArrow = () => "shit"

const arrowShit = shitArrow();



const arrowCounter = (n) => {

    return () => {}
}

//Jeg skal lage en funksjon, som når jeg kjører den med et tall, setter det tallet som startpunkt for en tellefunkjson. 
//Ett tall inn, definerer det som startpunkt for den nye tellefunksjonen. 

function makeMultiplier(multiplier) {
    return function (number) {
        return number*multiplier
    }
}

var expect = function(val) {
    return {
        toBe : function (val2){
            if (val === val2) {
                return "true"
            } else {
                throw new Error("Not Equal")
            }
        },
        notToBe : function(val2){
            if (val !== val2) {
                return "true"
            } else {
                throw new Error("Equal")
            }
        }
    }
};

expect(4).toBe(4)


//lag en funksjon som returnerer en funksjon og bruk den til noe
//gjør en leetcode
//husk hvordan man lager objekter