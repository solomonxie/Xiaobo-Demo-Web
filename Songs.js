//##################################################################################
//纪录所有歌曲
//##################################################################################


//###############################################################################################################################
//总数组，包括了所有的歌曲
//总数组，包括了所有的歌曲
//基本格式：Songs[SongsIndex]=new Array();SongsIndex++;

var songsIndex=0;
var Songs=new Array();


//###############################################################################################################################
//添加歌曲。[0]是歌名，[1]是地址，[2]是字母分组,有[3]的话则是歌词
//Songs[songsIndex++]=new Array("","","");
Songs[songsIndex++]=new Array("爱x无限大","http://music2.9t9t.com//2/3288/7565/9t9t_637765.wma","A");
Songs[songsIndex++]=new Array("All rise[blue]","http://www.mmuz.com/songs/en/blue/blue_all-rise.rm","A");
Songs[songsIndex++]=new Array("All about us[t.a.t.u]","http://tt.jinxiao.cn/WmaPath/sg521music/oumei/010/22.wma","A");
Songs[songsIndex++]=new Array("Behind Blue Eyes","http://image.hjbbs.com/file/200512/200512067290618250.wma","B");
Songs[songsIndex++]=new Array("半调子[徐若瑄]","http://musics.data.12san.com/v96-/0483/3.wma","B");
Songs[songsIndex++]=new Array("不远[萧亚轩]","http://wma.ubox.com.cn/uboxff3/musicdata3/xyx1087/Elva17-04.wma","B");
Songs[songsIndex++]=new Array("北京一夜[陈升]","http://www.pyyz.com.cn/wap/one%20night%20in%20beijing.mp3","B");
Songs[songsIndex++]=new Array("Can you feel my world[王力宏]","http://entdown.163.com/ent/0402/04/wlh.rm","C");
Songs[songsIndex++]=new Array("彩虹的微笑[王心凌]","http://film.cherte.cn/Files/DownLoad/1.wma","C");
Songs[songsIndex++]=new Array("倒带","http://mp3.wznetcom.com/华人女歌手/蔡依林/城堡/daodai.wma","D");
Songs[songsIndex++]=new Array("打起精神来[王心凌]","http://www.estar.com.cn/download/uploadfile/ring/20061217132.mp3","D");
Songs[songsIndex++]=new Array("戴上我的爱[潘玮泊]","http://221.130.182.13/wap/xnhs/200.mp3","D");
Songs[songsIndex++]=new Array("单车恋人[后弦]","http://news.ccniit.com/music/musicuploads/单车恋人.mp3","D");
Songs[songsIndex++]=new Array("Every body[后街]","http://www.victorygo.pe.kr/you/music/class_mov1/CmonEverybody-take3.wmv");
Songs[songsIndex++]=new Array("恶作剧","http://wma.kv92.com/wma/426.wma","E");
Songs[songsIndex++]=new Array("过敏[杨丞琳]","http://fs6.139.com/1/1099/kelovec/sound/20063262549222.wma","G");
Songs[songsIndex++]=new Array("Glamorous Sky[中岛美嘉]","http://fs9.139.com/1/1696/xiaocai_music/share/2006623191948379.wma","G");
Songs[songsIndex++]=new Array("God is A Girl","http://30.space163.com/chenbin2008/001.mp3","G");
Songs[songsIndex++]=new Array("好朋友[罗志祥]","http://st2.67ting.com/st1/2006111711/4.Wma","H");
Songs[songsIndex++]=new Array("灰姑娘的眼泪","http://music.bjzf.gov.cn/musicfile/new2/1337/11.wma","H");
Songs[songsIndex++]=new Array("花的嫁纱[王心凌]","http://w01.ting999.com/Rmfile/01/200504/100422.rm","H");
Songs[songsIndex++]=new Array("Hailie's Song[Eminem]","http://www.feelingwind.com/BBS/UploadFile/2007-1/20071260405041881.mp3","H");
Songs[songsIndex++]=new Array("还是喜欢你[sweety]","http://bbs.kuantian.com/UploadFile/2006-6/200662512234411791.wma","H");
Songs[songsIndex++]=new Array("Holla back girl","http://www.beathoavenz.de/var/files/01_hollabackgirl_gwen_stefani_BEATHOAVENZ_REMIX.mp3","H");
Songs[songsIndex++]=new Array("号码[周笔畅]","http://download.xinhuanet.com/zonghe/audio/mp3/2007_0209/zhoubichang/hao_ma.mp3","H");
Songs[songsIndex++]=new Array("黑色幽默[周杰伦]","http://d1.fm.qq.com/2007/01/0/313847660/20070128130145.mp3","H");
Songs[songsIndex++]=new Array("I Could Be The One","http://mp3.xialala.com/hip_pop/icouldbetheone.wma","I");
Songs[songsIndex++]=new Array("街头诗人[潘玮泊]","http://60.12.166.106:81/P/20066241514114/15177968.wma","J");
Songs[songsIndex++]=new Array("机会[潘玮泊]","http://data7.13139.com/fd1/20060627/pan/4.wma","J");
Songs[songsIndex++]=new Array("靠近一点点","http://www.show1show.com.cn/UpLoadFile/20071658550953.wma","K");
Songs[songsIndex++]=new Array("梁山伯与茱丽叶","http://www.musicgame.net/1/lsbyzly.wma","L");
Songs[songsIndex++]=new Array("理想情人[杨丞琳]","http://pic.0088.cc/NewWma/music_7/20061127/2/14.wma","L");
Songs[songsIndex++]=new Array("来电[潘玮泊]","http://music1.9t9t.com//1/1205/6888/9t9t_660596.wma","L");
Songs[songsIndex++]=new Array("Loves me not[t.a.t.u]","http://tt.jinxiao.cn/WmaPath/sg521music/oumei/010/4.wma","L");
Songs[songsIndex++]=new Array("Life's A Struggle[宋岳庭]","http://www.pnnic.com/pino/LifesAStruggle.wma","L");
Songs[songsIndex++]=new Array("老大[小柯]","http://www.fm887.com/bbs/UploadFile/20070106030809418.mp3","L");
Songs[songsIndex++]=new Array("老二[小柯]","http://sqmusic.net/UpLoadFile/200612745692205.mp3","L");
Songs[songsIndex++]=new Array("两个世界[孙思怡]","http://gp.sysu.edu.cn/bbsupload/twentwen/两个世界.wma","L");
Songs[songsIndex++]=new Array("Large than life[后街男孩]","http://face.15150.com/music555/2006_10_16/3132978_255008_73839.mp3","L");
Songs[songsIndex++]=new Array("Mockingbird","http://wma2.520music.com/20060312/520lcp/678/12.Wma","M");
Songs[songsIndex++]=new Array("秘密[张震岳]","http://symsia.castpost.com/secret.Mp3","M");
Songs[songsIndex++]=new Array("梦里花","http://fileblog.hjbbs.com/upload/200701/20070101115428501_535_370.wma","M");
Songs[songsIndex++]=new Array("My December[Linkin Park]","http://15.3g789.com/en/band/Linkin%20Park/Under%20Attack/My%20December.mp3","M");
Songs[songsIndex++]=new Array("美人鱼[徐若瑄]","http://bbs.znrsw.com/UploadFile/2006-10/2006103112284362123.wma","M");
Songs[songsIndex++]=new Array("妈妈的爱有多少斤[阿牛]","http://language.chinadaily.com.cn/audio/song/mmda.mp3","M");
Songs[songsIndex++]=new Array("明天见[王心凌]","http://cn.stareastnet.com/music/images/2004-6-2-10-32121.rm","M");
Songs[songsIndex++]=new Array("My Humps","http://tchanphoto.net/saiyi/MyHumps.mp3","M");
Songs[songsIndex++]=new Array("南方[达达乐队]","http://tianlun.blog.66wz.com/UploadFiles/2006-4/421390090.mp3","N");
Songs[songsIndex++]=new Array("No Apologies[Eminem]","http://wma.31tg.com/2006/E/20061264033244/404885622.wma","N");
Songs[songsIndex++]=new Array("你要的爱[戴佩妮]","http://teacher.uestc.edu.cn/Thome/liguohua/Course/1876191413.mp3","N");
Songs[songsIndex++]=new Array("能不能[铁竹堂]","http://www.yoyonet.net/pub/music/%cc%fa%d6%f1%cc%c3-%c4%dc%b2%bb%c4%dc.mp3","N");
Songs[songsIndex++]=new Array("Never Say Goodbye My Girl","http://blog.dev-club.esnai.com/Files/kamio/374587.mp3","N");
Songs[songsIndex++]=new Array("念奴娇[伊能静]","http://wma.6ting.net/wma6ting/qq130k/122905/1.Wma","N");
Songs[songsIndex++]=new Array("其实很爱你[张韶涵]","http://media.myyule.com/song/Z/张韶涵/单曲/其实很爱你.wma","Q");
Songs[songsIndex++]=new Array("亲爱的[徐若瑄]","http://bbs.yzcn.net/uploadfile/2006-9/200691722114378418.wma","Q");
Songs[songsIndex++]=new Array("庆祝[杨丞琳]","http://pic.0088.cc/NewWma/music_7/20061127/2/23.wma","Q");
Songs[songsIndex++]=new Array("亲爱的你怎么不在我身边","http://www.xxfbw.com/mp3/200675024.wma","Q");
Songs[songsIndex++]=new Array("如果还爱我","http://218.27.1.136/UpLoadKaraoke/200692785644689.mp3","R");
Songs[songsIndex++]=new Array("如果爱下去[张靓颖]","http://suncenwen.617000.com/UserUpLoad/User0/10/123.wma","R");
Songs[songsIndex++]=new Array("Remember The Name","http://www.personal.psu.edu/users/l/s/lsc136/mike%20shinoda%20-%20fort%20minor%20-%20remember%20the%20name.mp3","R");
Songs[songsIndex++]=new Array("爱你[王心凌]","http://www.verein.cn/051216/Music/Wma/599/1646/1.wma","R");
Songs[songsIndex++]=new Array("如果没有你[莫文蔚]","http://bbs.yzcn.net/uploadfile/2006-4/2006480565638763.wma","R");
Songs[songsIndex++]=new Array("月と太陽[海贼王]","http://202.103.211.53/lion/music/moonsun.mp3","R");Songs[songsIndex]++
Songs[songsIndex++]=new Array("Run!Run!Run![海贼王]","http://homepage.ntu.edu.tw/~b93409011/13.mp3","R");
Songs[songsIndex++]=new Array("失恋歌迷党[王心凌]","http://www.weidong.gov.cn/music/jxgq/music/10.wma","S");
Songs[songsIndex++]=new Array("Stan(live)[eminem]","http://vega.cs.tku.edu.tw/~u90190468/117_Stan_Live_Feat._Elton_John-MSC.mp3","S");
Songs[songsIndex++]=new Array("是我不可爱[弦子]","http://221.5.255.11/pycs/dalu/woman/xianzi/jianzaixianshang/09.wma","S");
Songs[songsIndex++]=new Array("Stay Tonya Mitchell","http://bybk.net/UploadFiles/2006-7/74377703.wma","S");
Songs[songsIndex++]=new Array("say forever[哥哥妹妹]","http://www.ok7777.cn/upload/music/chinese/哥哥妹妹/SAY_FOREVER.mp3","S");
Songs[songsIndex++]=new Array("The Day You Went Away[M2M]","http://www.wutuobang.com/pub/td.mp3","S");
Songs[songsIndex++]=new Array("他不爱我[莫文蔚]","http://qrj.hy699.com/qrjgq/他不爱我(莫文军).mp3","T");
Songs[songsIndex++]=new Array("他不准我哭[邓丽欣]","http://218.25.243.36/music2/0529/22/coo2/3.mp3","T");
Songs[songsIndex++]=new Array("甜蜜的折磨[徐若瑄]","http://vod2.wyvod.com/music/华人女/徐若瑄/徐若瑄/徐若萱---甜蜜的折磨.mp3","T");
Songs[songsIndex++]=new Array("舞娘","http://bcel.ustc.edu.cn/boc/faculty/weikai/music/wuniang.mp3","W");
Songs[songsIndex++]=new Array("我们的纪念日[范玮琪]","http://www.sdivc.net.cn/05/01/shenghuo/women.wma","W");
Songs[songsIndex++]=new Array("我想更懂你[潘玮泊]","http://ok.12668.com/ok/user/20301/s2007131223256.wma","W");
Songs[songsIndex++]=new Array("When I'm Gone[Eminem]","http://www.ndgold.com/wp-content/EminemLeak.mp3","W");
Songs[songsIndex++]=new Array("what can i do[南拳妈妈]","http://d.le84.com/N/20062161050156/C94051543.wma","W");
Songs[songsIndex++]=new Array("Words Are Weapons[Eminem]","http://files.myopera.com/Emi_Manzarieh/files/05-Words_Are_Weapons(Www.ManzariehBoys.Com).mp3","W");
Songs[songsIndex++]=new Array("Wanna be Spice Girls","http://220.181.26.87/Songs/English/Band_Group/Spice%20Girls/Goodbye/Spice%20Girls%20-%20WANNABE.mp3","W");
Songs[songsIndex++]=new Array("无路用的人[张震岳]","http://music.hyey.com/music//qq6news/117/11.Wma","W");
Songs[songsIndex++]=new Array("我会好好的[王心凌]","http://www.hahu151.net/music/王心凌/我会好好的.Wma","W");
Songs[songsIndex++]=new Array("Where'd You Go","http://www.cnattack.com/Sound/Where\'d%20you%20go.mp3","W");
Songs[songsIndex++]=new Array("幸福背后[王心凌]","http://211.136.104.184/wpms/portal_res/mp3/1_32/599_9088.mp3","X");
Songs[songsIndex++]=new Array("雪の华[中岛美嘉]","http://md2.ddvod.com:9185/Music/10/804/3534/DDVOD_84009787.wma","X");
Songs[songsIndex++]=new Array("红蜻蜓[小虎队]","http://www.31shsx.com/wzczb/801/xiaohudui/小虎队-红蜻蜓.mp3","X");
Songs[songsIndex++]=new Array("原点[蔡健雅-孙燕姿]","http://221.130.182.13/wap/mp3/1353.mp3","Y");
Songs[songsIndex++]=new Array("一半的我[范玮琪]","http://music2.9t9t.com/2/1167/6818/9t9t_388029.wma","Y");
Songs[songsIndex++]=new Array("遇上爱[杨丞琳]","http://hot.134mp3.com/2006a/131.%20遇上爱%20-%20杨丞琳.rm","Y");
Songs[songsIndex++]=new Array("一个像夏天一个像秋天","http://wap.waptd.com/web/fodder/mp3/9.7/ygxxt.mp3","Y");
Songs[songsIndex++]=new Array("一色[中岛美嘉]","http://t.tgttg.com:8080/z/zhongdaomeijia/theend/01.wma","Y");
Songs[songsIndex++]=new Array("永久指针[海贼王]","http://fs6.139.com/0/214/bobo84/sound/20058893612303.mp3","Y");
Songs[songsIndex++]=new Array("原来我love you so much[杜德伟]","http://ydown.zxgame.com/华人男/D/杜德伟/脱掉/7.Wma","Y");
Songs[songsIndex++]=new Array("因为你[徐若瑄]","http://www.bilayu.net/wmam/zzzfuck0o6/2006qzsep/18k_vivian/10.wma","Y");
Songs[songsIndex++]=new Array("专署天使","http://www.52yhc.com/music/yhcgangtai/zhuanshutianshi.rm","Z");
Songs[songsIndex++]=new Array("自恋[罗志祥]","http://218.75.129.253/2005/binbin1/76/10.rm","Z");
Songs[songsIndex++]=new Array("着迷[潘玮泊]","http://music2.9t9t.com/1/1205/6888/9t9t_147291.wma","Z");
Songs[songsIndex++]=new Array("知足[五月天]","http://www.53520.com/1/music/051018/10.wma","Z");
Songs[songsIndex++]=new Array("枫[周杰伦]","http://wma3.520music.com/20060312/520yyq/509/6.Wma","F");
Songs[songsIndex++]=new Array("过云雨[张敬轩]","http://218.30.20.121:5699/qunx/qqi/qqi05.wma","G");
Songs[songsIndex++]=new Array("断点[张敬轩]","http://web.521yz.com/user/wxtk/UploadFile/2005614221646.wma","D");
Songs[songsIndex++]=new Array("马德里不思议[蔡依林]","http://60.12.166.106:81/J/200611283061285/30613741.Wma","M");
Songs[songsIndex++]=new Array("浪漫手机[周杰伦]","http://zf.sz315.cn/admin/uploadfile/2006101911433483095.wma","L");
Songs[songsIndex++]=new Array("退后[周杰伦]","http://218.25.11.147/wma/music2006/1/zhoujielun/1/0695.wma","T");
Songs[songsIndex++]=new Array("断了的弦[周杰伦]","http://150.552211.com/music/0/1/14025/15620/50383/50385.wma","D");
Songs[songsIndex++]=new Array("谁动了我的琴弦[周笔畅]","http://blog.zjhnedu.com/user/356/upload/20068195553.wma","S");
Songs[songsIndex++]=new Array("宠物小精灵主题曲","http://www.pmskys.com/top/宠物小精灵宝石大陆主题曲2.mp3","C");
Songs[songsIndex++]=new Array("原谅[张玉华]","http://music.dlmu.net/wma/music_tt9007/068/3.Wma","Y");
Songs[songsIndex++]=new Array("叶子[阿桑]","http://www.sust.cn/hx/uploads/200511/18_105841_.rm","Y");
Songs[songsIndex++]=new Array("一直很安静[阿桑]","http://53137069.150100.cn/music/一直很安静.mp3","Y");
Songs[songsIndex++]=new Array("忘记[林俊杰]","http://202.96.82.69/wma/music2006/9/061205.wma","W");
Songs[songsIndex++]=new Array("没那么爱他[范玮琪]","http://fv.menllo.com/musics/e99b82b4-67f3-4166-ae83-77e022039f04/2006/12/31/060935134.mp3","M");
//Songs[songsIndex++]=new Array("","","");
//Songs[songsIndex++]=new Array("","","");
//Songs[songsIndex++]=new Array("","","");
//Songs[songsIndex++]=new Array("","","");
//Songs[songsIndex++]=new Array("","","");
//Songs[songsIndex++]=new Array("","","");
//Songs[songsIndex++]=new Array("","","");
//Songs[songsIndex++]=new Array("","","");
//添加歌曲。[0]是歌名，[1]是地址，[2]是字母分组,有[3]的话则是歌词
//###############################################################################################################################



