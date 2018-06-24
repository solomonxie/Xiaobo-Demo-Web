//##################################################################################
//纪录所有Video
//##################################################################################

//###############################################################################################################################
//<!--create Object start-->
//main function
function Video(title,description,tags,url,color,ground,ch){//ch is charator
	//member datas
	this.title=title;
	this.description=description;
	this.tags=tags;
	this.url=url;
	this.color=color;
	this.ground=ground;
	this.ch=ch;

	//member functions
	this.play=play;
	this.toString=this.toString;
}

//control function
function play(){
	$("lrPlayer").innerHTML="<iframe src='"+ this.url +"' width='500' height='550' scrolling=no></iframe>";
	$("lrTitle").innerHTML="<font class='style6'>"+ this.title +"</font>";
	$("lrInfo").innerHTML="<font class='style6'>Titel:</font>"+ this.title +"<br><font class='style6'>Description:</font>"+ this.description +"<br><font class='style6'>Tags:</font>"+ this.tags.split("&&&") +"<br><a target='_blank' href='http://www.quchao.com/video' title='引用自FLV Downloader' onClick=\"alert('在框框里直接点击复制！！');clipboardData.setData('Text','"+ this.url +"');\"><font color='green'><u>下载</u></font></a>......";
}

function toString(){
	return this.title+this.description+this.tags+this.url;
}

//<!--create Object  end-->
//###############################################################################################################################


//###############################################################################################################################
//总数组，包括了所有的Video
//总数组，包括了所有的Video
//Videos[Videos.length]=new Array();

var Videos=new Array();


//###############################################################################################################################
//title[0],zm[1],description[2],tags[3](connect by "&&&"),url[4],color[5],ground[6]
//Videos[Videos.length++]=new Video("","","","","","","","");

