//##################################################################################
//��¼���и���
//##################################################################################

//###############################################################################################################################
//<!--create Object start-->
//main function
function Song(name,singer,src,nch,sch){//ch is charator
	//member datas
	this.name=name;this.nch=nch;
	this.singer=singer;this.sch=sch;
	this.src=src;
	//this.event_onclick="";

	
	//member functions
	this.play=play;
	this.setLrc=setLrc;
	this.toString=toString;
}

//control function
function play(){
	$("lrPlayer").innerHTML="<EMBED id='player' src=" + this.src + "  hidden='false' type=audio/mpeg controls='console' width=273 height=183 LOOP=5 AUTOSTART=1 SHOWSTATUSBAR=2 style='FILTER: invert(); WIDTH: 350px; HEIGHT: 50px;'></EMBED>";
	$("download").innerHTML="<a href='"+ this.src +"' title='�������'><font color='#ff9900'>����</font></a>";
	this.setLrc();
}
//���ø��
function setLrc(){
	for(var i=0;i<Lrcs.length;i++)
		if(Lrcs[i].name.indexOf(this.name)>=0){$("txtLrc").innerHTML=Lrcs[i].lrc;return;}
		
	$("txtLrc").innerHTML="Sorry,Have not"
			+"<a onclick=alert('�����Ҹ������ƣ�Ȼ��Ѹ�ʷ������ͺ���'); href='http://wpa.qq.com/msgrd?V=1&Uin=563787750&Menu=yes;' target='_blank'><br><font color='#ff9900'>������Ӹ�ʰɣ�</font></a> <a href='#showChangeLrc' name='#showChangeLrc' onClick=\"showModalDialog('ת��Ϊ����.htm')\"><font color='#ff9900'><strong>��</strong></font></a>";
}

function toString(){
	return this.name+this.singer;
}

//<!--create Object  end-->
//###############################################################################################################################

//###############################################################################################################################
//�����飬���������еĸ���
//�����飬���������еĸ���
//������ʽ��Songs[Songs.length]=new Song("","","","","");

var Songs=new Array();

