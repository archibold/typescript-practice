const AISLE = 0
const MIDDEL = 1
const WINDOW = 2

enum SeatChoice {
    AISLE= 10,
    MIDDEL = 's',
    WINDOW = 9,
    // ?error? AISLE === FOURTH
    FOURTH
}

const hcSeat = SeatChoice.MIDDEL