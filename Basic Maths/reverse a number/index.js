// multiply by 10 and adding lastDigit... so i am getting the no. in the front

// https://www.geeksforgeeks.org/problems/reverse-digit0316/1



function reverseDigits(n){
    let reverse = 0;
        // code here
        while(n>0){
            let lastDigit = n %10;
             reverse = (reverse * 10) + lastDigit;
             n = Math.floor(n/10);
        }
        return reverse;
    }
    
    console.log(reverseDigits(122));