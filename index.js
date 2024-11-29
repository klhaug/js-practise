
//KINDS OF DATA ->  /posts /users /comments /photos /todos

// øv på å skrive funksjoner hver dag nå. Få inn forskjellen på expression, declaration, arrow, etc. 
const shitConst = "shit"

console.log(newDeclaration(shitConst))

function newDeclaration(par) {
    return `This is a function ${par} declaration, and it is hoisted. I can access it wherever in the code.`
}


const arrowFunction = (par) => {
    const message = `This is an arrow ${par} function. It can not be hoisted`; 
    return message + ". Lol";
}

console.log(arrowFunction(shitConst));


const newExpression = function() {
    return shitConst;
}

console.log(newExpression())

const shitExpression = newExpression();

console.log(shitExpression)






