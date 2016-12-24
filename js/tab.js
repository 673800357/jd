/**
 * Created by tan on 2016/12/23.
 */

//轮播

    var img=document.querySelectorAll('.slider-main-img li')//大图片
    var p=document.querySelectorAll('.slider-main-buttom li')//图片下面的小点
    var color=document.querySelectorAll('.slider-main-buttom li a')//点的背景
    var right=document.querySelector('.next')//左点击
    var left=document.querySelector('.pre')//右点击
    var index;
    var timer=null;
    var select=0;//记录上次选中的位置
     img[0].style.zIndex=100;
     autoPlay(0)
    for (var i=0;i<img.length;i++)
     {  
     	p[i].index=i;
     	
     	p[i].onmouseover=function()
     	{
     		
     		 showPic(this)
     		 clearInterval(timer)
     	}
     	p[i].onmouseout=function()
     	{
     		autoPlay(this.index)
     	}
     }
     
     
     left.onclick=function()
      { clearInterval(timer) 
      	if(select==0)
      	            {showPic(p[7]);
      	            select=7;    }
      	   else (showPic(p[select-1]));
      	 
      }
      right.onclick=function()
      {
      	 clearInterval(timer)
      	if(select==7)
      	            {showPic(p[0]);select=0;}
      	     else showPic(p[select+1]);
      	  
      }
      
function showPic(_this)
{      for (var i=0;i<8;i++)
	          img[i].style.zIndex=1; 
	            color[select].className=''
	          
	          
	           img[_this.index].style.zIndex=100;
	           color[_this.index].className="select"
	           select=_this.index
	           
	               
	        	
}
function autoPlay(index)
{
	clearInterval(timer)
	timer=setInterval(function(){
            showPic(p[index])
            index++
            if (index>=8) index=0
	},2000)
}
                         
