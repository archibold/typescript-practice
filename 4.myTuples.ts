// const user: (string | number)[] = [1, 'gg']
let tUser: [string, number, boolean]

tUser = ['gg', 143, true]

// Error below
// Type 'boolean' is not assignable to type 'string'
//
//  tUser = [false, 143, true]

let rgb: [number, number, number] = [33,34,55]

type JogaUser = [number, string, boolean]

const newUser: JogaUser = [33, 'kod', false]

// ???
newUser[1] = 'fd'
newUser.push(true)
