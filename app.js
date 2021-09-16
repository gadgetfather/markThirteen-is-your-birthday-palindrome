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


function convertDatetoStr(date){
    var dateStr = {day:'', month:"",year:''}

    if(date.day<10){
        dateStr.day = '0'+ date.day
    }
    else{
        dateStr.day = date.day.toString();
    }
    if(date.month<10){
        dateStr.month = '0'+ date.month
    }
    else{
        dateStr.month = date.month.toString();
    }
    
    
    dateStr.year = date.year.toString();

    return dateStr;
    
}

var date = {
    day:2,
    month:2,
    year:2020
    
}

console.log(convertDatetoStr(date))