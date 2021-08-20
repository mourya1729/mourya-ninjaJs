// const request = new XMLHttpRequest();


// //listening events
// request.addEventListener('readystatechange', () => {
//     //console.log(request, request.readyState);
//     if(request.readyState === 4){
//         console.log(request.responseText);
//     }
// })
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

// request.send();

// const request = new XMLHttpRequest();


// //listening events
// request.addEventListener('readystatechange', () => {
//     //console.log(request, request.readyState);
//     if(request.readyState === 4 && request.status === 200){
//         console.log(request.responseText);
//     }else if(request.readyState === 4){
//         console.log('could not fetch data')
//     }
// })
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

// request.send();

const getTodo = (resource) => {
    
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        //listening events
        request.addEventListener('readystatechange', () => {
            //console.log(request, request.readyState);
            if(request.readyState === 4 && request.status === 200){
                //console.log(request.responseText);
                //console.log("true");
                const data = JSON.parse(request.responseText);
                //callback(undefined, data);
                resolve(data);
            }else if(request.readyState === 4){
                //console.log('could not fetch data')
                //console.log("dhb");
                //callback('could not fetch data', undefined);
                reject("error getting resolved");
            }
        })
        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        //request.open('GET', 'todos.json');
        request.open('GET', resource)

        request.send();
    })
    

};

//promises
getTodo('todos/luigi.json').then(data => {
    console.log('promise 1 resolved: ', data);
    return getTodo('todos/mario.json');
}).then(data => {
    console.log('promise 2 resloved: ',data);
    return getTodo('todos/shaun.json');
}).then(data => {
    console.log('promise 3 resolved');
}).catch(err => {
    console.log('promise rejected: ',err);
})

//async
console.log(1);
console.log(2);

//nested callback hell to solve this issue, we use promises
// getTodo('todos/luigi.json',(err, data) => {
//     console.log('callback fired');
//     console.log(data);
//     getTodo('todos/mario.json',(err,data) => {
//         console.log(data);
//         getTodo('todos/shaun.json', (err, data) => {
//             console.log(data);
//         })
//     })
//     // if(err){
//     //     console.log(err);
//     // }else {
//     //     console.log(data);
//     // }
// });


console.log(3);
console.log(4);




