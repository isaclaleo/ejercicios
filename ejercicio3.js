function ejercicio3(nums, target) {
  const maps = {}
  for (let i = 0; i < nums.length; i++) {
    const diffee = target - nums[i];
    
    if (diffee in maps) {
      return [maps[diffee], i];
    }
    maps[nums[i]] = i;
  }
  return [];
}

let nums = [1,3,4];
let target = 5;
let nums2 = [3,2,4];
let target2 = 6;

console.log(ejercicio3(nums, target));