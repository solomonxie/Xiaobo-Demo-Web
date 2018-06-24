	//纪录各个 <div>选择站点面板 的id
	var arr_lrs=["lrWeb","lrDongman","lrDownload","lrVideo","lrBuy","lrMusic","lrPicture"];
	//显示 待用户选择的站点
	function showWP(flag){
		for(i=0;i<arr_lrs.length;i++){//最愚蠢但最方便的方法
			$(arr_lrs[i]).style.display="none";
		}
		switch(flag){
			case "web":hide('lrWeb');swap('lrWeb','className','up','down');break;
			case "dongman":hide('lrDongman');swap('lrDongman','className','up','down');break;
			case "download":hide('lrDownload');swap('lrDownload','className','up','down');break;
			case "video":hide('lrVideo');swap('lrVideo','className','up','down');break;
			case "buy":hide('lrBuy');swap('lrBuy','className','up','down');break;
			case "music":hide('lrMusic');swap('lrMusic','className','up','down');break;
			case "picture":hide('lrPicture');swap('lrPicture','className','up','down');break;
		}
	}
	function changeColor(i){
		for(jj=1;jj<8;jj++){//先全部变成普通样式
			document.getElementById(jj).className="Normal";
			//document.getElementById(jj).style.background="white";
		}
		//再单一改具体的一项
		
		document.getElementById(i).className="Change";
		//document.getElementById(i).style.background="red";
	}
	function setParam(type,fname){
		document.form_Total.type.value=type;
		document.form_Total.fname.value=fname;
	}
	
	//设置选择站点面板的位置
	function setAllPosition(){
		for(i=0;i<arr_lrs.length;i++){
			$(arr_lrs[i]).style.left=295;
			$(arr_lrs[i]).style.top=300;
		}
	}