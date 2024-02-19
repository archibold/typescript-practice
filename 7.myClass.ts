// class BookUser {
//     email: string
//     name: string
//     private readonly city: string
//     constructor(email: string, name: string) {
//         this.email= email;
//         this.name= name;
//         this.city = 'NewCity name'
//     }
//     doSomething() {
//         // Not allowed - readonly
//         // this.city = 'Warsaw'
//     }
// }

class BookUser {
    readonly city: string
    constructor(
        public email: string,
        public name: string,
        private userID: string,
        ) {
        this.email= email;
        this.name= name;
        this.city = 'NewCity name'
    }
    doSomething() {
        // Not allowed - readonly
        // this.city = 'Warsaw'
    }
}

const andrey = new BookUser('andrey@example.com', 'andrey', '44')

// Not allowed
// andrey.city = 'London'
// andrey.city