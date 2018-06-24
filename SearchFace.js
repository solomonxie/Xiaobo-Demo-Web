/*
	版式
	//var form_BaiDu="http://www.baidu.com/s?wd=";
	//Data[dataIndex++]=new Array("form_BaiDu","Get",form_BaiDu,"百度","web");
	// [0]是fname表单名称 [1]是Method提交类型 [2]是表格值 [3]是显示出来的名称 [4]是归属类型  [5]是表单的keyName(for Post only)]
*/

	//给显示网站的层lrSelect进行对应的填充
	function getLrSelect(wType){
		var arrForms=getWPForms(wType);
		var inner="";//纪录page.innerHtml;cao,不写="" 就会出现undifined，太缺了，害我苦找！
		
		for(var i=0;i<arrForms.length;i++) 
			inner+="<a href='#' onClick=\"setParam('"+ arrForms[i][4] +"','"+ arrForms[i][0] +"');\">"+ arrForms[i][3] +"</a>&nbsp;&nbsp;&nbsp;";
		//原型		<a href='#' onClick=\"setParam('picture','form_163_Picture');\">网易相册</a>&nbsp;&nbsp;&nbsp;
		$("lrSelect").innerHTML="<strong>↓</strong>&nbsp;"+inner;
		$("lrSelect").style.display="";
	}
	
	//返回与选择的类型相对应得网站s的数组
	function getWPForms(wType){
		var arrForms=new Array();
		var didx=0;
		for(var i=2;i<Data.length;i++) 
			if(Data[i][4]==wType) arrForms[didx++]=Data[i];
		return arrForms;
	}

	//
	function changeColor(i){
		for(jj=1;jj<8;jj++){//先全部变成普通样式
			document.getElementById(jj).className="Normal";
			//document.getElementById(jj).style.background="white";
		}
		//再单一改具体的一项
		
		document.getElementById(i).className="Change";
		//document.getElementById(i).style.background="red";
	}
	//设置搜索参数，即搜索类型和搜索引擎名称
	function setParam(type,fname){
		document.form_Total.type.value=type;
		document.form_Total.fname.value=fname;
	}
	
	//----Start----处理Get/Post方法提交表单的搜索----
	//*******注意：Data数组，会出现在引用此js文件的叶面里（因为我会在那个叶面引用Data.js文件*******
	
	//综合搜索转接处
	function goSearch(fname){
		var form=getForm(document.form_Total.fname.value);
		var key=document.form_Total.key.value;
		if(form[0]=="form_XiaoBo_music"){searchMusicHere(key);return false;}
		if(form[1]=="Get")	window.open(form[2]+key);
		else goSearchPost(form);
		//document.form_Total.reset();
		return false;
	}
	
	//专门处理Post方法提交表单的搜索
	//*****************************此函数暂时有问题，稍后处置!!!!!!!!!!!!!!!!!!!!!!!!!*****************************
	function goSearchPost(form){
		/*还没有想好方法*/
	}
//----End----处理Get/Post方法提交表单的搜索----



//----Start----从Data数组中查找制定名称的数组，并返回----
	function getForm(fname){
		for(j=2;j<Data.length;j++){
			//window.status="中断位置在"+j;//检查循环中断的位置
			if(Data[j][0]==fname){//[0]是对应的表单名参数
				return Data[j];//找到了，就把表单数组返回
			}
		}
		//如果检查到没有此表单，则自动跳回搜索页
		//this.location.href="SearchFace.htm";
		//如果没有，则到默认站点搜索
		return Data[1];
	}
//----End----从Data数组中查找制定名称的数组，并返回----



//----Start----站内音乐搜索----自己做搜索引擎真累-------
function searchMusicHere(words){
	if(words=="") window.open("SongList.htm");
	var arrSongsNum=new Array();var aidx=0;//记录下来符合条件的编号
	var arrWords=words.split(" ").sort();//分割搜索词
	var isIt;
	for(var i=0;i<Songs.length;i++){
		isIt=true;
		for(j=0;j<arrWords.length;j++)//这个实现了多关键字查询
			if(Songs[i].toString().toLowerCase().indexOf(arrWords[j].toString().toLowerCase())<0)//统一改为小写统一比较
				isIt=false;//只要有一个不符合，则认定为不是
		if(isIt==true) arrSongsNum[aidx++]=i;
	}
	if(arrSongsNum.length==0){alert("我这儿没这首歌儿啊，换个关键词试试吧！");return false;}
	//else window.open("SongList.htm#"+arrSongs[0][1]);//具体跳到arrSongs的哪一个位置还没有定夺
	else{
		var xx=arrSongsNum[0];for(var i=1;i<arrSongsNum.length;i++)	xx+="*"+arrSongsNum[i];
		window.open("SongList.htm?arrSongsNum="+xx);
	}
}



//----End----站内音乐搜索---
	
	
	/*
	//显示已经选择了的搜索引擎名称,利用鼠标跟随效果
	function showWP(id){
		$(id).style.pixelLeft=event.clientX 
		$(id).style.pixelTop=event.clientY 
		$(id).style.display="none"?"":"none";
		$(id).innerHTML=document.form_Total.fname.value;
	}
	*/