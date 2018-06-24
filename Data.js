//##################################################################################
//纪录表单Form元素及值
//##################################################################################


//###############################################################################################################################
//总数组，包括了所有的Form
//总数组，包括了所有的Form
var Data=new Array();
	Data[0]="";//初始化一个key参数，并放在0的位置，方便其他叶面引用此文件时设置这参数
var dataIndex=2;//用作累积数，为了后面方便
//key的值，会出现在引用此js文件的叶面里*************
//Data[dataIndex]=new Array("form_","Get",form_);dataIndex++;
//参数1是fname表单名称 参数2是Method提交类型 参数3是表格值 [参数4是表单的keyName(for Post only)]
//###############################################################################################################################

//以下是各个具体表单值
//以下是各个具体表单值

//默认网站
var form_Default="http://www.baidu.com/s?wd=";//ggggggggggggggggggggggggggggggg
	Data[1]=new Array("form_Default","Get",form_Default);

//web##########################################################################
var form_BaiDu="http://www.baidu.com/s?wd=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_BaiDu","Get",form_BaiDu);dataIndex++;
	

var form_Google="http://www.google.com/search?hl=zh-CN&lr=&nxpt=20.84041075867943669289&q=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_Google","Get",form_Google);dataIndex++;

var form_CSDN="http://search.csdn.net/search/"+ Data[0] +"/1/blog?sclass=blog";//ggggggggggggggggggggggggggggggg
	//var form_CSDN="http://search.csdn.net/search/"+ Data[0] +"/1/blog?sclass=blog";//hehe,这个因为Data[0]只能在中间，所以不好办
	Data[dataIndex]=new Array("form_CSDN","Get",form_CSDN);dataIndex++;

var form_SoSo="http://www.soso.com/q?w=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_SoSo","Get",form_SoSo);dataIndex++;

var form_Yahoo="http://search.cn.yahoo.com/search?p=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_Yahoo","Get",form_Yahoo);dataIndex++;

var form_iAsk="http://iask.sina.com.cn/search_engine/search_knowledge_engine.php?key=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_iAsk","Get",form_iAsk);dataIndex++;
			//"<INPUT value='我搜' type=button name=submit_answer onClick='window.open('http://iask.sina.com.cn/search_engine/search_knowledge_engine.php?key='+ form_iAsk.title.value +'&title=&type=0&page=0')'>" 
			//"<INPUT value='我问' name=submit_ask type=button onClick='window.open('http://iask.sina.com.cn/question/ask_new_2.php?key=&title='+ form_iAsk.title.value +'&classid=0&type=0&page=0')'>"
			
var form_Tom="http://search.tom.com/search.php?word=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_Tom","Get",form_Tom);dataIndex++;

var form_SoGou="http://www.sogou.com/web?query=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_SoGou","Get",form_SoGou);dataIndex++;

var form_TaiPing="http://ks.pconline.com.cn/index.jsp?q=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_TaiPing","Get",form_TaiPing);dataIndex++;
	
var form_TaiPing2="http://ks.pcgames.com.cn/games_index.jsp?q=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_TaiPing2","Get",form_TaiPing2);dataIndex++;



//动漫##########################################################################
var form_TanLan="http://s.greedland.net/i.g?k=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_TanLan","Get",form_TanLan);dataIndex++;

var form_DongManXianFeng="http://www.go2cartoon.com/index.php?p=donghua_search&search2=1&search3=";//PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
	Data[dataIndex]=new Array("form_DongManXianFeng","Get",form_DongManXianFeng,"search3");dataIndex++;
	
var form_MeiRiDongMan="http://www.angelskys.com/index/indexso.asp?zdtype=titletext&&dirs=cvod&Send=%CB%D1%CB%F7Keyword=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_MeiRiDongMan","Get",form_MeiRiDongMan);dataIndex++;
	
var form_TianShangRenJian="http://www.52tian.com/search.asp?x=14&y=11&typeid=片名&keyword=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_TianShangRenJian","Get",form_TianShangRenJian);dataIndex++;
	
var form_MoonBoat="http://www.ffsee.com/Default.asp?keyword=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_MoonBoat","Get",form_MoonBoat);dataIndex++;
	



//资源##########################################################################
var form_bt_fkee="http://bt.fkee.com/search.aspx?q=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_bt_fkee","Get",form_bt_fkee);dataIndex++;



var form_bt_china="http://search.btchina.net/btsearch.php?query=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_bt_china","Get",form_bt_china);dataIndex++;


var form_verycd="http://find.verycd.com/folders/?kw=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_verycd","Get",form_verycd);dataIndex++;

var form_Vagaa="http://hot.yikuai.com/search.php?stype=3&keyword=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_Vagaa","Get",form_Vagaa);dataIndex++;

var form_XunLei="http://so.xunlei.com/search?search=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_XunLei","Get",form_XunLei);dataIndex++;




//视频##########################################################################
var form_Sina_BoKe="http://search.v.blog.sina.com.cn/s?key";//JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ
	Data[dataIndex]=new Array("form_Sina_BoKe","Get",form_Sina_BoKe);dataIndex++;
			//"<SELECT name='type'>" + 
				//"<OPTION value=video selected>视频描述</OPTION>" + 
				//"<OPTION value=user>上传作者</OPTION>" + 
				//"<OPTION value=tag>视频标签</OPTION>" + 
			//"</SELECT>"
			
