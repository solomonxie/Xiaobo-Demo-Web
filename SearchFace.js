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
	/*
	//��ʾ�Ѿ�ѡ���˵�������������,����������Ч��
	function showWP(id){
		$(id).style.pixelLeft=event.clientX 
		$(id).style.pixelTop=event.clientY 
		$(id).style.display="none"?"":"none";
		$(id).innerHTML=document.form_Total.fname.value;
	}
	*/