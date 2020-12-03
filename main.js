
function compute()
{
var dy=0;
var dm=0;
var humy=document.getElementById('hy').value;
var humm=document.getElementById('hm').value;
var dmm=0;

if(humy<0)
{
	document.getElementById("display").innerHTML="Invalid Input";
}
else if((humy>=0)&&(humy<=2))
{
	    dy=humy*10.5;
	    dm=humm*4;
	if(dm==12)
	{
		dy++;
	}
    else
    {
    	dmm=parseInt(dm/12);
    	dy=dy+dmm;
    	dm=dm%12;
    }
    document.getElementById("display").innerHTML=dy+" dog years "+dm+" months";
}
else
{
	    dy=21+(humy-2)*4;
        dm=humm*4;
    if(dm==12)
	{
		dy++;
	}
    else
    {
    	dmm=parseInt(dm/12);
    	dy=dy+dmm;
    	dm=dm%12;
    }
	document.getElementById("display").innerHTML=dy+" dog years "+dm+" months";
}

return false;
}
