var i = 1;
var j= -1;
var name = ["HARI","SAI","RAGHURAM","VEERAMALLU"];
var a=name[0];
var len = list.length;
var num = 0;

function display_text(){
	var strs = a.slice(0,i);
	$("#textdisp").html(strs +'|');

	if(i >= 0)
	{
		if (i != a.length)
			{
				i++;
			}
		else
			{
                //Don't delete yourself
				//i = -1;
            }
	}
	else
	{
		if(-1*i != a.length)
			{
                //Don't delete yourself
				//i--;
			}
		else
			{
                //Don't delete yourself
				//i=1;
				//var flag = ret_index(a);
				//a = list[flag];
			}


	}



}
function ret_index(a){
	var index = list.indexOf(a);
	if (index!= (len-1))
		{return (index+1);}
	else
		{return 0;}

}


setInterval(txt,80);
