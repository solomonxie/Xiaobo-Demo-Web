//##################################################################################
//��¼����FormԪ�ؼ�ֵ
//##################################################################################


//###############################################################################################################################
//�����飬���������е�Form
//�����飬���������е�Form
var Data=new Array();
	Data[0]="";//��ʼ��һ��key������������0��λ�ã���������Ҷ�����ô��ļ�ʱ���������
var dataIndex=2;//�����ۻ�����Ϊ�˺��淽��
//key��ֵ������������ô�js�ļ���Ҷ����*************
//Data[dataIndex++]=new Array("form_","Get",form_);
// [0]��fname�������� [1]��Method�ύ���� [2]�ǵ�ֵַ [3]����ʾ����������  [4]�Ǳ�����keyName(for Post only)] [5]�ǹ�������
//###############################################################################################################################

//�����Ǹ����������ֵ
//�����Ǹ����������ֵ

//Ĭ����վ
var form_Default="http://www.baidu.com/s?wd=";//ggggggggggggggggggggggggggggggg
	Data[1]=new Array("form_Default","Get",form_Default);

//web##########################################################################
var form_BaiDu="http://www.baidu.com/s?wd=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_BaiDu","Get",form_BaiDu,"�ٶ�","web");

var form_Google="http://www.google.com/search?hl=zh-CN&lr=&nxpt=20.84041075867943669289&q=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_Google","Get",form_Google,"Google","web");

var form_CSDN="http://search.csdn.net/search/"+ Data[0] +"/1/blog?sclass=blog";//ggggggggggggggggggggggggggggggg
	//var form_CSDN="http://search.csdn.net/search/"+ Data[0] +"/1/blog?sclass=blog";//hehe,�����ΪData[0]ֻ�����м䣬���Բ��ð�
	Data[dataIndex++]=new Array("form_CSDN","Get",form_CSDN,"CSDN","web");

var form_SoSo="http://www.soso.com/q?w=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_SoSo","Get",form_SoSo,"SoSo","web");

var form_Yahoo="http://search.cn.yahoo.com/search?p=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_Yahoo","Get",form_Yahoo,"Yahoo","web");

var form_iAsk="http://iask.sina.com.cn/search_engine/search_knowledge_engine.php?key=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_iAsk","Get",form_iAsk,"iAsk","web");
			//"<INPUT value='����' type=button name=submit_answer onClick='window.open('http://iask.sina.com.cn/search_engine/search_knowledge_engine.php?key='+ form_iAsk.title.value +'&title=&type=0&page=0')'>" 
			//"<INPUT value='����' name=submit_ask type=button onClick='window.open('http://iask.sina.com.cn/question/ask_new_2.php?key=&title='+ form_iAsk.title.value +'&classid=0&type=0&page=0')'>"
			
var form_Tom="http://search.tom.com/search.php?word=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_Tom","Get",form_Tom,"Tom","web");

var form_SoGou="http://www.sogou.com/web?query=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_SoGou","Get",form_SoGou,"SoGou","web");

var form_TaiPing="http://ks.pconline.com.cn/index.jsp?q=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_TaiPing","Get",form_TaiPing,"̫ƽ��","web");
	
var form_TaiPing2="http://ks.pcgames.com.cn/games_index.jsp?q=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_TaiPing2","Get",form_TaiPing2,"̫ƽ����Ϸ��","web");



//����##########################################################################
var form_TanLan="http://s.greedland.net/i.g?k=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_TanLan","Get",form_TanLan,"̰������","dongman");

var form_DongManXianFeng="http://www.go2cartoon.com/index.php?p=donghua_search&search2=1&search3=";//PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
	Data[dataIndex++]=new Array("form_DongManXianFeng","Get",form_DongManXianFeng,"�����ȷ�","dongman","search3");
	
var form_MeiRiDongMan="http://www.angelskys.com/index/indexso.asp?zdtype=titletext&&dirs=cvod&Send=%CB%D1%CB%F7Keyword=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_MeiRiDongMan","Get",form_MeiRiDongMan,"ÿ�ն���","dongman");
	
