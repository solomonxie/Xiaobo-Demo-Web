//##################################################################################
//��¼��FormԪ�ؼ�ֵ
//##################################################################################

//###############################################################################################################################
//<!--create Object start-->
//main function
function SForm(name,method,url,title,type){
	//member datas
	this.name=name;
	this.method=method;
	this.url=url;
	this.title=title;
	this.type=type;
	
	//member functions
	this.search=search;
}

//control function
function search(){
	//��������
}

function toString(){
	return this.name+this.method+this.url+this.title+this.type;
}

//<!--create Object  end-->
//###############################################################################################################################


//###############################################################################################################################
//�����飬���������е�Form
//�����飬���������е�Form
var Data=new Array();

//###############################################################################################################################

//�����Ǹ��������ֵ
//�����Ǹ��������ֵ

Data[0]=new SForm("form_Default","Get","http://www.baidu.com/s?wd=");
Data[Data.length++]=new SForm("form_BaiDu","Get","http://www.baidu.com/s?wd=","�ٶ�","web");
Data[Data.length++]=new SForm("form_Google","Get","http://www.google.com/search?hl=zh-CN&lr=&nxpt=20.84041075867943669289&q=","Google","web");
Data[Data.length++]=new SForm("form_CSDN","Get","http://search.csdn.net/search/form_Default,Get,http://www.baidu.com/s?wd=/1/blog?sclass=blog","CSDN","web");
Data[Data.length++]=new SForm("form_SoSo","Get","http://www.soso.com/q?w=","SoSo","web");
Data[Data.length++]=new SForm("form_Yahoo","Get","http://search.cn.yahoo.com/search?p=","Yahoo","web");
Data[Data.length++]=new SForm("form_iAsk","Get","http://iask.sina.com.cn/search_engine/search_knowledge_engine.php?key=","iAsk","web");
Data[Data.length++]=new SForm("form_Tom","Get","http://search.tom.com/search.php?word=","Tom","web");
Data[Data.length++]=new SForm("form_SoGou","Get","http://www.sogou.com/web?query=","SoGou","web");
Data[Data.length++]=new SForm("form_TaiPing","Get","http://ks.pconline.com.cn/index.jsp?q=","̫ƽ��","web");
Data[Data.length++]=new SForm("form_TaiPing2","Get","http://ks.pcgames.com.cn/games_index.jsp?q=","̫ƽ����Ϸ��","web");
Data[Data.length++]=new SForm("form_TanLan","Get","http://s.greedland.net/i.g?k=","̰������","dongman");
Data[Data.length++]=new SForm("form_DongManXianFeng","Get","http://www.go2cartoon.com/index.php?p=donghua_search&search2=1&search3=","�����ȷ�","dongman");
Data[Data.length++]=new SForm("form_MeiRiDongMan","Get","http://www.angelskys.com/index/indexso.asp?zdtype=titletext&&dirs=cvod&Send=%CB%D1%CB%F7Keyword=","ÿ�ն���","dongman");
Data[Data.length++]=new SForm("form_TianShangRenJian","Get","http://www.52tian.com/search.asp?x=14&y=11&typeid=Ƭ��&keyword=","�����˼�","dongman");
Data[Data.length++]=new SForm("form_MoonBoat","Get","http://www.ffsee.com/Default.asp?keyword=","������","dongman");
Data[Data.length++]=new SForm("form_bt_fkee","Get","http://bt.fkee.com/search.aspx?q=","�ɿ�","download");
Data[Data.length++]=new SForm("form_bt_china","Get","http://search.btchina.net/btsearch.php?query=","BT@China","download");
Data[Data.length++]=new SForm("form_verycd","Get","http://find.verycd.com/folders/","VeryCD","download");
Data[Data.length++]=new SForm("form_Vagaa","Get","http://hot.yikuai.com/search.php?stype=3&keyword=","Vagaa","download");
Data[Data.length++]=new SForm("form_XunLei","Get","http://so.xunlei.com/search?search=","Ѹ��","download");
Data[Data.length++]=new SForm("form_IceFish","Get","http://bt.icefish.org/search.php?keywords=","�������ս�Ŀ","download");
Data[Data.length++]=new SForm("form_Sina_BoKe","Get","http://search.v.blog.sina.com.cn/s?key=","���˲���","video");
Data[Data.length++]=new SForm("form_TuDou","Get","http://www.tudou.com/search/programs?kw=","������","video");
Data[Data.length++]=new SForm("form_WoLe","Get","http://www.56.com/so/search.php?key=","56.com","video");
Data[Data.length++]=new SForm("form_OpenV","Get","http://www.openv.tv/ls.jsp?q=","OpenV","video");
Data[Data.length++]=new SForm("form_DangDang","Get","http://search.dangdang.com/search.aspx?key=","������","buy");
Data[Data.length++]=new SForm("form_TaoBao","Get","http://search1.taobao.com/browse/search_auction.htm?","�Ա���","buy");
Data[Data.length++]=new SForm("form_Alibaba","Get","http://search.china.alibaba.com/search/offer_search.htm?tracelog=search_sale&keywords=","����Ͱ�","buy");
Data[Data.length++]=new SForm("form_XiaoBo_music","Get","SongList.htm?key=","С�����","music");
Data[Data.length++]=new SForm("form_baidu_music","Get","http://mp3.baidu.com/m?f=ms&tn=baidump3&ct=134217728&lf=&rn=&lm=-1&word=","�ٶ�","music");
Data[Data.length++]=new SForm("form_yahoo_music","Get","http://music.yahoo.com.cn/search?p=","Yahoo","music");
Data[Data.length++]=new SForm("form_SouGou_Music","Get","http://d.sogou.com/music.so?query=","�ѹ�","music");
Data[Data.length++]=new SForm("form_kugoo","Get","http://search.kugoo.com/search.aspx?keyword=","Kugoo","music");
Data[Data.length++]=new SForm("form_SoSo_Music","Get","http://music.soso.com/q?w=","SoSo","music");
Data[Data.length++]=new SForm("form_Haoting","Get","http://www1.haoting.com/user/search.asp?stype=Music&keyword=","��������","music");
Data[Data.length++]=new SForm("form_163_Picture","Get","http://photo.163.com/search.php?k=","�������","picture");
Data[Data.length++]=new SForm("form_163_zpoo","Get","http://163.zpoo.com/syphoto.php?user=","zpoo.����","picture");
Data[Data.length++]=new SForm("form_yahoo_photos","Get","http://gallery.photos.cn.yahoo.com/site/search_result.php?keyword=","�Ż����","picture");
Data[Data.length++]=new SForm("form_baidu_picture","Get","http://image.baidu.com/i?tn=baiduimage&ct=201326592&lm=-1&cl=2&word=","�ٶ�","picture");
Data[Data.length++]=new SForm("form_Google_picture","Get","http://images.google.com/images?hl=zh-CN&q=","Google","picture");
Data[Data.length++]=new SForm("form_yahoo_picture","Get","http://image.cn.yahoo.com/search?p=","Yahoo","picture");
Data[Data.length++]=new SForm("form_SoSo_picture","Get","http://image.soso.com/image.cgi?sc=img&ch=w.soso&w=","SoSo","picture");
Data[Data.length++]=new SForm("form_iask_picture","Get","http://p.iask.com/p?k=","iAsk","picture");
Data[Data.length++]=new SForm("form_sogou_picture","Get","http://pic.sogou.com/pics?query=","SoGou","picture");
Data[Data.length++]=new SForm("form_tom_picture","Get","http://search.tom.com/searchpic.php?tomsearch=pic&word=ZZZZZ","Tom","picture");


