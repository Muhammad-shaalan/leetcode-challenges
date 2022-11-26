var reverseString = function(s) {
    let stringLength = s.length;
    let start = 0;
    let end = stringLength - 1;
    while(start < end){
        [s[start],s[end]] = [s[end],s[start]];
        start++;
        end--;
    }
    return s;
};
console.log(reverseString(["H","a","n","n","a","h"]));
