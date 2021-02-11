Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
 search through the array adding the value of index 0 to the next index 
 +1 ; if it adds up to target(the target-num), then terminate, else keep adding one to the index
 until the end of the array.length,,, then move onto the next index after index zero and repeat
 */
var twoSum = function(nums, target) {
    let results = [];
    
    for (let i = 0; i<nums.length; i++){
        let nextNumber = target - nums[i];
        
        for(let j = i + 1; j<nums.length; j++){
            if (nums[j]===nextNumber){
                results.push(i,j)
                return results
            }
        }
    }
};




//another approach using map

//The comp Object will be used as a data structure to store the
complements i.e target-nums[i] as keys and the index at which this complement is calculated will be the value. comp={complement_1:index_1,.....,complement_n:Index_n}. Now as soon as we find an element of the array present in the comp object we return the result i.e [compMap[nums[i]], i]
compMap[nums[i]] -- index where complement was calculated
i -- current index

const twoSum = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
        if(comp[nums[i] ]>=0){
            return [ comp[nums[i] ] , i]
        }
        comp[target-nums[i]] = i
    }
};

//Time complexity : O(n)O(n). We traverse the list containing nn elements exactly twice. Since the hash table reduces the look up time to O(1)O(1), the time complexity is O(n)O(n).

Space complexity : O(n)O(n). The extra space required depends on the number of items stored in the hash table, which stores exactly nn elements.
