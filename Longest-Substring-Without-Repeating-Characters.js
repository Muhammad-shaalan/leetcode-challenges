// var lengthOfLongestSubstring = function(s) {
//     let maxLength = 0;
//     for(let i = 0; i < s.length; i++){
//         let newStr = "";
//         for(let j = i; j < s.length; j++){
//             if(!newStr.includes(s[j])){
//                 newStr += s[j];
//             } else {
//                 break;
//             }
//         }
//         maxLength = newStr.length > maxLength ? newStr.length : maxLength;
//     }
//     return maxLength;
// };
var lengthOfLongestSubstring = function(s) {
    let currentString = [];
    let longestStringLength = 0;

    for (let i = 0; i < s.length; i++) {
        const currentCharacterPosition = currentString.indexOf(s[i]);

        if (currentCharacterPosition !== -1) {
            currentString.splice(0, currentCharacterPosition + 1);
        }

        currentString.push(s[i]);

        longestStringLength = Math.max(
            longestStringLength,
            currentString.length
        );
    }

    return longestStringLength;
};

console.log(lengthOfLongestSubstring("abacdeaxcyz"));