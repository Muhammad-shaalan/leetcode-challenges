var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let curr;
    while(left < right) {
        curr = numbers[left] + numbers[right];
        if(curr == target) {
            return [left + 1, right + 1];
        }
        curr > target ? right-- : left++;
    }
};
console.log(twoSum([-3,3,4,90], 0));
