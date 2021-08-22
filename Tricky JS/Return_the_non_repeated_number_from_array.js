var singleNumber = function (nums) {
  let counts = {};

  for (let i = 0; i < nums.length; i++) {
    if (counts[nums[i]]) {
      counts[nums[i]] += 1;
    } else {
      counts[nums[i]] = 1;
    }
  }
  for (let prop in counts) {
    if (counts[prop] == 1) {
      // console.log(prop + " counted: " + counts[prop] + " times.")
      return prop;
    }
  }
  // return counts;
};

let nums = [2, 2, 1];
console.log(singleNumber(nums));
