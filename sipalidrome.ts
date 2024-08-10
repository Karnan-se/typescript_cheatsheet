
// 13. Write a program to identify whether a string is a palindrome or not

function isPalindrome(word:string):boolean{

    let newWord=  word.split("").reverse()
    if(word == newWord.join("")) {
     return true
    }else{
     return false
    }
 }
 console.log(isPalindrome("MALAYALAM"))
 console.log(isPalindrome("MALAMkkr"))
 