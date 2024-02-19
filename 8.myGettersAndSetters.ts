class CarUser {
    private _courseCount = 1
    readonly city: string
    constructor(
        public email: string,
        public name: string,
        private userID: string,
        ) {
    }
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get getCourseCount(): number {
        return this._courseCount
    }

    private deleteToken() {
        console.log("Token deleted")
    }

    // cannot set void as a return type
    // set courseCount(courseNum): void {
    set courseCount(courseNum) {
        if(courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum;
    }
}

const andrey2 = new CarUser('andrey@example.com', 'andrey', '44')

// Not allowed
// andrey2.city = 'London'
// andrey2.city
// andrey2.deleteToken()
