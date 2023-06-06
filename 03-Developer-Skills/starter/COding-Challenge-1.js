const data1 = [17,21,23];
const data2 = [12,5,-5,0,4];
//console.log(`...${data1[0]}degrees in day1....${data1[1]}degrees in day2...${data1[2]}degrees in day3`);
const printForecast = function(arr){
    let str = '';
for(i=0;i<arr.length;i++){
    str += `${arr[i]}degrees in ${i+1} days... `;
    /* const day = arr.indexOf(arr[i]) + 1;
str[i] = `${arr[i]}+ str + day${day}...`;
console.log(str[i]); */
}
console.log('...' + str);
//return str[i];
}
console.log(printForecast(data2));

