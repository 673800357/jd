/**
 * Created by tan on 2016/12/23.
 */

//轮播
    var img=Array.prototype.slice.call(document.querySelectorAll('.slider-main-img li'),0)//大图片
    var p= Array.prototype.slice.call(document.querySelectorAll('.slider-main-buttom li'),0)//图片下面的小点
    var color=document.querySelectorAll('.slider-main-buttom li a')//点的背景
    var right=document.querySelector('.next')//左点击
    var left=document.querySelector('.pre')//右点击
    var index;
    var timer=null;
    var select=0;//记录上次选中的位置
     img[0].style.zIndex=100;
     autoPlay(0)

  
     p.forEach((item,index)=>{
     	item.index=index;
     	item.onmouseover=()=>
     	{
     		
     		 showPic(item)
     		 clearInterval(timer)
     	}
     	item.onmouseout=()=>
     	{
     		autoPlay(item.index)
     	}
     	
     })
      //往左一个图片
     left.onclick=()=>
      { clearInterval(timer) 
      	if(select==0)
      	            {showPic(p[7]);
      	            select=7;    }
      	   else (showPic(p[select-1]));
      	 
      }
      //往右一个图片
      right.onclick=()=>
      {
      	 clearInterval(timer)
      	if(select==7)
      	            {showPic(p[0]);select=0;}
      	     else showPic(p[select+1]);
      	  
      }
      
function showPic(_this)
{      for (var i=0;i<img.length;i++)
	          img[i].style.zIndex=1; 
	            color[select].className=''
	          
	          
	           img[_this.index].style.zIndex=100;
	           color[_this.index].className="select"
	           select=_this.index
	               }
function autoPlay(index)
{
	clearInterval(timer)
	timer=setInterval(()=>{
            showPic(p[index])
            index++
            if (index>=img.length) index=0
	},2000)
}
                         
