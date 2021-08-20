let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'berlin',
    //blogs: ['how to live', 'how to die'],
    blogs: [
        {title: "how to live", likes: 30},
        {title: "how to die", likes: 25}
        ],
    login: function(){
        console.log("the user logged in");
    },
    logout: function(){
        console.log("the user logged out!");
    },
    logBlogs(){
        console.log("I have written the following blogs: ");
        this.blogs.forEach(blog => {
            console.log(blog.title,blog.likes);
        });
    }
}
user.logBlogs();
// console.log(user);
// console.log(typeof user);
// console.log(user.name);
// console.log(user['age']);


//primitive vs reference types
let scoreOne = 50;
let scoreTwo = scoreOne;
scoreOne = 60;
console.log(scoreOne , scoreTwo);

const userOne = { name: 'mourya', age: 30};
const userTwo = userOne;
userOne.age = 50;
console.log(userOne, userTwo);