var form_TuDou="http://www.tudou.com/search/programs?kw=";//JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ
	Data[dataIndex]=new Array("form_TuDou","Get",form_TuDou);dataIndex++;
			//"<SELECT id=posto name=posto>" + 
			//"<OPTION value=/search/programs/ selected>节目</OPTION>" + 
			//"<OPTION value=/search/playlist/>豆单<OPTION value=/search/user/>播客</SELECT>" + 
			
var form_WoLe="http://www.56.com/so/search.php?key=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_WoLe","Get",form_WoLe);dataIndex++;


var form_OpenV="http://www.openv.tv/ls.jsp?q=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_OpenV","Get",form_OpenV);dataIndex++;




//购物##########################################################################
var form_DangDang="http://search.dangdang.com/search.aspx?key=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_DangDang","Get",form_DangDang);dataIndex++;


var form_TaoBao="http://search1.taobao.com/browse/search_auction.htm?";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_TaoBao","Get",form_TaoBao);dataIndex++;


var form_Alibaba="http://search.china.alibaba.com/search/offer_search.htm?tracelog=search_sale&keywords=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_Alibaba","Get",form_Alibaba);dataIndex++;



//音乐##########################################################################
var form_baidu_music="http://mp3.baidu.com/m?f=ms&tn=baidump3&ct=134217728&lf=&rn=&lm=-1&word=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_baidu_music","Get",form_baidu_music);dataIndex++;


var form_yahoo_music="http://music.yahoo.com.cn/search?p=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_yahoo_music","Get",form_yahoo_music);dataIndex++;


var form_SouGou_Music="http://d.sogou.com/music.so?query=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_SouGou_Music","Get",form_SouGou_Music);dataIndex++;


var form_kugoo="http://search.kugoo.com/search.aspx?keyword=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_kugoo","Get",form_kugoo);dataIndex++;


var form_SoSo_Music="http://music.soso.com/q?w=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_SoSo_Music","Get",form_SoSo_Music);dataIndex++;


var form_Haoting="http://www1.haoting.com/user/search.asp?stype=Music&keyword=";
			//"<FORM name='form_Haoting' action=http://www1.haoting.com/user/search.asp method=post>" + 
			//<SELECT name=stype><OPTION value=Music selected>歌曲名称</OPTION><OPTION value=Singer>歌手姓名</OPTION><OPTION value=Special>专辑名称</OPTION></SELECT>
			//"<INPUT type='hidden' name=keyword value='haha'>" + 
			//"</FORM>"
			;//PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
	Data[dataIndex]=new Array("form_Haoting","Get",form_Haoting,"keyword");dataIndex++;
			

//图片##########################################################################
var form_163_Picture="http://photo.163.com/search.php?k=";
			//"<FORM name='form_163_Picture' action='http://photo.163.com/search.php' method=post>" + 
			//"<INPUT type='hidden' name=k value=''>" + 
			//"<br>[要先登陆才能查得到哦]" + 
			//"</FORM>"
		;//PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
	Data[dataIndex]=new Array("form_163_Picture","Get",form_163_Picture,"k");dataIndex++;
		
var form_163_zpoo="http://163.zpoo.com/syphoto.php?user=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_163_zpoo","Get",form_163_zpoo);dataIndex++;


var form_yahoo_photos="http://gallery.photos.cn.yahoo.com/site/search_result.php?keyword=";//JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ
	Data[dataIndex]=new Array("form_yahoo_photos","Get",form_yahoo_photos);dataIndex++;
			//"<select name='option'>" + 
				//"<option value='album' selected id=che_album>搜专辑</option>" + 
				//"<option value='user' id=che_user>搜网友ID</option>" + 
			//"</select>" + 

var form_baidu_picture="http://image.baidu.com/i?tn=baiduimage&ct=201326592&lm=-1&cl=2&word=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_baidu_picture","Get",form_baidu_picture);dataIndex++;
	
var form_Google_picture="http://images.google.com/images?hl=zh-CN&q=ZZZZZZ";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_Google_picture","Get",form_Google_picture);dataIndex++;
	

var form_yahoo_picture="http://image.cn.yahoo.com/search?p=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_yahoo_picture","Get",form_yahoo_picture);dataIndex++;
	
var form_SoSo_picture="http://image.soso.com/image.cgi?sc=img&ch=w.soso&w=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_SoSo_picture","Get",form_SoSo_picture);dataIndex++;
	
var form_iask_picture="http://p.iask.com/p?k=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_iask_picture","Get",form_iask_picture);dataIndex++;
	
var form_sogou_picture="http://pic.sogou.com/pics?query=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_sogou_picture","Get",form_sogou_picture);dataIndex++;
	
var form_tom_picture="http://search.tom.com/searchpic.php?tomsearch=pic&word=ZZZZZ";//ggggggggggggggggggggggggggggggg
	Data[dataIndex]=new Array("form_tom_picture","Get",form_tom_picture);dataIndex++;
	
	



//###############################################################################################################################
//数组提取值的方法
//alert(form_1["key"]);
//alert(form_1[0]);
//alert(form_1.key);
//alert(Data[0].key);

