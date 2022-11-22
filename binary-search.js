var search = function(nums, target) {
    debugger
    let low = 0;
    let high = nums.length;
    while(low <= high) {
        let mid = parseInt((low + high) / 2);
        if(target == nums[mid]) {
            return mid
        }else if(target > nums[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
};
console.log(search([0], 0));