const myScore: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

identityThree(true)

function identityFour<T>(val: T): T {
    return val
}

// identityFour<string>(3)

interface Bootle {
    brand: string,
    type: number
}

// identityFour<Bootle>({})

function getSearchProducts<T>(products: T[]): T {
    //some actions...
    const index = 3
    return products[index]
}

const getMoreSearchProducts = <T,>(products: T[]):T => {
    //somethin... something to do...
    return products[2]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function someFunction<T, U extends Database>(val1: T, val2: U):object {
    return {
        val1,
        val2
    }
}

someFunction(3, {connection: '', username: '', password: ''})

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string,
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}