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
			

			/*//最初使用的方法,也能用，就是长
			
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








