function produceDrivingRange(distanceLimit) {
  return function(starting, ending) {
    let start = parseInt(starting);
    let end = parseInt(ending);
    let travelDist = Math.abs(start - end);
    let difference = distanceLimit - travelDist;

    if(difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(decimalTip) {
  return function(payAmount) {
    let tipAmount = payAmount * decimalTip;

    return tipAmount;
  }
}

function createDriver() {
  let driverID = 0;

  return class {
    constructor(name){
      this.name = name;
      this.id = ++driverID;
    }
  }
}