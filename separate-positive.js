function separatePositive(nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        if (nums[start] < 0 && nums[end] > 0) {
            [nums[start], nums[end]] = [nums[end], nums[start]];

            start += 1;
            end -= 1;
        } else {
            nums[start] > 0 ? start++ : end--;
        }
    }
    return nums;
}


module.exports = separatePositive;