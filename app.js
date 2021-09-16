function reverseStr(str){
    var listofchars = str.split('');
    var reversechars= listofchars.reverse()
    var reverseOp = reversechars.join('')
    return reverseOp
}

function isPalindrome(str)
{
    var reverse = reverseStr(str)

    return str === reverse
    

}

console.log(isPalindrome("hello"))
console.log(isPalindrome("lol"))