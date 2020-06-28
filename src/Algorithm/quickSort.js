export function quickSort(arr){
let low = 0;
let high = arr.length-1;

let result = []

let intermediate = arr.slice()

if(arr.length <=1)  return arr

quickSortHelper(arr,low,high,intermediate,result)

return result;

}


const quickSortHelper=(arr,low,high,intermediate,result)=>{

    if(low < high){

        let pi = partition(arr,low,high,intermediate,result)

        quickSortHelper(intermediate,low,pi-1,arr,result)
        quickSortHelper(intermediate,pi+1,high,arr,result)
    }
}

const partition = (arr,low,high,intermediate,result) =>{
  
    let pivot = high
    let i = low - 1;

    for(let j= low;j<=high-1;j++){

        if(intermediate[j] <= intermediate[pivot]){
            i++;


            result.push([i,j]);
            result.push([i,j]);


            [intermediate[j],intermediate[i]] = [intermediate[i],intermediate[j]]

        }
    }


    result.push([i+1,high]);
    result.push([i+1,high]);



    [intermediate[high],intermediate[i+1]] = [intermediate[i+1],intermediate[high]]



    return (i+1)
}


