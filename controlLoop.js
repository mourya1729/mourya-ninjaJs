//for loop

const names = ['shaun','mario','luigi'];
for (let i = 0; i < names.length ; i++){
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}
//while loop
let i = 0;
while(i <names.length){
    console.log('name: ',names[i]);
    i++;
}

//do while
i = 5;
do{
    console.log('val of i is: ',i);
}while(i<5);

// //if statement
// const age = 25;
// if (age > 20){
//     console.log('u are over 20 yrs old');
// }

const password = 'p@ssword1234';
if(password.length >= 12 && password.includes('@')){
    console.log('that password os mighty strong');
}else if(password.length >= 8 || password.includes('@') && password.length >= 5){
    console.log('that password is strong enough!');
}else{
    console.log('passwordc is not long enough');
}

let age = 30;
if(true){
    //age = 40;
    let age = 50;
    console.log("inside",age);
}
console.log("outside",age);