var form_TianShangRenJian="http://www.52tian.com/search.asp?x=14&y=11&typeid=Ƭ��&keyword=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_TianShangRenJian","Get",form_TianShangRenJian,"�����˼�","dongman");
	
var form_MoonBoat="http://www.ffsee.com/Default.asp?keyword=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_MoonBoat","Get",form_MoonBoat,"������","dongman");
	



//��Դ##########################################################################
var form_bt_fkee="http://bt.fkee.com/search.aspx?q=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_bt_fkee","Get",form_bt_fkee,"�ɿ�","download");



var form_bt_china="http://search.btchina.net/btsearch.php?query=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_bt_china","Get",form_bt_china,"BT@China","download");


var form_verycd="http://find.verycd.com/folders/";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_verycd","Get",form_verycd,"VeryCD","download");

var form_Vagaa="http://hot.yikuai.com/search.php?stype=3&keyword=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_Vagaa","Get",form_Vagaa,"Vagaa","download");

var form_XunLei="http://so.xunlei.com/search?search=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_XunLei","Get",form_XunLei,"Ѹ��","download");

var form_IceFish="http://bt.icefish.org/search.php?keywords=";//PPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
	Data[dataIndex++]=new Array("form_IceFish","Get",form_IceFish,"�������ս�Ŀ","download","keywords");
	


//��Ƶ##########################################################################
var form_Sina_BoKe="http://search.v.blog.sina.com.cn/s?key";//JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ
	Data[dataIndex++]=new Array("form_Sina_BoKe","Get",form_Sina_BoKe,"���˲���","video");
			//"<SELECT name='type'>" + 
				//"<OPTION value=video selected>��Ƶ����</OPTION>" + 
				//"<OPTION value=user>�ϴ�����</OPTION>" + 
				//"<OPTION value=tag>��Ƶ��ǩ</OPTION>" + 
			//"</SELECT>"
			
var form_TuDou="http://www.tudou.com/search/programs?kw=";//JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ
	Data[dataIndex++]=new Array("form_TuDou","Get",form_TuDou,"������","video");
			//"<SELECT id=posto name=posto>" + 
			//"<OPTION value=/search/programs/ selected>��Ŀ</OPTION>" + 
			//"<OPTION value=/search/playlist/>����<OPTION value=/search/user/>����</SELECT>" + 
			
var form_WoLe="http://www.56.com/so/search.php?key=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_WoLe","Get",form_WoLe,"56.com","video");


var form_OpenV="http://www.openv.tv/ls.jsp?q=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_OpenV","Get",form_OpenV,"OpenV","video");




//����##########################################################################
var form_DangDang="http://search.dangdang.com/search.aspx?key=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_DangDang","Get",form_DangDang,"������","buy");


var form_TaoBao="http://search1.taobao.com/browse/search_auction.htm?";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_TaoBao","Get",form_TaoBao,"�Ա���","buy");


var form_Alibaba="http://search.china.alibaba.com/search/offer_search.htm?tracelog=search_sale&keywords=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_Alibaba","Get",form_Alibaba,"����Ͱ�","buy");



//����##########################################################################
//!!!վ�ڸ�������������
var form_XiaoBo_music="SongList.htm?key=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_XiaoBo_music","Get",form_XiaoBo_music,"С�����","music");

var form_baidu_music="http://mp3.baidu.com/m?f=ms&tn=baidump3&ct=134217728&lf=&rn=&lm=-1&word=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_baidu_music","Get",form_baidu_music,"�ٶ�","music");


var form_yahoo_music="http://music.yahoo.com.cn/search?p=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_yahoo_music","Get",form_yahoo_music,"Yahoo","music");


var form_SouGou_Music="http://d.sogou.com/music.so?query=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_SouGou_Music","Get",form_SouGou_Music,"�ѹ�","music");


var form_kugoo="http://search.kugoo.com/search.aspx?keyword=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_kugoo","Get",form_kugoo,"Kugoo","music");


var form_SoSo_Music="http://music.soso.com/q?w=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_SoSo_Music","Get",form_SoSo_Music,"SoSo","music");