//###############################################################################################################################
//收集人名单thanks person
//###############################################################################################################################
var tkPerson=new Array();
var tkp=0;//累计数
//tkPerson[tkp++]="";
tkPerson[tkp++]="霞姐";
tkPerson[tkp++]="大吉";
tkPerson[tkp++]="伊";
tkPerson[tkp++]="梦伟";
tkPerson[tkp++]="婷婷";
tkPerson[tkp++]="小苒";
tkPerson[tkp++]="邓二";
tkPerson[tkp++]="春儿";
tkPerson[tkp++]="虾米二号";
tkPerson[tkp++]="TT";
tkPerson[tkp++]="鸥";
tkPerson[tkp++]="超波";
tkPerson[tkp++]="燕茹";
tkPerson[tkp++]="洋葱";
tkPerson[tkp++]="晨晨";
tkPerson[tkp++]="萍";
//tkPerson[tkp++]="";
//###############################################################################################################################


//###############################################################################################################################
//相关操作函数
//###############################################################################################################################

//document.write出来歌曲
function getSongs(zm){//ZM代表字母，指A,B...
		//A的unicode符是65，Z是90
		sidx=zm.toUpperCase().charCodeAt(0)-65;//sidx is 对应字母组的序号,根据用户传的参数而得到
		//lgh=Songs[sidx].length;
		
		
		//搜索对应字母组的数据
		zmidx=new Array();//纪录对应组的歌曲的songsIndex编号
		ss=0;//对应zmidx的累积数
		for(var j=0;j<Songs.length;j++)//从所有数据里搜索
			if(Songs[j][2]==zm.toUpperCase())	zmidx[ss++]=j;//如果符合//记录下来
				lgh=zmidx.length;//纪录相关数据的个数
			if(lgh==0){document.write("Sorry,Have not");}//如果为空,则不继续
		
		
		//返回或者直接输出结果
		for(var idx=0;idx<lgh;idx++){
			//[0]是歌名,[1]是地址
			document.write("<a href='#' onClick=\"setSrc('"+ Songs[zmidx[idx]][1] +"');\">"+ Songs[zmidx[idx]][0] +"</a><br>"); 
			
			////为了三列数据显示
			//document.write("<a href='#' onClick=\"setSrc('"+ Songs[zmidx[idx+1]][1] +"');\">"+ Songs[zmidx[idx+1]][0] +"</a>&nbsp;&nbsp;&nbsp;"); 
			//if(lgh>3) 
			//document.write("<a href='#' onClick=\"setSrc('"+ Songs[zmidx[idx+2]][1] +"');\">"+ Songs[zmidx[idx+2]][0] +"</a><br>"); 
		}
		
}

//显示收集歌曲人名单
function getTKPerson(){
	for(var i=0;i<tkPerson.length;i++) document.write(tkPerson[i]+"<br>");
}