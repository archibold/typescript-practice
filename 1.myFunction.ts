type User = {
    readonly _id: number,
    name: string,
    email: string,
    isActive: boolean | null
}

const myUser: User = {
    _id: 1,
    name: 'home user',
    email: 'home@isthere.com',
    isActive: null
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


function createUser(user: User){}