//###############################################################################################################################
//��ز�������
//###############################################################################################################################

/*
	��ʽ
	//var form_BaiDu="http://www.baidu.com/s?wd=";
	//Data[Data.length++]=new SForm("form_BaiDu","Get",form_BaiDu,"�ٶ�","web");
	// [0]��fname������ [1]��Method�ύ���� [2]�Ǳ��ֵ [3]����ʾ���������� [4]�ǹ�������  [5]�Ǳ���keyName(for Post only)]
*/

	//����ʾ��վ�Ĳ�lrSelect���ж�Ӧ�����
	function getLrSelect(wType){
		var arrForms=getWPForms(wType);
		var inner="";//��¼page.innerHtml;cao,��д="" �ͻ����undifined��̫ȱ�ˣ����ҿ��ң�
		
		for(var i=0;i<arrForms.length;i++) 
			inner+="<a href='#' onClick=\"setParam('"+ arrForms[i].url +"','"+ arrForms[i].name +"');\">"+ arrForms[i].title +"</a>&nbsp;&nbsp;&nbsp;";
		$("lrSelect").innerHTML="<strong>��</strong>&nbsp;"+inner;
		$("lrSelect").style.display="";
	}
	
	//������ѡ����������Ӧ����վs�Ķ���
	function getWPForms(wType){
		var arrForms=new Array();
		for(var i=1;i<Data.length;i++) 
			if(Data[i].type==wType) arrForms[arrForms.length++]=Data[i];
		
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
		document.form_Total.key.focus();
	}
	
	//----Start----����Get/Post�����ύ��������----
	//*******ע�⣺Data���飬����������ô�js�ļ���Ҷ�����Ϊ�һ����Ǹ�Ҷ������Data.js�ļ�*******
	
	//�ۺ�����ת�Ӵ�
	function goSearch(fname){
		var form=getForm($("fname").value);
		var key=$("key").value;
		if(form.name=="form_XiaoBo_music"){searchMusicHere(key);return false;}
		if(form.method=="Get")	window.open(form.url+key);
		else goSearchPost(form);
		//document.form_Total.reset();
		return false;
	}
	
	//ר�Ŵ���Post�����ύ��������
	//*****************************�˺�����ʱ�����⣬�Ժ���!!!!!!!!!!!!!!!!!!!!!!!!!*****************************
	function goSearchPost(form){
		/*��û����÷���*/
	}
