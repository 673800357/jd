window.onload=timerBegin()
function timerBegin()  
            {  
                var ts = (new Date(2017, 0, 13, 12, 0, 0)) - (new Date());//计算剩余的毫秒数  
              
                var hh = parseInt(ts / 1000 / 60 / 60 , 10);//计算剩余的小时数  
                var mm = parseInt(ts / 1000 / 60 % 60, 10);//计算剩余的分钟数  
                var ss = parseInt(ts / 1000 % 60, 10);//计算剩余的秒数  
              
                hh = checkTime(hh);  
                mm = checkTime(mm);  
                ss = checkTime(ss);  
                document.querySelector('.hour').innerHTML = hh;  
                document.querySelector('.minute').innerHTML = mm;  
                document.querySelector('.second').innerHTML = ss;  
                setInterval("timerBegin()",1000);  
            }  
            function checkTime(i)    
            {    
               if (i < 10) {    
                   i = "0" + i;    
                }    
               return i;    
            }    