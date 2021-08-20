const getTodo = async (x) => {
    const response =  await fetch('https://jsonplaceholder.typicode.com/todos/'); //will wait assiging to resoonse until fetch promise completes
    //console.log(x);
    console.log(5);
    if (response.status !== 200){
        throw new Error('cannot fetch the data');
    }
  
    const data = await response.json();
    
    console.log(6);
    //console.log(typeof data);
    
    //console.log(data.status); = undefined

    // if (data.status !== 200){
    //     throw new Error("problem with json");
    // }

    return data; //this is also a promise
}

console.log(1);
console.log(2);

getTodo("x")
    .then(data => console.log('resolved:', data))
    .catch(err => console.log("not resolved: ", err.message));

console.log(3);
