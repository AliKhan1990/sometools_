/**
 * Created by hxsd on 2016/6/27.
 */
//----------------------------------------登陆蒙版--------------------------------------------
function modal_layer(){
    var modal = document.createElement('div');
    modal.id = "black_modal";modal.className = "modal";
    modal.innerHTML = '<div id="black_modal" class="modal"></div>';
    document.body.appendChild(modal);
}

function login(){
    modal_layer();
    var box = document.createElement('div');
    box.id = "box";box.className = "nomod";
    box.innerHTML = '<h4 id="title">用户登录<a href="javascript:;" id="closeBtn">x</a></h4>'+
        '<p>'+
        '<label for="#">账号：</label>'+
        '<input id="name" type="text"/>'+
        '</p>'+
        '<p>'+
        '<label for="#">密码：</label>'+
        '<input type="password"/>'+
        '</p>'+
        '<p class="loginbox">'+
        '<button id="login" type="button">登陆</button>'+
        '<button id="reset" type="reset">重置</button>'+
        '</p>';
        document.body.appendChild(box);

        //-------------------------声明部分---------------------------------------------------
        var oPen=document.getElementById('open_popBox');//"打开登陆窗口"组件
        var oBMo=document.getElementById('black_modal');//黑色帷幕
        var oBox=document.getElementById('box');//登陆大盒子
        var oCloseBtn=document.getElementById('closeBtn');
        var oInp=document.getElementsByTagName('input');//输入框
        var oTitle=document.getElementById('title');//登陆框标题
        var oReset=document.getElementById('reset');


    //--------------------------重置表格--------------------------------------------------

        oReset.onclick=function(){
            for (var i=0;i<oInp.length;i++) {//调用两次placeholder函数
                if(i==0){placeholder(oInp[i],'请您输入姓名');}
                if(i==1){placeholder(oInp[i],'请您输入密码');}
            }
        }
    //-------------------------调用placeholder--------------------------------------------
        for (var i=0;i<oInp.length;i++) {//调用两次placeholder函数
            if(i==0){placeholder(oInp[i],'请您输入姓名');}
            if(i==1){placeholder(oInp[i],'请您输入密码');}
        }
    //-----------------------------打开登陆框---------------------------------------------
        oPen.onclick=function(){
            oBMo.style.display='block';
            oBox.style.display='block';
            B_mid(oBox);
        }
    //-----------------------------判断字符模块--------------------------------------------
    document.getElementById('login').onclick = function(){
        var oName = document.getElementById('name');
        if (!isNaN(oName.value)) {
            var text = '请输入字符！';
            popBox_error(text,2000);
        }
    }
    //-----------------------------判断字符函数---------------------------------------------
    function popBox_error(text,delaytime){
        //随时调用，调用时，内容，延迟时间可控
        var t = delaytime || 2000;
        var popbox = document.createElement('span');
        var timer = null;
        popbox.id = "pop_error";
        popbox.style.marginTop = "-8%";
        popbox.innerHTML =  text ;
        //插入到页面当中
        document.body.appendChild(popbox);
        alert_box('请输入英文字符!');
        //居中显示
        B_mid(popbox);
        //移除弹框
        function delay_del(){
            document.body.removeChild(popbox);
        }
        // 2秒以后 自动消失
        timer = setTimeout(function(){
            delay_del();
        },t);
        // //鼠标移入不消失
        popbox.onmouseover = function(){
            clearTimeout(timer);
        }
        popbox.onmouseout = function(){
            delay_del();
        };

    }
    //-----------------------------关闭登陆框效果------------------------------------------
        oCloseBtn.onclick=function(){
            oBMo.style.display='none';
            oBox.style.display='none';
        }
        drag(oBox,oTitle);//-------------调用拖拽函数
        bubble_clean(oCloseBtn);//-------清除冒泡
        bubble_clean(oInp);
        bubble_clean(oReset);

}
//-----------------------------弹窗---------------------------------------------
function alert_box(text){
    var AlertBox = document.createElement('div');
    AlertBox.innerHTML = ' <div id="oAlert">'+
        '<h5>警告</h5>'+
        '<p>'+text+'</p>'+
        '<button id="aBtn" type="button">确定</button>'+
        '</div>';
    document.body.appendChild(AlertBox);
    var close_btn = document.getElementById('aBtn');
    close_btn.onclick = function(){
        document.body.removeChild(AlertBox);
    }
}