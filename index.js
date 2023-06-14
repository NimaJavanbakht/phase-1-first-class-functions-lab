const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
    return function fareMultiplier (double) {
        return multiplier * double 
    }
}

const fareDoubler = function (price) {
    return price * 2
}

const fareTripler = function (price) {
    return price * 3
}

const selectDifferentDrivers = function (drivers, returnAllDrivers) {
    return returnAllDrivers(drivers)
}



