interface CogUser {
    readonly dbId: number
    email: string,
    userId: number
    googleId?: string
    // startTrail: () => string
    startTrail(): string,
    getCoupon: (name: string) => number
    // getCoupon(name: string): number
}

interface CogUser { 
    githubToken: string
}

interface CogAdmin extends CogUser /*, AnotherInterface */ {
    role: 'admin' | 'superadmin' | 'observer'
}

const soupUser: CogUser = {
    githubToken: 'dsdsf',
    dbId: 22,
    email: 'f@example.com',
    userId: 111,
    startTrail: () => '',
    // ?? why no error below ??
    getCoupon: () => 4
}

soupUser.email = "newMe@example.com"

// Type is more the same as Interfaces, check documentation for more information