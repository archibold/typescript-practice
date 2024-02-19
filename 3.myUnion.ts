let score: number | string = 33;

score = 44
score = "55"

type GitUser = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

// Error since Typescript 5.1
//
// let ggguser: User | Admin = {name: "dsds", id: 334}
// ggguser = {username: 'ff', id: 334}

function getDbId(id: number | string) {
    if(typeof id === 'string') {
        id.toLowerCase()
    }
    // Cannot do below
    // id.toLowerCase()
    console.log(`here is an id ${id}`)
}

const data: (number|string)[] = [1,2,3, '4']

let pi:3.14 = 3.14

let password:"defaultpassword";
password = 'defaultpassword'
// error below
//
// password='oooo'