//###############################################################################################################################
//��Ӹ�����[0]is name,[1]is singer,[2]is src,[3]is name's charater,[4]is singer's charater
//Songs[Songs.length++]=new Song("","","","","");
Songs[Songs.length++]=new Song("��x���޴�","","http://music2.9t9t.com//2/3288/7565/9t9t_637765.wma","A","");
Songs[Songs.length++]=new Song("Behind Blue Eyes","","http://image.hjbbs.com/file/200512/200512067290618250.wma","B","");
Songs[Songs.length++]=new Song("All rise","Blue","http://www.mmuz.com/songs/en/blue/blue_all-rise.rm","A","B");
Songs[Songs.length++]=new Song("All about us","t.a.t.u","http://tt.jinxiao.cn/WmaPath/sg521music/oumei/010/22.wma","A","T");
Songs[Songs.length++]=new Song("�����","�����u","http://musics.data.12san.com/v96-/0483/3.wma","B","X");
Songs[Songs.length++]=new Song("��Զ","������","http://wma.ubox.com.cn/uboxff3/musicdata3/xyx1087/Elva17-04.wma","B","X");
Songs[Songs.length++]=new Song("����һҹ","����","http://www.pyyz.com.cn/wap/one%20night%20in%20beijing.mp3","B","C");
Songs[Songs.length++]=new Song("Can you feel my world","������","http://entdown.163.com/ent/0402/04/wlh.rm","C","W");
Songs[Songs.length++]=new Song("�ʺ��΢Ц","������","http://film.cherte.cn/Files/DownLoad/1.wma","C","W");
Songs[Songs.length++]=new Song("����","","http://mp3.wznetcom.com/����Ů����/������/�Ǳ�/daodai.wma","D","");
Songs[Songs.length++]=new Song("��������","������","http://www.estar.com.cn/download/uploadfile/ring/20061217132.mp3","D","W");
Songs[Songs.length++]=new Song("�����ҵİ�","���Ⲵ","http://221.130.182.13/wap/xnhs/200.mp3","D","P");
Songs[Songs.length++]=new Song("��������","����","http://news.ccniit.com/music/musicuploads/��������.mp3","D","H");
Songs[Songs.length++]=new Song("Every body","���","http://www.victorygo.pe.kr/you/music/class_mov1/CmonEverybody-take3.wmv","E","H");
Songs[Songs.length++]=new Song("������","","http://wma.kv92.com/wma/426.wma","E","");
Songs[Songs.length++]=new Song("����","��ة��","http://fs6.139.com/1/1099/kelovec/sound/20063262549222.wma","G","Y");
Songs[Songs.length++]=new Song("Glamorous Sky","�е�����","http://fs9.139.com/1/1696/xiaocai_music/share/2006623191948379.wma","G","Z");
Songs[Songs.length++]=new Song("God is A Girl","","http://30.space163.com/chenbin2008/001.mp3","G","");
Songs[Songs.length++]=new Song("������","��־��","http://st2.67ting.com/st1/2006111711/4.Wma","H","L");
Songs[Songs.length++]=new Song("�ҹ��������","","http://music.bjzf.gov.cn/musicfile/new2/1337/11.wma","H","");
Songs[Songs.length++]=new Song("���ļ�ɴ","������","http://w01.ting999.com/Rmfile/01/200504/100422.rm","H","W");
Songs[Songs.length++]=new Song("Hailie's Song","Eminem","http://www.feelingwind.com/BBS/UploadFile/2007-1/20071260405041881.mp3","H","E");
Songs[Songs.length++]=new Song("����ϲ����","sweety","http://bbs.kuantian.com/UploadFile/2006-6/200662512234411791.wma","H","S");
Songs[Songs.length++]=new Song("Holla back girl","","http://www.beathoavenz.de/var/files/01_hollabackgirl_gwen_stefani_BEATHOAVENZ_REMIX.mp3","H","");
Songs[Songs.length++]=new Song("����","�ܱʳ�","http://download.xinhuanet.com/zonghe/audio/mp3/2007_0209/zhoubichang/hao_ma.mp3","H","Z");
Songs[Songs.length++]=new Song("��ɫ��Ĭ","�ܽ���","http://d1.fm.qq.com/2007/01/0/313847660/20070128130145.mp3","H","Z");
Songs[Songs.length++]=new Song("I Could Be The One","","http://mp3.xialala.com/hip_pop/icouldbetheone.wma","I","");
Songs[Songs.length++]=new Song("��ͷʫ��","���Ⲵ","http://60.12.166.106:81/P/20066241514114/15177968.wma","J","P");
Songs[Songs.length++]=new Song("����","���Ⲵ","http://data7.13139.com/fd1/20060627/pan/4.wma","J","P");
Songs[Songs.length++]=new Song("����һ���","","http://www.show1show.com.cn/UpLoadFile/20071658550953.wma","K","");
Songs[Songs.length++]=new Song("��ɽ��������Ҷ","","http://www.musicgame.net/1/lsbyzly.wma","L","");
Songs[Songs.length++]=new Song("��������","��ة��","http://pic.0088.cc/NewWma/music_7/20061127/2/14.wma","L","Y");
Songs[Songs.length++]=new Song("����","���Ⲵ","http://music1.9t9t.com//1/1205/6888/9t9t_660596.wma","L","P");
Songs[Songs.length++]=new Song("Loves me not","t.a.t.u","http://tt.jinxiao.cn/WmaPath/sg521music/oumei/010/4.wma","L","T");
Songs[Songs.length++]=new Song("Life's A Struggle","����ͥ","http://www.pnnic.com/pino/LifesAStruggle.wma","L","S");
Songs[Songs.length++]=new Song("�ϴ�","С��","http://www.fm887.com/bbs/UploadFile/20070106030809418.mp3","L","X");
Songs[Songs.length++]=new Song("�϶�","С��","http://sqmusic.net/UpLoadFile/200612745692205.mp3","L","X");
Songs[Songs.length++]=new Song("��������","��˼��","http://gp.sysu.edu.cn/bbsupload/twentwen/��������.wma","L","S");
Songs[Songs.length++]=new Song("Large than life","����к�","http://face.15150.com/music555/2006_10_16/3132978_255008_73839.mp3","L","H");
Songs[Songs.length++]=new Song("Mockingbird","Eminem","http://wma2.520music.com/20060312/520lcp/678/12.Wma","M","E");
Songs[Songs.length++]=new Song("����","������","http://symsia.castpost.com/secret.Mp3","M","Z");
Songs[Songs.length++]=new Song("���ﻨ","","http://fileblog.hjbbs.com/upload/200701/20070101115428501_535_370.wma","M","");
Songs[Songs.length++]=new Song("My December","Linkin Park","http://15.3g789.com/en/band/Linkin%20Park/Under%20Attack/My%20December.mp3","M","L");
Songs[Songs.length++]=new Song("������","�����u","http://bbs.znrsw.com/UploadFile/2006-10/2006103112284362123.wma","M","X");
Songs[Songs.length++]=new Song("����İ��ж��ٽ�","��ţ","http://language.chinadaily.com.cn/audio/song/mmda.mp3","M","A");
Songs[Songs.length++]=new Song("�����","������","http://cn.stareastnet.com/music/images/2004-6-2-10-32121.rm","M","W");
Songs[Songs.length++]=new Song("My Humps","","http://tchanphoto.net/saiyi/MyHumps.mp3","M","");
Songs[Songs.length++]=new Song("�Ϸ�","����ֶ�","http://tianlun.blog.66wz.com/UploadFiles/2006-4/421390090.mp3","N","D");
Songs[Songs.length++]=new Song("No Apologies","Eminem","http://wma.31tg.com/2006/E/20061264033244/404885622.wma","N","E");
Songs[Songs.length++]=new Song("��Ҫ�İ�","������","http://teacher.uestc.edu.cn/Thome/liguohua/Course/1876191413.mp3","N","D");
Songs[Songs.length++]=new Song("�ܲ���","������","http://www.yoyonet.net/pub/music/%cc%fa%d6%f1%cc%c3-%c4%dc%b2%bb%c4%dc.mp3","N","T");
Songs[Songs.length++]=new Song("Never Say Goodbye My Girl","","http://blog.dev-club.esnai.com/Files/kamio/374587.mp3","N","");
Songs[Songs.length++]=new Song("��ū��","���ܾ�","http://wma.6ting.net/wma6ting/qq130k/122905/1.Wma","N","Y");
Songs[Songs.length++]=new Song("��ʵ�ܰ���","���غ�","http://media.myyule.com/song/Z/���غ�/����/��ʵ�ܰ���.wma","Q","Z");
Songs[Songs.length++]=new Song("�װ���","�����u","http://bbs.yzcn.net/uploadfile/2006-9/200691722114378418.wma","Q","X");
Songs[Songs.length++]=new Song("��ף","��ة��","http://pic.0088.cc/NewWma/music_7/20061127/2/23.wma","Q","Y");
Songs[Songs.length++]=new Song("�װ�������ô���������","","http://www.xxfbw.com/mp3/200675024.wma","Q","");
Songs[Songs.length++]=new Song("���������","","http://218.27.1.136/UpLoadKaraoke/200692785644689.mp3","R","");
Songs[Songs.length++]=new Song("�������ȥ","����ӱ","http://suncenwen.617000.com/UserUpLoad/User0/10/123.wma","R","Z");
Songs[Songs.length++]=new Song("Remember The Name","Linkin Park","http://www.personal.psu.edu/users/l/s/lsc136/mike%20shinoda%20-%20fort%20minor%20-%20remember%20the%20name.mp3","R","L");
Songs[Songs.length++]=new Song("����","������","http://www.verein.cn/051216/Music/Wma/599/1646/1.wma","A","W");
Songs[Songs.length++]=new Song("���û����","Ī��ε","http://bbs.yzcn.net/uploadfile/2006-4/2006480565638763.wma","R","M");
Songs[Songs.length++]=new Song("�¤�̫�","������","http://202.103.211.53/lion/music/moonsun.mp3","Y","H");
Songs[Songs.length++]=new Song("Run!Run!Run!","������","http://homepage.ntu.edu.tw/~b93409011/13.mp3","R","H");
Songs[Songs.length++]=new Song("ʧ�����Ե�","������","http://www.weidong.gov.cn/music/jxgq/music/10.wma","S","W");
Songs[Songs.length++]=new Song("Stan(live)","Eminem","http://vega.cs.tku.edu.tw/~u90190468/117_Stan_Live_Feat._Elton_John-MSC.mp3","S","E");
Songs[Songs.length++]=new Song("���Ҳ��ɰ�","����","http://221.5.255.11/pycs/dalu/woman/xianzi/jianzaixianshang/09.wma","S","X");
Songs[Songs.length++]=new Song("Stay Tonya Mitchell","","http://bybk.net/UploadFiles/2006-7/74377703.wma","S","");
Songs[Songs.length++]=new Song("say forever","�������","http://www.ok7777.cn/upload/music/chinese/�������/SAY_FOREVER.mp3","S","G");
Songs[Songs.length++]=new Song("The Day You Went Away","M2M","http://www.wutuobang.com/pub/td.mp","T","M");
Songs[Songs.length++]=new Song("��������","Ī��ε","http://qrj.hy699.com/qrjgq/��������(Ī�ľ�).mp3","T","M");
Songs[Songs.length++]=new Song("����׼�ҿ�","������","http://218.25.243.36/music2/0529/22/coo2/3.mp3","T","D");
Songs[Songs.length++]=new Song("���۵���ĥ","�����u","http://vod2.wyvod.com/music/����Ů/�����u/�����u/������---���۵���ĥ.mp3","T","X");
Songs[Songs.length++]=new Song("����","","http://bcel.ustc.edu.cn/boc/faculty/weikai/music/wuniang.mp3","W","C");
Songs[Songs.length++]=new Song("���ǵļ�����","������","http://www.sdivc.net.cn/05/01/shenghuo/women.wma","W","F");
Songs[Songs.length++]=new Song("���������","���Ⲵ","http://ok.12668.com/ok/user/20301/s2007131223256.wma","W","P");
Songs[Songs.length++]=new Song("When I'm Gone","Eminem","http://www.ndgold.com/wp-content/EminemLeak.mp3","W","E");
Songs[Songs.length++]=new Song("what can i do","��ȭ����","http://d.le84.com/N/20062161050156/C94051543.wma","W","N");
Songs[Songs.length++]=new Song("Words Are Weapons","Eminem","http://files.myopera.com/Emi_Manzarieh/files/05-Words_Are_Weapons(Www.ManzariehBoys.Com).mp3","W","E");
Songs[Songs.length++]=new Song("Wanna be Spice Girls","","http://220.181.26.87/Songs/English/Band_Group/Spice%20Girls/Goodbye/Spice%20Girls%20-%20WANNABE.mp3","W","");
Songs[Songs.length++]=new Song("��·�õ���","������","http://music.hyey.com/music//qq6news/117/11.Wma","W","Z");
Songs[Songs.length++]=new Song("�һ�úõ�","������","http://www.hahu151.net/music/������/�һ�úõ�.Wma","W","W");
Songs[Songs.length++]=new Song("Where'd You Go","Eminem","http://www.cnattack.com/Sound/Where'd%20you%20go.mp3","W","E");
Songs[Songs.length++]=new Song("�Ҹ�����","������","http://211.136.104.184/wpms/portal_res/mp3/1_32/599_9088.mp3","X","W");
Songs[Songs.length++]=new Song("ѩ�λ�","�е�����","http://md2.ddvod.com:9185/Music/10/804/3534/DDVOD_84009787.wma","X","Z");
Songs[Songs.length++]=new Song("������","С����","http://www.31shsx.com/wzczb/801/xiaohudui/С����-������.mp3","H","X");
Songs[Songs.length++]=new Song("ԭ��","�̽���-������","http://221.130.182.13/wap/mp3/1353.mp3","Y","C");
Songs[Songs.length++]=new Song("һ�����","������","http://music2.9t9t.com/2/1167/6818/9t9t_388029.wma","Y","F");
Songs[Songs.length++]=new Song("���ϰ�","��ة��","http://hot.134mp3.com/2006a/131.%20���ϰ�%20-%20��ة��.rm","Y","Y");
Songs[Songs.length++]=new Song("һ��������һ��������","","http://wap.waptd.com/web/fodder/mp3/9.7/ygxxt.mp3","Y","");
Songs[Songs.length++]=new Song("һɫ","�е�����","http://t.tgttg.com:8080/z/zhongdaomeijia/theend/01.wma","Y","Z");
Songs[Songs.length++]=new Song("����ָ��","������","http://fs6.139.com/0/214/bobo84/sound/20058893612303.mp3","Y","H");
Songs[Songs.length++]=new Song("ԭ����love you so much","�ŵ�ΰ","http://ydown.zxgame.com/������/D/�ŵ�ΰ/�ѵ�/7.Wma","Y","D");
Songs[Songs.length++]=new Song("��Ϊ��","�����u","http://www.bilayu.net/wmam/zzzfuck0o6/2006qzsep/18k_vivian/10.wma","Y","X");
Songs[Songs.length++]=new Song("ר����ʹ","","http://www.52yhc.com/music/yhcgangtai/zhuanshutianshi.rm","Z","");
Songs[Songs.length++]=new Song("����","��־��","http://218.75.129.253/2005/binbin1/76/10.rm","Z","L");
Songs[Songs.length++]=new Song("����","���Ⲵ","http://music2.9t9t.com/1/1205/6888/9t9t_147291.wma","Z","P");
Songs[Songs.length++]=new Song("֪��","������","http://www.53520.com/1/music/051018/10.wma","Z","W");
Songs[Songs.length++]=new Song("��","�ܽ���","http://wma3.520music.com/20060312/520yyq/509/6.Wma","F","Z");
Songs[Songs.length++]=new Song("������","�ž���","http://218.30.20.121:5699/qunx/qqi/qqi05.wma","G","Z");
Songs[Songs.length++]=new Song("�ϵ�","�ž���","http://web.521yz.com/user/wxtk/UploadFile/2005614221646.wma","D","Z");
Songs[Songs.length++]=new Song("����ﲻ˼��","������","http://60.12.166.106:81/J/200611283061285/30613741.Wma","M","C");
Songs[Songs.length++]=new Song("�����ֻ�","�ܽ���","http://zf.sz315.cn/admin/uploadfile/2006101911433483095.wma","L","Z");
Songs[Songs.length++]=new Song("�˺�","�ܽ���","http://218.25.11.147/wma/music2006/1/zhoujielun/1/0695.wma","T","Z");
Songs[Songs.length++]=new Song("���˵���","�ܽ���","http://150.552211.com/music/0/1/14025/15620/50383/50385.wma","D","Z");
Songs[Songs.length++]=new Song("˭�����ҵ�����","�ܱʳ�","http://blog.zjhnedu.com/user/356/upload/20068195553.wma","S","Z");
Songs[Songs.length++]=new Song("����С����������","","http://www.pmskys.com/top/����С���鱦ʯ��½������2.mp3","C","");
Songs[Songs.length++]=new Song("ԭ��","����","http://music.dlmu.net/wma/music_tt9007/068/3.Wma","Y","Z");
Songs[Songs.length++]=new Song("Ҷ��","��ɣ","http://www.sust.cn/hx/uploads/200511/18_105841_.rm","Y","A");
Songs[Songs.length++]=new Song("һֱ�ܰ���","��ɣ","http://53137069.150100.cn/music/һֱ�ܰ���.mp3","Y","A");
Songs[Songs.length++]=new Song("����","�ֿ���","http://202.96.82.69/wma/music2006/9/061205.wma","W","L");
Songs[Songs.length++]=new Song("û��ô����","������","http://fv.menllo.com/musics/e99b82b4-67f3-4166-ae83-77e022039f04/2006/12/31/060935134.mp3","M","F");
Songs[Songs.length++]=new Song("���������","������","http://music3.9t9t.com/1/367/7356/9t9t_825205.wma","Z","Z");
Songs[Songs.length++]=new Song("���˽�","�����","http://134217728.ba","Q","H");