Videos[Videos.length++]=new Video("Final Fansty[MV]","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1206402&uid=1253924794","","Dongman","F");
Videos[Videos.length++]=new Video("对话韩寒","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1206294&uid=1253924794","green","Movie","D");
Videos[Videos.length++]=new Video("杀破狼[预告]","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1206280&uid=1253924794","","Movie","S");
Videos[Videos.length++]=new Video("情牵一线[预告片]","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1205992&uid=1253924794","","Movie","Q");
Videos[Videos.length++]=new Video("阿姆的iPod广告","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1206322&uid=1253924794","","Movie","A");
Videos[Videos.length++]=new Video("Avril-Nobodys Fool","很好听","Avril&&&Nobodys Fool&&&MV","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=335289&uid=1253924794","green","MV","A");
Videos[Videos.length++]=new Video("周杰伦-退后","很好听","MV&&&退后&&&周杰伦&&&Hebe","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1186874&uid=1253924794","","MV","T");
Videos[Videos.length++]=new Video("TANK-专署天使","很好听","TANK&&&专署天使","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=985441&uid=1431462455","","MV","Z");
Videos[Videos.length++]=new Video("小猪-好朋友","很好听","小猪&&&好朋友","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=876049&uid=1213466551","","MV","H");
Videos[Videos.length++]=new Video("Eminem-Stan[Live]02","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1189629&uid=1253924794","","MV","S");
Videos[Videos.length++]=new Video("Eminem-Stan[Live]01","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1189604&uid=1253924794","","MV","S");
Videos[Videos.length++]=new Video("Eminem-Stan[MV]","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1189599&uid=1253924794","green","MV","S");
Videos[Videos.length++]=new Video("五月天-戀愛ing","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188643&uid=1253924794","","MV","L");
Videos[Videos.length++]=new Video("Gorillaz - Clint Eastwood","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188481&uid=1253924794","","MV","C");
Videos[Videos.length++]=new Video("Linkin Park-A place for my head[Live]","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188559&uid=1253924794","","MV","A");
Videos[Videos.length++]=new Video("Gorillaz-El manana","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188456&uid=1253924794","","MV","E");
Videos[Videos.length++]=new Video("Gorillaz - feel good inc","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188452&uid=1253924794","","MV","F");
Videos[Videos.length++]=new Video("Linkin Park&jay-z-numb[live]","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188448&uid=1253924794","green","MV","N");
Videos[Videos.length++]=new Video("南拳妈妈-破晓","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188105&uid=1253924794","","MV","P");
Videos[Videos.length++]=new Video("南拳妈妈-What Can I Do","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188099&uid=1253924794","","MV","W");
Videos[Videos.length++]=new Video("阿桑-疯了","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188088&uid=1253924794","","MV","F");
Videos[Videos.length++]=new Video("Eminem-Mockingbird","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188080&uid=1253924794","","MV","M");
Videos[Videos.length++]=new Video("蔡依林-独占神话","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188064&uid=1253924794","","MV","D");
Videos[Videos.length++]=new Video("Avril-I'm With You[live]","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187883&uid=1253924794","green","MV","I");
Videos[Videos.length++]=new Video("Avril-Tomorrow[live]","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187856&uid=1253924794","green","MV","T");
Videos[Videos.length++]=new Video("Avril-Knock on Heaven","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187844&uid=1253924794","","MV","K");
Videos[Videos.length++]=new Video("五月天---而我知道","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187778&uid=1253924794","green","MV","E");
Videos[Videos.length++]=new Video("Declan-Tell Me Why","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187702&uid=1253924794","green","MV","T");
Videos[Videos.length++]=new Video("张信哲-做你的男人","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187121&uid=1253924794","","MV","Z");
Videos[Videos.length++]=new Video("Eminem-Mockingbird[live]","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1190623&uid=1253924794","","MV","M");
Videos[Videos.length++]=new Video("Alizee-la isla bonita","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187013&uid=1253924794","","MV","L");
Videos[Videos.length++]=new Video("Eminem-When I'm Gone","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=402583&uid=1265833775","green","MV","W");
Videos[Videos.length++]=new Video("罗志祥-精舞门","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=620983&uid=1273112750","","MV","J");
Videos[Videos.length++]=new Video("蔡依林-唯舞独尊","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1191948&uid=1253924794","","MV","W");
Videos[Videos.length++]=new Video("Eminem-8 Miles最后Battle部分前两段","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=953787&uid=1238957694","","MV","E");
Videos[Videos.length++]=new Video("西城男孩-noname","","","http://union.bokecc.com/flash/player.swf?videoID=10241_142033&share=false","","MV","A");
Videos[Videos.length++]=new Video("千里之外","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1199749&uid=1253924794","","MV","Q");
Videos[Videos.length++]=new Video("松隆子-noname","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1199102&uid=1253924794","","MV","S");
Videos[Videos.length++]=new Video("安氏奈美惠-noname","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1199087&uid=1253924794","","MV","A");
Videos[Videos.length++]=new Video("南拳妈妈-白色裂痕","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1199084&uid=1253924794","","MV","B");
Videos[Videos.length++]=new Video("夏之记忆-松隆子","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1198960&uid=1253924794","","MV","X");
Videos[Videos.length++]=new Video("How to be a Gril-安室奈美惠","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1198848&uid=1253924794","","MV","H");
Videos[Videos.length++]=new Video("Do As Infinity","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1198842&uid=1253924794","","MV","D");
Videos[Videos.length++]=new Video("BoA-Valentl","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1198825&uid=1253924794","","MV","V");
Videos[Videos.length++]=new Video("Body Feel Exit-安室奈美惠","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1198831&uid=1253924794","","MV","B");
Videos[Videos.length++]=new Video("死亡笔记片头MV","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1199781&uid=1253924794","","MV","S");
Videos[Videos.length++]=new Video("寂寞在唱歌—阿桑","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1200128&uid=1253924794","","MV","J");
Videos[Videos.length++]=new Video("linkin park - Crawling","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1200274&uid=1253924794","","MV","C");
Videos[Videos.length++]=new Video("linkin park - By Myself","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1200385&uid=1253924794","","MV","B");
Videos[Videos.length++]=new Video("Eminem-Lose Yourself[live]","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1200742&uid=1253924794","","MV","L");
Videos[Videos.length++]=new Video("8 Miles MV","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1200491&uid=1253924794","","MV","E");
Videos[Videos.length++]=new Video("南拳妈妈-牡丹江","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1200744&uid=1253924794","","MV","M");
Videos[Videos.length++]=new Video("南拳妈妈-橘子汽水","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1200752&uid=1253924794","","MV","J");
Videos[Videos.length++]=new Video("南拳妈妈-香草吧噗","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1200790&uid=1253924794","","MV","X");
Videos[Videos.length++]=new Video("南拳妈妈-家","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1200770&uid=1253924794","","MV","J");
Videos[Videos.length++]=new Video("Avril-Take Me Away[live]","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1201103&uid=1253924794","","MV","T");
Videos[Videos.length++]=new Video("Avril-Slipped away[live]","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1201100&uid=1253924794","","MV","S");
Videos[Videos.length++]=new Video("Avril-Complicated[live]","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1201072&uid=1253924794","","MV","C");
Videos[Videos.length++]=new Video("Avril-Losing grip","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1201448&uid=1253924794","","MV","L");
Videos[Videos.length++]=new Video("Avril-My happy ending","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1201496&uid=1253924794","","MV","M");
Videos[Videos.length++]=new Video("厉娜-Darling","超级女生","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1206441&uid=1253924794","","MV","D");
Videos[Videos.length++]=new Video("Avril-Unwanted[live]","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1212551&uid=1253924794","","MV","U");
Videos[Videos.length++]=new Video("Iris with Goo Goo Dolls","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1212948&uid=1253924794","","MV","I");
Videos[Videos.length++]=new Video("Avril--Sk8er Boi[live]","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1212923&uid=1253924794","","MV","S");
Videos[Videos.length++]=new Video("Eminem-Sing For The Moment","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1248205&uid=1253924794","","MV","S");
Videos[Videos.length++]=new Video("Eminem-Like Toy Soldiers[MV]","Eminem-Like Toy Soldiers[MV]","Eminem&&&Like Toy Soldiers&&&MV","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1255040&uid=1253924794","","MV","L");

