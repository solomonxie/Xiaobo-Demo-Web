//##################################################################################
//纪录所有MV
//##################################################################################


//###############################################################################################################################
//总数组，包括了所有的MV
//总数组，包括了所有的MV
//MVs[MVs.length]=new Array();

var MVs=new Array();


//###############################################################################################################################
//title,zm,description,tags(connect by "&&&"),url[,urlCode]
//MVs[MVs.length++]=new Array("","","","","");

MVs[MVs.length++]=new Array("Avril-Nobodys Fool","A","很好听","Avril&&&Nobodys Fool&&&MV","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=335289&uid=1253924794");
MVs[MVs.length++]=new Array("周杰伦-退后","T","很好听","MV&&&退后&&&周杰伦&&&Hebe","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1186874&uid=1253924794");
MVs[MVs.length++]=new Array("TANK-专署天使","Z","很好听","TANK&&&专署天使","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=985441&uid=1431462455");
MVs[MVs.length++]=new Array("小猪-好朋友","H","很好听","小猪&&&好朋友","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=876049&uid=1213466551");
MVs[MVs.length++]=new Array("Eminem-Stan[Live]02","S","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1189629&uid=1253924794");
MVs[MVs.length++]=new Array("Eminem-Stan[Live]01","S","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1189604&uid=1253924794");
MVs[MVs.length++]=new Array("Eminem-Stan[MV]","S","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1189599&uid=1253924794");
MVs[MVs.length++]=new Array("五月天-戀愛ing","L","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188643&uid=1253924794");
MVs[MVs.length++]=new Array("Gorillaz - Clint Eastwood","C","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188481&uid=1253924794");
MVs[MVs.length++]=new Array("Linkin Park-A place for my head[Live]","","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188559&uid=1253924794");
MVs[MVs.length++]=new Array("Gorillaz-El manana","E","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188456&uid=1253924794");
MVs[MVs.length++]=new Array("Gorillaz - feel good inc","F","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188452&uid=1253924794");
MVs[MVs.length++]=new Array("Linkin Park&jay-z-numb_encore[live]","N","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188448&uid=1253924794");
MVs[MVs.length++]=new Array("南拳妈妈-破晓","P","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188105&uid=1253924794");
MVs[MVs.length++]=new Array("南拳妈妈-What Can I Do","W","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188099&uid=1253924794");
MVs[MVs.length++]=new Array("阿桑-疯了","F","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188088&uid=1253924794");
MVs[MVs.length++]=new Array("Eminem-Mockingbird","M","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188080&uid=1253924794");
MVs[MVs.length++]=new Array("蔡依林-独占神话","D","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188064&uid=1253924794");
MVs[MVs.length++]=new Array("Avril-I'm With You[live]","I","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187883&uid=1253924794");
MVs[MVs.length++]=new Array("Avril-Tomorrow[live]","T","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187856&uid=1253924794");
MVs[MVs.length++]=new Array("Avril-Knock on Heaven","K","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187844&uid=1253924794");
MVs[MVs.length++]=new Array("五月天---而我知道","E","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187778&uid=1253924794");
MVs[MVs.length++]=new Array("Declan-Tell Me Why","T","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187702&uid=1253924794");
MVs[MVs.length++]=new Array("张信哲-做你的男人","Z","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187121&uid=1253924794");
MVs[MVs.length++]=new Array("Eminem-Mockingbird[live]","M","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1190623&uid=1253924794");
MVs[MVs.length++]=new Array("Alizee-la isla bonita","L","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187013&uid=1253924794");
MVs[MVs.length++]=new Array("Eminem-When I'm Gone","W","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=402583&uid=1265833775");
MVs[MVs.length++]=new Array("罗志祥-精舞门","J","","","");
MVs[MVs.length++]=new Array("","","","","");



//MVs[MVs.length++]=new Array("","","","","");
//MVs[MVs.length++]=new Array("","","","","");
MVs=MVs.sort();
//title,zm,description,tags(connect by "&&&"),url[,urlCode]
//###############################################################################################################################




//###############################################################################################################################
//相关操作函数
//###############################################################################################################################

//搜索指定相关的数据,返回在MVs中的位置
function getMVsP(midx,value){
	//midx是MVs得哪一个元素，value是检验相等的值
	var mP=new Array();//mP为MVs position，是指在MVs中的位置
	for(var i=0;i<MVs.length;i++)
		if(MVs[i][midx]==value) mP[mP.length++]=i;//如果符合，则记录下来
	return mP;
}

function getMVForm(zm){//zm是字母,flag是排列方式如按照歌曲排或者按照歌手排
	var inner="";
	var mP=getMVsP(1,zm);//mP为MVs position，是指在MVs中的位置
	if(mP.length<1) return "Sorry,Have not"
											+"<a onclick=alert('直接告诉我MV名称就行了，当然有地址更好了'); href='http://wpa.qq.com/msgrd?V=1&Uin=563787750&Menu=yes;' target='_blank'><br><font color='#ff9900'>你来添加吧！</font></a>";
	for(var i=0;i<mP.length;i++)
			inner+=
					"<a href='#' id='MVs-"+ mP[i] +"' onClick=\"setMV('"+ MVs[mP[i]][4] +"');\">"+ MVs[mP[i]][0]+"</a><br>";
	
	return inner;
}

function showMVs(){//flag是排列方式如按照歌曲排或者按照歌手排
	for(var i=0;i<26;i++)
		$("lr"+String.fromCharCode(i+65)).innerHTML=getMVForm(String.fromCharCode(i+65));
		
	//为每一个歌曲链接设置title
	//……
}

function showMVsForSearch(key){
	var inner="";
	var paramList=key;//getKey("arrMVsNum","MVsForSearch.htm");
	//去除参数最后的"#"符号等，防止bug
	paramList=paramList.replace(/#/,"").replace(/[A-z]/,"");
	var mP=paramList.split("*");//切割参数//mP为MVs position，是指在MVs中的位置
	for(var i=0;i<mP.length;i++)
		inner+="<a href='#' id='MVs-"+ mP[i] +"' onClick=\"setMV('"+ MVs[mP[i]][4] +"');\">"+ MVs[mP[i]][0]+"</a><br>";
	
	$("lrForSearch").innerHTML=inner;
}

function setMV(src){
	$("lrPlayer").innerHTML="<iframe src='"+ src +"' width='500' height='550' scrolling=no></iframe>";
}
