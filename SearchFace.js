/*
	��ʽ
	//var form_BaiDu="http://www.baidu.com/s?wd=";
	//Data[dataIndex++]=new Array("form_BaiDu","Get",form_BaiDu,"�ٶ�","web");
	// [0]��fname������ [1]��Method�ύ���� [2]�Ǳ��ֵ [3]����ʾ���������� [4]�ǹ�������  [5]�Ǳ���keyName(for Post only)]
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
	
	//----Start----����Get/Post�����ύ��������----
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
	
	//ר�Ŵ���Post�����ύ��������
	//*****************************�˺�����ʱ�����⣬�Ժ���!!!!!!!!!!!!!!!!!!!!!!!!!*****************************
	function goSearchPost(form){
		/*��û����÷���*/
	}
//----End----����Get/Post�����ύ��������----



//----Start----��Data�����в����ƶ����Ƶ����飬������----
	function getForm(fname){
		for(j=2;j<Data.length;j++){
			//window.status="�ж�λ����"+j;//���ѭ���жϵ�λ��
			if(Data[j][0]==fname){//[0]�Ƕ�Ӧ�ı�������
				return Data[j];//�ҵ��ˣ��Ͱѱ����鷵��
			}
		}
		//�����鵽û�д˱������Զ���������ҳ
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