//Songs=Songs.sort();//������������//�������⻹�д����⴦����

//###############################################################################################################################



//###############################################################################################################################
//�ռ�������thanks person
//###############################################################################################################################
var tkPerson=new Array();
var tkp=0;//�ۼ���
//tkPerson[tkp++]="";
tkPerson[tkp++]="ϼ��";
tkPerson[tkp++]="��";
tkPerson[tkp++]="��";
tkPerson[tkp++]="��ΰ";
tkPerson[tkp++]="����";
tkPerson[tkp++]="С��";
tkPerson[tkp++]="�˶�";
tkPerson[tkp++]="����";
tkPerson[tkp++]="Ϻ�׶���";
tkPerson[tkp++]="TT";
tkPerson[tkp++]="Ÿ";
tkPerson[tkp++]="����";
tkPerson[tkp++]="����";
tkPerson[tkp++]="���";
tkPerson[tkp++]="����";
tkPerson[tkp++]="Ƽ";
tkPerson[tkp++]="<font color='red'>�ź���</font><br><font color='black'>�����ò�л</font>";
tkPerson[tkp++]="�����";
//tkPerson[tkp++]="";
//###############################################################################################################################


//###############################################################################################################################
//��ز�������
//###############################################################################################################################


function getSongForm(ch,flag){//zm����ĸ,flag�����з�ʽ�簴�ո����Ż��߰��ո�����
	var inner="";
	
	//search for form
	var sP=new Array();//sPΪsongs position����ָ��Songs�е�λ��
	if(flag=="byname") 
		for(var i=0;i<Songs.length;i++) if(Songs[i].nch==ch)sP[sP.length++]=i;
	if(flag=="bysinger") 
		for(var i=0;i<Songs.length;i++) if(Songs[i].sch==ch)sP[sP.length++]=i;
	if(sP.length<=0) return "Sorry,Have not";
	
	for(var i=0;i<sP.length;i++){
		if(flag=="byname")
			inner+=Songs[sP[i]].singer==""?
				"<a href='#' id='Songs-"+sP[i]+"' onClick='Songs["+sP[i]+"].play();'>"+ Songs[sP[i]].name+"</a><br>"
				:
				"<a href='#' id='Songs-"+ sP[i] +"' onClick='Songs["+sP[i]+"].play();'>"+ Songs[sP[i]].name+"["+ Songs[sP[i]].singer +"]" +"</a><br>";
		else{
			inner+=Songs[sP[i]].singer==""?
				"<a href='#' id='Songs-"+sP[i]+"' onClick='Songs["+sP[i]+"].play();'>"+ Songs[sP[i]].name+"</a><br>"
				:
				"<a href='#' id='Songs-"+ sP[i] +"' onClick='Songs["+sP[i]+"].play();'>"+Songs[sP[i]].singer+":"+Songs[sP[i]].name+"</a><br>";
		}
	}
		
	return inner;
}

