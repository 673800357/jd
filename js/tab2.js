var display1=document.querySelector('.display1')
var display2=document.querySelector('.display2')
var show1=document.querySelector('#show1')
var show2=document.querySelector('#show2')

show1.onmouseover=function()
{    
	
	display1.className="display1 selected"
	display2.className="display1"
	show1.className="show-selected"
	show2.className=""
}
show2.onmouseover=function()
{
	display2.className="display2 selected"
	display1.className="display2"
	show2.className="show-selected"
	show1.className=""
}
