var rotate = function(nums, k) {
    // while(k > 0){
    //     nums.unshift(nums.pop());
    //     k--;
    // }
    // return nums;
    // return nums.slice(-k).concat(nums.slice(0,-k));
    let n = nums.length;
    k %= n;
    reverse(nums, 0, n-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, n-1);
    return nums
};
function reverse(arr, start, end){
    while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start ++;
        end --;
    }
}
console.log(rotate([1,2,3,4,5,6,7], 4));