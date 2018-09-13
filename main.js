var s = "azcbobobegghakl";
//var s = "abcbcd";
//var s = "loremipsumdolorsitametconsecteturadipiscingelit";
var substring = "";
var longestSubstring = "";

for (let i = 0; i < s.length; i++){
   //If substring is empty, go ahead and add the first letter
   if(substring.length === 0) {
       substring += s.charAt(i);
   } else {
       //...Otherwise, do some calculations
       //If the current letter is further down the alphabet than the last letter of the substring...
       if(s.charAt(i) >= substring.charAt(substring.length-1)) {
            //...then add it to the substring
            substring += s.charAt(i);
       } else {
           //...or empty out the substring and start with the current letter
           substring = "";
           substring += s.charAt(i);
       }

       //finally, check to see if it's the longest string
       if(substring.length > longestSubstring.length){
           longestSubstring = substring;
       }
   }
   //Debuggerer
   //console.log(i + ": sub-" + substring + "; longsub-" + longestSubstring);
}

//The results!
console.log("Longest substring in alphabetical order is: " + longestSubstring);