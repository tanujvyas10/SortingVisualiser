export function AnimatedMergeSort(arr){

    const result =[]

    const intermediate = arr.slice()
  if(arr.length <= 1)  return arr

  helper(arr,0,arr.length-1,intermediate,result)

  return result
}



const helper =(arr,startIdx,endIdx,intermediate,result)=>{
    if(startIdx === endIdx) return;

    let middleIdx = Math.floor((startIdx + endIdx) / 2);
    helper(intermediate,startIdx,middleIdx,arr,result);
    helper(intermediate,middleIdx+1,endIdx,arr,result);
    MergeSort(arr,startIdx,endIdx,intermediate,result)
  
}


const MergeSort =(arr,startIdx,endIdx,intermediate,result) =>{
 
    let i = startIdx, k = startIdx
    let middleIdx = Math.floor((startIdx + endIdx) / 2);
    let j  = middleIdx+1;
    while(i<= middleIdx  && j<= endIdx){
   //comparing two values so changing colors
        result.push([i,j])
//return the original colors as now they have compared
        result.push([i,j])


        if(intermediate[i]< intermediate[j]){

         result.push([k,intermediate[i]])

         arr[k++] = intermediate[i++];

        }
        else{

            result.push([k,intermediate[j]])

         arr[k++] = intermediate[j++];

        }
    }


    while(i<=middleIdx){
        result.push([i,i])

        result.push([i,i])

        result.push([k,intermediate[i]])

         arr[k++] = intermediate[i++];


    }

    while(j<=endIdx){
        result.push([j,j])

        result.push([j,j])

        result.push([k,intermediate[j]])

         arr[k++] = intermediate[j++];
    }

}



