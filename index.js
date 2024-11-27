
//KINDS OF DATA ->  /posts /users /comments /photos /todos

const getData = (kind) => {
         fetch(`https://jsonplaceholder.typicode.com/${kind}`)
          .then(response => response.json())
}

const myTodos = getData('todos');

console.log(myTodos);



// øv på å skrive funksjoner hver dag nå. Få inn forskjellen på expression, declaration, arrow, etc. 
