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
	/*
	//显示已经选择了的搜索引擎名称,利用鼠标跟随效果
	function showWP(id){
		$(id).style.pixelLeft=event.clientX 
		$(id).style.pixelTop=event.clientY 
		$(id).style.display="none"?"":"none";
		$(id).innerHTML=document.form_Total.fname.value;
	}
	*/