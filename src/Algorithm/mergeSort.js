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




// const MergeSort = (arr)=>{

//     if(arr.length === 1) return arr
// let result= [];

// let middleIdx = Math.floor(arr.length/2)

// let firstHalf = MergeSort(arr.slice(0,middleIdx));
// let secondHalf = MergeSort(arr.slice(middleIdx))


// let i=0,j=0;

// while(i<firstHalf.length && j<secondHalf.length){
//     if(firstHalf[i]< secondHalf[j]){
//         result.push(firstHalf[i])
//         i++;
//     }
//     else{
//         result.push(secondHalf[j])
//    j++;
//     }
// }


// while(i<firstHalf.length)
//     result.push(firstHalf[i++])
    
// while(j<secondHalf.length)
//     result.push(secondHalf[j++])


// return result
// }
// function a(){
// const animations = [];
// if (array.length <= 1) return array;
// const auxiliaryArray = array.slice();
// mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
// return animations;
// }

// function mergeSortHelper(
// mainArray,
// startIdx,
// endIdx,
// auxiliaryArray,
// animations,
// ) {
// if (startIdx === endIdx) return;
// const middleIdx = Math.floor((startIdx + endIdx) / 2);
// mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
// mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
// doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
// }

// function doMerge(
// mainArray,
// startIdx,
// middleIdx,
// endIdx,
// auxiliaryArray,
// animations,
// ) {
// let k = startIdx;
// let i = startIdx;
// let j = middleIdx + 1;
// while (i <= middleIdx && j <= endIdx) {
//   // These are the values that we're comparing; we push them once
//   // to change their color.
//   animations.push([i, j]);
//   // These are the values that we're comparing; we push them a second
//   // time to revert their color.
//   animations.push([i, j]);
//   if (auxiliaryArray[i] <= auxiliaryArray[j]) {
//     // We overwrite the value at index k in the original array with the
//     // value at index i in the auxiliary array.
//     animations.push([k, auxiliaryArray[i]]);
//     mainArray[k++] = auxiliaryArray[i++];
//   } else {
//     // We overwrite the value at index k in the original array with the
//     // value at index j in the auxiliary array.
//     animations.push([k, auxiliaryArray[j]]);
//     mainArray[k++] = auxiliaryArray[j++];
//   }
// }
// while (i <= middleIdx) {
//   // These are the values that we're comparing; we push them once
//   // to change their color.
//   animations.push([i, i]);
//   // These are the values that we're comparing; we push them a second
//   // time to revert their color.
//   animations.push([i, i]);
//   // We overwrite the value at index k in the original array with the
//   // value at index i in the auxiliary array.
//   animations.push([k, auxiliaryArray[i]]);
//   mainArray[k++] = auxiliaryArray[i++];
// }
// while (j <= endIdx) {
//   // These are the values that we're comparing; we push them once
//   // to change their color.
//   animations.push([j, j]);
//   // These are the values that we're comparing; we push them a second
//   // time to revert their color.
//   animations.push([j, j]);
//   // We overwrite the value at index k in the original array with the
//   // value at index j in the auxiliary array.
//   animations.push([k, auxiliaryArray[j]]);
//   mainArray[k++] = auxiliaryArray[j++];
// }
// }