var form_Haoting="http://www1.haoting.com/user/search.asp?stype=Music&keyword=";
			//"<FORM name='form_Haoting' action=http://www1.haoting.com/user/search.asp method=post>" + 
			//<SELECT name=stype><OPTION value=Music selected>��������</OPTION><OPTION value=Singer>��������</OPTION><OPTION value=Special>ר������</OPTION></SELECT>
			//"<INPUT type='hidden' name=keyword value='haha'>" + 
			//"</FORM>"
			;//PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
	Data[dataIndex++]=new Array("form_Haoting","Get",form_Haoting,"��������","music","keyword");
			

//ͼƬ##########################################################################
var form_163_Picture="http://photo.163.com/search.php?k=";
			//"<FORM name='form_163_Picture' action='http://photo.163.com/search.php' method=post>" + 
			//"<INPUT type='hidden' name=k value=''>" + 
			//"<br>[Ҫ�ȵ�½���ܲ�õ�Ŷ]" + 
			//"</FORM>"
		;//PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
	Data[dataIndex++]=new Array("form_163_Picture","Get",form_163_Picture,"�������","picture","k");
		
var form_163_zpoo="http://163.zpoo.com/syphoto.php?user=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_163_zpoo","Get",form_163_zpoo,"zpoo.����","picture");


var form_yahoo_photos="http://gallery.photos.cn.yahoo.com/site/search_result.php?keyword=";//JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ
	Data[dataIndex++]=new Array("form_yahoo_photos","Get",form_yahoo_photos,"�Ż����","picture");
			//"<select name='option'>" + 
				//"<option value='album' selected id=che_album>��ר��</option>" + 
				//"<option value='user' id=che_user>������ID</option>" + 
			//"</select>" + 

var form_baidu_picture="http://image.baidu.com/i?tn=baiduimage&ct=201326592&lm=-1&cl=2&word=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_baidu_picture","Get",form_baidu_picture,"�ٶ�","picture");
	
var form_Google_picture="http://images.google.com/images?hl=zh-CN&q=ZZZZZZ";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_Google_picture","Get",form_Google_picture,"Google","picture");
	

var form_yahoo_picture="http://image.cn.yahoo.com/search?p=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_yahoo_picture","Get",form_yahoo_picture,"Yahoo","picture");
	
var form_SoSo_picture="http://image.soso.com/image.cgi?sc=img&ch=w.soso&w=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_SoSo_picture","Get",form_SoSo_picture,"SoSo","picture");
	
var form_iask_picture="http://p.iask.com/p?k=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_iask_picture","Get",form_iask_picture,"iAsk","picture");
	
var form_sogou_picture="http://pic.sogou.com/pics?query=";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_sogou_picture","Get",form_sogou_picture,"SoGou","picture");
	
var form_tom_picture="http://search.tom.com/searchpic.php?tomsearch=pic&word=ZZZZZ";//ggggggggggggggggggggggggggggggg
	Data[dataIndex++]=new Array("form_tom_picture","Get",form_tom_picture,"Tom","picture");
	
	

//###############################################################################################################################
//��ز�������
//###############################################################################################################################

