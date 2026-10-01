// time - O(n) space- O(1) using 2 pointers

function buySell(arr){
    let left = 0;
    let right = 1;

    let maxProfit = 0;

    while(right < arr.length){
        if(arr[left] < arr[right]){
            currentProfit = arr[right] - arr[left];
            maxProfit = Math.max(maxProfit, currentProfit)
        }else{
            left = right
        }

        right++;
    }

    return maxProfit;
}

console.log(buySell([7,1,5,3,6,4]));