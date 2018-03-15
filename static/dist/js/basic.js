function SetCookie(name,value){
    var Days = 30;
    var exp  = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function getCookie(name)       {
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
     if(arr != null) return unescape(arr[2]); return null;
}

function listCookies() {
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
        aString += i + ' ' + theCookies[i-1] + "\n";
    }
    return aString;
}

function getDateFormate(value){
  if(value<10)
    value='0'+value;
  return value;
}

function getTimeStr() {
	var d     = new Date();
	var year  = getDateFormate(d.getFullYear().toString()); 
	var mon   = getDateFormate((d.getMonth()+1).toString());
	var date  = getDateFormate(d.getDate().toString());
	var hour  = getDateFormate(d.getHours().toString()); 
	var min   = getDateFormate(d.getMinutes().toString());  
	return year+mon+date+hour+min;
}