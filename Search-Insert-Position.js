var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length;
    let mid = "";
    if(target > nums[nums.length - 1]) {
        return nums.length;
    } else if(target < nums[0]) {
        return 0;
    }
    while(low <= high) {
        mid = parseInt((low + high) / 2);
        if(target == nums[mid]) {
            return mid
        }else if(target > nums[mid]) {
            low = mid + 1;
        } else{
            high = mid - 1;
        }
    }
    return low;
};
console.log(searchInsert([ 10, 20, 30, 40 ], 15));

