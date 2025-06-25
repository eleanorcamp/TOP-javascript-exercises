const convertToCelsius = function(deg) {
    // (32°F - 32) x 5/9 = 0°C

    let res = (deg - 32) * (5/9)
    return Math.round(res*10) / 10
};

const convertToFahrenheit = function(deg) {
    let res = (deg * (9/5)) + 32
    return Math.round(res*10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
