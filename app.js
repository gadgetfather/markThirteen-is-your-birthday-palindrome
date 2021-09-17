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

function dateAllFormat(){
    var dateStr = convertDatetoStr(date);

    var ddmmyyyy = dateStr.day + dateStr.month+ dateStr.year
    var mmddyyyy = dateStr.month+ dateStr.day + dateStr.year
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2)
    var mmddyy = dateStr.month+ dateStr.day + dateStr.year.slice(-2)
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day

    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd]
}


function checkPalidromeAll(date){
    var listOfPalindrome= dateAllFormat(date)
    console.log(listOfPalindrome)

    var isaPalindrome = false;
    for(var i = 0; i< listOfPalindrome.length;i++){
        if(isPalindrome(listOfPalindrome[i]))
        {
            isaPalindrome= true;
            break;
        }
    }
    return isaPalindrome
}

var date = {
    day: 11,
    month:11,
    year:1111
}
console.log(checkPalidromeAll(date))