//----End----����Get/Post�����ύ��������----



//----Start----��Data�����в����ƶ����Ƶ����飬������----
	function getForm(fname){
		for(j=1;j<Data.length;j++){
			//window.status="�ж�λ����"+j;//���ѭ���жϵ�λ��
			if(Data[j].name==fname){//[0]�Ƕ�Ӧ�ı�������
				return Data[j];//�ҵ��ˣ��Ͱѱ�����
			}
		}
		//�����鵽û�д˱������Զ���������ҳ
		//this.location.href="SearchFace.htm";
		//���û�У���Ĭ��վ������
		return Data[0];
	}
//----End----��Data�����в����ƶ����Ƶ����飬������----



//----Start----վ����������----�Լ���������������-------
function searchMusicHere(words){
	if(words=="") window.open("SongsForSearch.htm");
	var arrSongsNum=new Array();//��¼�������������ı��
	var arrWords=words.split(" ").sort();//�ָ�������
	var isIt;
	for(var i=0;i<Songs.length;i++){
		isIt=true;
		for(j=0;j<arrWords.length;j++)//���ʵ���˶�ؼ��ֲ�ѯ
			if(Songs[i].toString().toLowerCase().indexOf(arrWords[j].toString().toLowerCase())<0)//ͳһ��ΪСдͳһ�Ƚ�
				isIt=false;//ֻҪ��һ�������ϣ����϶�Ϊ����
		if(isIt==true) arrSongsNum[arrSongsNum.length++]=i;
	}
	if(arrSongsNum.length==0){alert("�����û���׸�����������ؼ������԰ɣ�");return false;}
	else{
		var xx=arrSongsNum[0];for(var i=1;i<arrSongsNum.length;i++)	xx+="*"+arrSongsNum[i];
		window.open("SongsForSearch.htm?arrSongsNum="+xx);
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