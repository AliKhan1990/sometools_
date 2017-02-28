//---------------------------输入框效果（封装完毕）--------------------------------------------
function placeholder(ele,text){//设定函数ele变量名，text字符串内容
		ele.value=text;
		ele.style.color='#ccc';
		ele.onfocus=function(){
			if(this.value==text){//判断为默认值清空
				this.value='';
				ele.style.color='#000';
			}
		}
		ele.onblur=function(){//判断为空值设置默认值
			if(this.value==''){
				this.value=text;
				ele.style.color='#ccc';
			}
	}
}

				
//----------------------------拖拽函数（封装完毕）--------------------------------------------
function drag(box,title){
				var handle;
				title ? handle=title:handle=box ;
				handle.onmousedown=function(ev){//鼠标按下效果
					var oEv=ev || window.event;
					var disX=oEv.clientX-box.offsetLeft;//鼠标在Div内的X值
					var disY=oEv.clientY-box.offsetTop;//鼠标在Div内的Y值
					var b_w=document.documentElement.clientWidth;
					var b_h=document.documentElement.clientHeight;
					document.onmousemove=function(ev){
						var oEv=ev || window.event;
						var H=oEv.clientY-disY;//Div的Height值
						var L=oEv.clientX-disX;//Div的Left值
						if (L<0) {	
							L=0	
						}
						if (H<0) {
							H=0	
						}
						if (L>b_w-box.offsetWidth) {					
							L=b_w-box.offsetWidth;
						}
						if (H>b_h-box.offsetHeight) {						
							H=b_h-box.offsetHeight
						}
						box.style.left=L+'px';
						box.style.top=H+'px';
					};
					return false;
					
				}
				document.onmouseup=function(){//鼠标抬起效果
					document.onmousemove=null;
				}
			
			}


//----------------------------绝对居中函数（封装完毕）--------------------------
function B_mid(ele){
var l=(document.documentElement.clientWidth-ele.offsetWidth)/2;
var t=(document.documentElement.clientHeight-ele.offsetHeight)/2;
ele.style.left=l+'px';
ele.style.top=t+'px';
}
//----------------------------冒泡清除-----------------------------------------
function bubble_clean(ele){
	ele.onmousedown=function(ev){
		var oEv=ev || window.event;
		oEv.cancelBubble=true;
	}
}
