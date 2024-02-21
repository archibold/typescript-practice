abstract class TakeVideo {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getRealTime(): number {
        //something to calculate...
        return 8;
    }
}

// Error here: 
// const somien = new TakeVideo('test', 'on')

class Instaliter extends TakeVideo {
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        
    }
}

const somien = new Instaliter('test', 'on', 4)

somien.getRealTime()
somien.getSepia()