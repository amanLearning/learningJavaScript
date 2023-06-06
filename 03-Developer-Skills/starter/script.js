// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* const x = '23';
if (x === 23) console.log(23);

const calcAge = (birthYeah) => 2023 - birthYeah;
console.log(calcAge(1988));
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempMin = function(tempMin){
max = Math.max(temperatures);
min = Math.min(temperatures);
return max-min;
let min=temperatures[0];
let max=temperatures[0];
for (let j=0; j<temperatures.length; j++){
    if(min > temperatures[j]){
min = temperatures[j];
    } 
}
return min;
}
const calcTempMax = function(tempMax){
for (let i=0; i<temperatures.length; i++) {
    if(max < temperatures[i]){
    max = temperatures[i];
    }
    }
    return max;
}

let minTempArray =  console.log(calcTempMin(min));
let maxTempArray =  console.log(calcTempMax(max));
let altitiudeTempArray = console.log(maxTempArray - minTempArray);*///console.log(`Altitude of the temperatures array is ${altitiudeTempArray}`);


//console.log(calcTempAltitude(max,min));

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celcius',
        value: Number(prompt('Degrees celsius')),
    };
    //console.log(measurement.value);
    console.table(measurement);
    const kelvin = measurement.value + 273;
    return kelvin;
    };
console.log(measureKelvin());