//###############################################################################################################################




//###############################################################################################################################
//相关操作函数
//###############################################################################################################################

function getVideoForm(ch,gd){//ch is character ,gd is ground just like 动漫,影视,MV
	var inner="";
	
	var vP=new Array();
	for(var i=0;i<Videos.length;i++) 
		if(Videos[i].ch.toLowerCase()==ch.toLowerCase() && Videos[i].ground.toLowerCase()==gd.toLowerCase()) 
			vP[vP.length++]=i;//如果符合，则记录下来
	if(vP.length<1) return "Sorry,Have not"
											+"<a onclick=alert('直接告诉我Video名称就行了，当然有地址更好了'); href='http://wpa.qq.com/msgrd?V=1&Uin=563787750&Menu=yes;' target='_blank'><br><font color='#ff9900'>你来添加吧！</font></a>";
	for(var i=0;i<vP.length;i++)
			inner+=Videos[vP[i]].color==""?
					"<a href='#' id='Videos-"+ vP[i] +"' onClick='Videos["+vP[i]+"].play();'>"+ Videos[vP[i]].title+"</a><br>"
					:
					"<a href='#' id='Videos-"+ vP[i] +"' onClick='Videos["+vP[i]+"].play();'>"+ Videos[vP[i]].title.fontcolor(Videos[vP[i]].color)+"</a><br>";
	return inner;
}

function showVideos(gd){//flag是排列方式如按照歌曲排或者按照歌手排
	gd=gd.toLowerCase();
	for(var i=0;i<26;i++)
		$("lr"+String.fromCharCode(i+65)).innerHTML=getVideoForm(String.fromCharCode(i+65),gd);
		
	setGroundTitle(gd);
	
	//为每一个歌曲链接设置title
	//……
}


<!--//start create object functions
	function GroundTitle(gd){
		this.gd=gd.toLowerCase();
		switch(gd){
			case "dongman":this.title="动漫";break;
			case "movie":this.title="影视";break;
			case "mv":this.title="MV";break;
		}
		this.alertTitle=alertTitle;
	}
	function alertTitle(){
		alert(this.title);
	}
//end create object functions-->

//显示大厅名称//利用到了自定义类
function setGroundTitle(gd){
	var g=new GroundTitle(gd);
	$("tdGroundTitle").innerHTML="<font color='#ff9900'>"+ g.title +"大厅</font>";
}
