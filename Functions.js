//----Start----点击列 隐藏/显示----
	function $(s){
		return document.getElementById(s);
	} 
	function swap(s,a,b,c){
		$(s)[a]=$(s)[a]==b?c:b;//操，经典
	}
	function hide(s){
		$(s).style.display=$(s).style.display=="none"?"":"none";
	}
	
//----End----点击列 隐藏/显示----



//----Start----处理Get/Post方法提交表单的搜索----
	//*******注意：Data数组，会出现在引用此js文件的叶面里（因为我会在那个叶面引用Data.js文件*******
	//专门处理Get方法提交表单的搜索
	function goSearchGet(fname){//fname是指表单名
		//处理get方法的表单，直接跳转链接就可以了
		
		//[2]是对应的地址//大白话理解：this.location.href="www.xxx.com/k="+"搜索信息"//为什么要这样呢？因为Data里面的初始值设定问题
		//window.open(getForm(fname)[2]+Data[0]);
		this.location.href=getForm(fname)[2]+Data[0];
	}
	
	//专门处理Post方法提交表单的搜索
	//*****************************此函数暂时有问题，稍后处置!!!!!!!!!!!!!!!!!!!!!!!!!*****************************
	function goSearchPost(fname){
		
		var form=getForm(fname);//form得到数组
		document.write(form[2]);//[2]是对应的整个表单语句
		alert(form[0]);alert(form[1]);alert(form[2]);alert(form[3]);
		//document.form[0].form[3].value=Data[0];//设置key值//[3]是对应的keyName
		//alert(document.form[0].form[3].value);
		//document.form[0].target="_blank";
		//document.form[0].style.visibility="hidden";
		//document.form[0].submit();
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
		return Data[1];
	}
//----End----从Data数组中查找制定名称的数组，并返回----



//----Start----解析地址，得到参数----
		//公用变量部分
		var url=this.location.href;//获取引用本js文件的叶面地址
		
		function getKey(keyName,tpname){
			//尝试截取字符串，检查有没有传参数过来#############################################
			//test//document.form_All.Show.value=url.substring(url.indexOf("Search.htm")+10,url.length);
			var paramList;//参数列表
			
			var start=url.indexOf(tpname)+tpname.length;//获取截取的start位置.+上tpname因为要得到参数需除去这个字符串
			var end=url.length;//获取截取的end位置
			paramList=url.substring(start,end);
			
			if(paramList=="" || paramList.substring(0,1)!="?"){return "";}//检查：没有参数或者参数不合格则停止
			
			//得到完整参数列表，如key=小波&type=web&id=002等,且把?去掉le#############################################
			paramList=paramList.substring(1,paramList.length);
			
			
			
			//-----------新方法########################################################
			//.split("&")事例：如果是"name=a&type=b"就会分解出两个串："name=a"和"type=b"
			//返回的是一个数祖
			var arrParams=paramList.split("&"); // 将多url切割为多个 name/value对
			
			if(arrParams==""){return "";}
			
			for(var i=0;i<arrParams.length;i++){ // 遍历 参数数组，处理每个参数对
			var arrKey=arrParams[i].split("=");
			if(arrKey[0]==keyName)//[0]代表name
				return arrKey[1];//[1]代表value
			}
			return "";
			
			
			//##################################################################
			
			
			
			/*//最初使用的方法
			
			//尝试截取字符串，检查有没有传参数过来#############################################
			//test//document.form_All.Show.value=url.substring(url.indexOf("Search.htm")+10,url.length);
			var paramList;//参数列表
			
			var start=url.indexOf(tpname)+tpname.length;//获取截取的start位置.+上tpname因为要得到参数需除去这个字符串
			var end=url.length;//获取截取的end位置
			paramList=url.substring(start,end);
			
			if(paramList=="" || paramList.substring(0,1)!="?"){return "";}//检查：没有参数或者参数不合格则停止
			
			//得到完整参数列表，如key=小波&type=web&id=002等,且把?去掉le#############################################
			paramList=paramList.substring(1,paramList.length);
			
			//开始获取指定的参数值#############################################
			var key;
			var startKey=paramList.indexOf(keyName+"=");
			var beforeKey=paramList.substring(startKey-1,startKey);
			if(startKey<0 || beforeKey!="&"  && beforeKey!=""){return "";}//检查：如果没有keyName参数，则停止。
			var c=paramList.indexOf("&",startKey+keyName.length+1);//从key值之后开始找&
			if(c>0){//如果key值之后是&
				key=paramList.substring(startKey+keyName.length+1,c);//“startKey+4”是指要“key=”之后的位置；
			}else if(c<0){//如果key值之后为空(且不是&的唯一需单独处理情况)
				key=paramList.substring(startKey+keyName.length+1,paramList.length);
			}
			
			return key;
			
			//大白话介绍：（前提：参数名为key和type）
			//http://………….htm 滴不要
			//http://………….htm? 滴不要
			//http://………….htm?*&%^-(*) 滴不要
			//http://………….htm?a=324b=fwfei 滴不要
			//http://………….htm?akey=weofij 滴不要
			//http://………….htm?type=aa&key= 滴不要
			//http://………….htm?key=aa*type=bb 滴不要
			*/
		}
//----End----解析地址，得到参数----








