// let obj1 = {
//     name : 'Orange',
//     size : 'big',
//     prop1 : () => console.log('prop 1')
// } 

// let obj2 = {
//     prop2 : () => console.log('prop 2'),
//     prop2a : () => console.log('prop 2a')
// }
// let log = console.log
// log(obj1.constructor)
// log(obj1.__proto__)
// log(obj1.__proto__ === obj1.constructor.prototype)
// log(Object.prototype__proto__)
let log = console.log
function myFunc1(a){
    return a
}

const posts = [
    {
        title: 'Breklyn',
        description: 'rooter'
    },
    {
        title: 'Another Bere',
        description: 'frety' 
    }
]

function getPost(){
    setTimeout(() => {
        posts.forEach(post => {
            log(post)
        });
    }, 1000)
}



function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            const error = false

            if(!error){
                resolve()
            }else{
                reject('Error: something went wrong')
            }
        }, 1000)
    })  
}

async function init(){
    await createPost({title:'Liity', description: 'books I read'})
    getPost()
}

init()

// getPost()
// createPost({title:'Booker', description: 'books I read'})
// .then(getPost)
// .catch((err) => {
//     log(err)
// })




// Object.setPrototypeOf(obj2, obj1)
// obj2.prop2()
// obj2.prop1()

// Object.getPrototypeOf(obj2).prop1()
// console.log(Object.getOwnPropertyNames(obj2))
// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj1)))