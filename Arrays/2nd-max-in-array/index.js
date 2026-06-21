let arr = [10, 30 , 56, 43, 29, 64, 49, 60];

let max = Math.max(arr[0], arr[1]);
let smax= Math.min(arr[0], arr[1]);

for(let i = 0 ; i<arr.length; i++){
        if(arr[i]> max){
            smax = max;
            max = arr[i];
        }else if( arr[i] > smax){
            smax = arr[i];
        }
}

console.log(max, smax)




let min = Infinity;
let smin = Infinity;

for(let i = 0; i < arr.length; i++){
    if(min > arr[i]){
        smin = min;
        min = arr[i]
    }else if(smin < arr[i]){
        smin = arr[i]
    }
    
}

console.log(min, smin)
