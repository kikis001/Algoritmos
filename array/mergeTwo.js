let nums1 = [1,2,3,0,0,0];
let m = 3

let nums2 = [2,5,6]
let n = 3 

function mergeTwo(nums1, nums2, m, n) {
  let i = nums1.length - 1 
  let p1 = m  - 1
  let p2 = n - 1
  
  while(p1>= 0 && p2 >= 0 ) {
    if(nums1[p1]>= nums2[p2]) {
      nums1[i] = nums1[p1]
      p1--
    }else {
      nums1[i] = nums2[p2]
      p2--
    }
    i--
  }

   for (i = 0; i< p2 + 1; i++) {
    nums1[i]= nums2[i]
   }
   return nums1;
}

let pri = mergeTwo(nums1, nums2, m, n)

console.log(pri);