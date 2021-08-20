fetch('todos/luigi.json').then((response) => {
    console.log('resolved 1', response);
    return response.json();
}).then(data => {
    console.log(data);
    return fetch('todos/mario.json')
}).then((response) => {
    console.log('resolved 2', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log('rejected', err);
})