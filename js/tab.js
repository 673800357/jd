/**
 * Created by tan on 2016/12/23.
 */

//轮播
    const img=Array.prototype.slice.call(document.querySelectorAll('.slider-main-img li'),0)//大图片
    const p= Array.prototype.slice.call(document.querySelectorAll('.slider-main-buttom li'),0)//图片下面的小点
    const color=document.querySelectorAll('.slider-main-buttom li a')//点的背景
    const right=document.querySelector('.next')//左点击
    const left=document.querySelector('.pre')//右点击
    let index;
    let timer=null;
    let select=0;//记录上次选中的位置
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
{      

	          
	          img.forEach((item)=>{
	          	item.style.zIndex=1
	          	item.style.opacity=0
	          })
	          
	          
	            color[select].className=''
	          
	          
	           img[_this.index].style.zIndex=100;
	            img[_this.index].style.opacity=1;
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
                         
