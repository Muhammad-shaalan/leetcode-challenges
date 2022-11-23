var sortedSquares = function(nums) {
    let sortedSquaredArr = [];
    let left = 0;
    let right = nums.length -1;
    let position = right;
    while(left <= right){
        if(nums[left] ** 2 >  nums[right] ** 2) {
            sortedSquaredArr[position--] = nums[left++] ** 2;
        } else {
            sortedSquaredArr[position--] = nums[right--] ** 2;
        }
    }
    return sortedSquaredArr;
};
console.log(sortedSquares([-4,-3,-1,0,2]));