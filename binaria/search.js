function seatchInRotatedArray(nums, target) {
  let l = 0;
  let r = nums.length-1;
  let m;
  while(l <= r) {
    m = l+ (r - l) / 2;
    if(nums[m] == target) {
      return m;
    }
    if(nums[m]>=nums[l]) {
      if(target >= nums[l] && target < nums[m]) {
        r = m - 1;
      }else {
        l = m + 1;
      }
    }else {
      if(target <= nums[r] && target < nums[m]) {
        l = m + 1;
      }else {
        r = m - 1;
      }
    }
  }
}

// complejidad 0(log(n)). complejidad espacial 0(1)