/*
	��ʽ
	//var form_BaiDu="http://www.baidu.com/s?wd=";
	//Data[dataIndex++]=new Array("form_BaiDu","Get",form_BaiDu,"�ٶ�","web");
	// [0]��fname�������� [1]��Method�ύ���� [2]�Ǳ���ֵ [3]����ʾ���������� [4]�ǹ�������  [5]�Ǳ�����keyName(for Post only)]
*/

	//����ʾ��վ�Ĳ�lrSelect���ж�Ӧ�����
	function getLrSelect(wType){
		var arrForms=getWPForms(wType);
		var inner="";//��¼page.innerHtml;cao,��д="" �ͻ����undifined��̫ȱ�ˣ����ҿ��ң�
		
		for(var i=0;i<arrForms.length;i++) 
			inner+="<a href='#' onClick=\"setParam('"+ arrForms[i][4] +"','"+ arrForms[i][0] +"');\">"+ arrForms[i][3] +"</a>&nbsp;&nbsp;&nbsp;";
		//ԭ��		<a href='#' onClick=\"setParam('picture','form_163_Picture');\">�������</a>&nbsp;&nbsp;&nbsp;
		$("lrSelect").innerHTML="<strong>��</strong>&nbsp;"+inner;
		$("lrSelect").style.display="";
	}
	
	//������ѡ����������Ӧ����վs������
	function getWPForms(wType){
		var arrForms=new Array();
		var didx=0;
		for(var i=2;i<Data.length;i++) 
			if(Data[i][4]==wType) arrForms[didx++]=Data[i];
		return arrForms;
	}

	//
	function changeColor(i){
		for(jj=1;jj<8;jj++){//��ȫ�������ͨ��ʽ
			document.getElementById(jj).className="Normal";
			//document.getElementById(jj).style.background="white";
		}
		//�ٵ�һ�ľ����һ��
		
		document.getElementById(i).className="Change";
		//document.getElementById(i).style.background="red";
	}
	//�����������������������ͺ�������������
	function setParam(type,fname){
		document.form_Total.type.value=type;
		document.form_Total.fname.value=fname;
	}
	
	//----Start----����Get/Post�����ύ����������----
	//*******ע�⣺Data���飬����������ô�js�ļ���Ҷ�����Ϊ�һ����Ǹ�Ҷ������Data.js�ļ�*******
	
	//�ۺ�����ת�Ӵ�
	function goSearch(fname){
		var form=getForm(document.form_Total.fname.value);
		var key=document.form_Total.key.value;
		if(form[0]=="form_XiaoBo_music"){searchMusicHere(key);return false;}
		if(form[1]=="Get")	window.open(form[2]+key);
		else goSearchPost(form);
		//document.form_Total.reset();
		return false;
	}
	
	//ר�Ŵ���Post�����ύ����������
	//*****************************�˺�����ʱ�����⣬�Ժ���!!!!!!!!!!!!!!!!!!!!!!!!!*****************************
	function goSearchPost(form){
		/*��û����÷���*/
	}
//----End----����Get/Post�����ύ����������----



//----Start----��Data�����в����ƶ����Ƶ����飬������----
	function getForm(fname){
		for(j=2;j<Data.length;j++){
			//window.status="�ж�λ����"+j;//���ѭ���жϵ�λ��
			if(Data[j][0]==fname){//[0]�Ƕ�Ӧ�ı���������
				return Data[j];//�ҵ��ˣ��Ͱѱ������鷵��
			}
		}
		//�����鵽û�д˱��������Զ���������ҳ
		//this.location.href="SearchFace.htm";
		//���û�У���Ĭ��վ������
		return Data[1];
	}
//----End----��Data�����в����ƶ����Ƶ����飬������----



//----Start----վ����������----�Լ���������������-------
function searchMusicHere(words){
	if(words=="") window.open("SongList.htm");
	var arrSongsNum=new Array();var aidx=0;//��¼�������������ı��
	var arrWords=words.split(" ").sort();//�ָ�������
	var isIt;
	for(var i=0;i<Songs.length;i++){
		isIt=true;
		for(j=0;j<arrWords.length;j++)//���ʵ���˶�ؼ��ֲ�ѯ
			if(Songs[i].toString().toLowerCase().indexOf(arrWords[j].toString().toLowerCase())<0)//ͳһ��ΪСдͳһ�Ƚ�
				isIt=false;//ֻҪ��һ�������ϣ����϶�Ϊ����
		if(isIt==true) arrSongsNum[aidx++]=i;
	}
	if(arrSongsNum.length==0){alert("�����û���׸�����������ؼ������԰ɣ�");return false;}
	//else window.open("SongList.htm#"+arrSongs[0][1]);//��������arrSongs����һ��λ�û�û�ж���
	else{
		var xx=arrSongsNum[0];for(var i=1;i<arrSongsNum.length;i++)	xx+="*"+arrSongsNum[i];
		window.open("SongList.htm?arrSongsNum="+xx);
	}
}



//----End----վ����������---
	
	
	/*
	//��ʾ�Ѿ�ѡ���˵�������������,����������Ч��
	function showWP(id){
		$(id).style.pixelLeft=event.clientX 
		$(id).style.pixelTop=event.clientY 
		$(id).style.display="none"?"":"none";
		$(id).innerHTML=document.form_Total.fname.value;
	}
	*/