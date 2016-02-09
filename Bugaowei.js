function encode(){
	var str=document.getElementById('content').value;
	document.getElementById('content').value='';
	var temp='';
	var result='';
	for (var i=0;i<str.length;i++){
		if(str.charCodeAt(i)==55376&&str.charCodeAt(i+1)==57265){
			result+='';
			i++;
		}else if(str.charCodeAt(i)>=55296&&str.charCodeAt(i)<=56319&&str.charCodeAt(i+1)>=56320&&str.charCodeAt(i+1)<=57343){
			temp=str.charAt(i)+str.charAt(i+1);
			i++;
		}else{
			for(var j=0;j<1023;j++){
				if(131072+str.charCodeAt(i)>=65536+j*1024&&131072+str.charCodeAt(i)<=66559+j*1024){
					temp=String.fromCharCode(55296+j,str.charCodeAt(i)+121856-j*1024);
				}
			}
		} 
		result+=temp;	
	}
	document.getElementById('content').value=String.fromCharCode(55376,57265)+result;
}
function decode(){
	var str=document.getElementById('content').value;
	document.getElementById('content').value='';
	var result='';
	for (var i = 0; i < str.length; i++) {
		if(str.charCodeAt(i)==55376&&str.charCodeAt(i+1)==57265){
			result+='';
			i++;
		}else if(str.charCodeAt(i)>=55296&&str.charCodeAt(i)<=56319&&str.charCodeAt(i+1)>=56320&&str.charCodeAt(i+1)<=57343){
			result+=String.fromCharCode((str.charCodeAt(i)-55296)*1024+str.charCodeAt(i+1)-121856);
			i++;
		}else{
			result+=str.charAt(i);
		}
	}
	document.getElementById('content').value=result;
}
function unicode(){
	var str=document.getElementById('content').value;
	document.getElementById('content').value='';
	var result='';
	for (var i=0;i<str.length;i++){
		if(str.charCodeAt(i)<128){
			result+=str.charAt(i);
		}else if(str.charCodeAt(i)==55360&&str.charCodeAt(i+1)==56358){
			if(str.charAt(i+2)=='#'){
				result+=String.fromCharCode(55360,56358)+'#';
				i++;
			}else{
				result+=String.fromCharCode(55360,56358)+'#131110;';
			}		
			if(str.charAt(i+3)+str.charAt(i+4)+str.charAt(i+5)+str.charAt(i+6)+str.charAt(i+7)+str.charAt(i+8)=='131110')i+=8;
			i++;
		}else if(str.charCodeAt(i)==55376&&str.charCodeAt(i+1)==57265){
			result+='';
			if(str.charAt(i+5)+str.charAt(i+6)+str.charAt(i+7)+str.charAt(i+8)+str.charAt(i+9)+str.charAt(i+10)=='148401')i+=10;
			i++;
		}else if(str.charCodeAt(i)>=55296&&str.charCodeAt(i)<=56319&&str.charCodeAt(i+1)>=56320&&str.charCodeAt(i+1)<=57343){
			result+=String.fromCharCode(55360,56358)+'#'+((str.charCodeAt(i) - 55296)*1024+str.charCodeAt(i+1)+9216)+';';
			i++;
		}else{
			result +=String.fromCharCode(55360,56358)+'#'+str.charCodeAt(i)+';';
		}	
	}
	document.getElementById('content').value=String.fromCharCode(55376,57265)+String.fromCharCode(55360,56358)+'#148401;'+result;
}
function deunicode(){
	var str=document.getElementById('content').value;
	document.getElementById('content').value='';
	var result='';
	var temp=str;
	for (var i=0;i<str.length;i++){
		if(str.charAt(i)+str.charAt(i+1)+str.charAt(i+2)+str.charAt(i+3)+str.charAt(i+4)+str.charAt(i+5)+str.charAt(i+6)+str.charAt(i+7)=='&#148401'){
			result+='';
			i+=7;
		}else if(str.charCodeAt(i)==55376&&str.charCodeAt(i+1)==57265){
			result+='';
			if(str.charAt(i+5)+str.charAt(i+6)+str.charAt(i+7)+str.charAt(i+8)+str.charAt(i+9)+str.charAt(i+10)=='148401')i+=10;
			i++;
		}else{
			result+=String.fromCharCode(temp.substring(temp.indexOf('#')+1,temp.indexOf(';')));
		}
		temp=temp.substring(temp.indexOf(';')+1,temp.length);
	}
	if(!str.match(String.fromCharCode(55360,56358)+'#'|'&#'))result=str;
	document.getElementById('content').value=result;
}
