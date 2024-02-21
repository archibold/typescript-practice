function detectType (val: number | string) {
    // error
    // val.toLowerCase()
    // but...
    if(typeof val === "string") {
        // OK!
        val.toLowerCase()
    }

    function provideId(id: string | null) {
        if(!id) {
            console.log('please provide id.');
            return;
        }
        id.toLowerCase()

    }
}

function printALL(strs: string | string[] | null) {
    // don't do it!
    // because strs could be empty

    if(strs) {
        if(typeof strs === 'object') {
            for (const s of strs) {
                console.log(s)
            }
        } else if (typeof strs == 'string') {
            console.log(strs)
        }
    }
}


// 'in' Operator for narrowing

interface typeOfUser {
    name: string,
    email: string
}

interface typeOfAdmin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: typeOfUser | typeOfAdmin) {
    if('isAdmin' in account) {
        account.isAdmin
    }
}

// instanceof narrowing

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

type Fish = {swim: () => void}
type Bird = {fly: ()=> void}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if(isFish(pet)){
        pet.swim()
        return "fish"
    } else {
        pet.fly()
        return "bird"
    }
}