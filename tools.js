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
				title?handle=title:handle=box;
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
					document.onmouseup=function(){//鼠标抬起效果
							document.onmousemove=null;
						}
					return false;
					
				}
			
			}
//---------------------------边框拖拽函数----------------------------------------


//-------------------盒子变形------------------------------------
	function zFn(oBox,obj){
		obj.onmousedown=function(ev) {
			var oEv = ev || event;
			oEv.cancleBubble = true;
//---------------------声明原相关参数------------------------------
			var oriWidth = oBox.offsetWidth;//原大盒子宽
			var oriHeight = oBox.offsetHeight;//原大盒子高
			var oriX = oBox.clientX;//原光标坐标Y轴
			var oriY = oBox.clientY;//原光标坐标X轴
			var oriLeft = oBox.offsetLeft;//原左距离
			var oriTop = oBox.offsetTop;//原上距离
//--------------------光标移动效果---------------------------------
		document.onmousemove=function(ev){
			var oEv = ev || event;
			oEv.cancleBubble = true;
			var cusorX = oEv.clientX - oriX;
			var cusorY = oEv.clientY - oriY;
			console.log(cusorX,cusorY);
//--------------------右边框拉伸效果-------------------------------
			if(obj.className == "l"){
				oBox.style.width = oriWidth - cusorX + "px";
				oBox.style.left = oriLeft + cusorX + "px";
			}
//-------------------左边框拉伸效果--------------------------------
			if(obj.className == "r"){
				oBox.style.width = oriWidth + cusorX + "px";
			}
//------------------上边框拉伸效果---------------------------------
			if(obj.className == "t"){
				oBox.style.height = oriHeight - cusorY + "px";
				oBox.style.top = oriTop + cousorY + "px";
			}
//-----------------左上拉伸效果------------------------------------
			if(obj.className == "tl"){
				oBox.style.width = oriWidth - cusorX + "px";
				oBox.style.height = oriHeight - cusorY + "px";
				oBox.style.top = oEv.clientY;
				oBox.style.left = oEv.clientX;
			}
			if(obj.className == "tr"){
				oBox.style.width = oriWidth - cusorX + "px";
				oBox.style.height = oriHeight - cusorY + "px";
				oBox.style.top = oEv.clientY;
			}
			if(obj.className == "bl"){
				oBox.style.width = oriWidth - cusorX + "px";
				oBox.style.height = oriHeight + cusorY + "px";
				oBox.style.left = oEv.clientX;
			}
			if(obj.className == "br"){
				oBox.style.width = oriWidth + cusorX + "px";
				oBox.style.height = oriHeight + cusorY + "px";
			}
		}	
		document.onmouseup = function(){
			document.onmousemove=document.onmouseup=null;
		}
		return false;
			
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