function showSongs(flag){//flag�����з�ʽ�簴�ո����Ż��߰��ո�����
	for(var i=0;i<26;i++)
		$("lr"+String.fromCharCode(i+65)).innerHTML=getSongForm(String.fromCharCode(i+65),flag);
	//Ϊÿһ��������������title
	if(flag=="byname")
		for(var i=0;i<Songs.length;i++)
			$("Songs-"+i).title=
				"���֣�"+ Songs[i].singer +"   ������"+ Songs[i].name +"      ��ַ��"+Songs[i].src;
	else{//����Ϊ����ʱ��������bug,��ɥ
		//for(var i=0;i<Songs.length;i++)
			//$("Songs-"+i).title="���֣�"+ Songs[i][2] +"   ������"+ Songs[i][0] +"      ��ַ��"+Songs[i][4];
	}
}

function showSongsForSearch(key){
	var inner="";
	var paramList=key//getKey("arrSongsNum","SongsForSearch.htm");
	//ȥ����������"#"���ŵȣ���ֹbug
	paramList=paramList.replace(/#/,"").replace(/[A-z]/,"");
	var sP=paramList.split("*");//�и����//sPΪsongs position����ָ��Songs�е�λ��
	for(var i=0;i<sP.length;i++)
		inner+=Songs[sP[i]].singer==""?
				"<a href='#' onClick='Songs["+sP[i]+"].play();'>"+ Songs[sP[i]].name+"</a><br>"
				:
				"<a href='#' onClick='Songs["+sP[i]+"].play();'>"+ Songs[sP[i]].name+"["+ Songs[sP[i]].singer +"]" +"</a><br>";
	$("lrForSearch").innerHTML=inner;
}




//��ʾ�ռ�����������
function getTKPerson(){
	for(var i=0;i<tkPerson.length;i++) document.write(tkPerson[i]+"<br>");
}

//#####################
//#####################
//#####################
//#####################
//#####################
//#####################

