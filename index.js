function returnFirstTwoDrivers(drivers){
    const newDriver= drivers.slice(0,2);
    return newDriver;
}
function returnLastTwoDrivers(drivers){
    const newDriver = drivers.slice(2)
    return newDriver;
}


    const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers];

    function createFareMultiplier(value){
        return((fare)=>(fare*value))

    }

    const fareDoubler = createFareMultiplier('2');
    const fareTripler = createFareMultiplier('3');

    function selectDifferentDrivers(arrayOfDrivers, callback){
        return callback(arrayOfDrivers);
    }