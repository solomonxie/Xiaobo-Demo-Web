//----Start----����� ����/��ʾ----
	function $(s){
		return document.getElementById(s);
	} 
	function swap(s,a,b,c){
		$(s)[a]=$(s)[a]==b?c:b;//�٣�����
	}
	function hide(s){
		$(s).style.display=$(s).style.display=="none"?"":"none";
	}
	
//----End----����� ����/��ʾ----



//----Start----����Get/Post�����ύ��������----
	//*******ע�⣺Data���飬����������ô�js�ļ���Ҷ�����Ϊ�һ����Ǹ�Ҷ������Data.js�ļ�*******
	
	//�ۺ�����ת�Ӵ�
	function goSearch(fname){
		var form=getForm(document.form_Total.fname.value);
		var key=document.form_Total.key.value;
		if(form[0]=="form_XiaoBo_music"){searchMusicHere(key);return false;}
		if(form[1]=="Get")	window.open(form[2]+key);
		else goSearchPost(form);
		document.form_Total.reset();
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



//----Start----վ����������----
function searchMusicHere(words){
	if(words=="") this.location.href="SongList.htm";
	var arrSongs=new Array();var aidx=0;
	var arrWords=words.split(" ").sort();//�ָ�������
	var i;
	for(i=0;i<Songs.length;i++)
		for(j=0;j<arrWords.length;j++)//���ʵ���˶���ʲ�ѯ
		if(Songs[i].toString().indexOf(arrWords[j])>=0) arrSongs[aidx++]=Songs[i];
	if(arrSongs.length==0){alert("�Բ���С�����û����Ҫ�ҵĸ��");return false;}
	else window.open("SongList.htm#"+arrSongs[0][1]);//��������arrSongs����һ��λ�û�û�ж���
}



//----End----վ����������---

//----Start----������ַ���õ�����----
		//���ñ�������
		var url=this.location.href;//��ȡ���ñ�js�ļ���Ҷ���ַ
		
		function getKey(keyName,tpname){
			//���Խ�ȡ�ַ����������û�д���������#############################################
			//test//document.form_All.Show.value=url.substring(url.indexOf("Search.htm")+10,url.length);
			var paramList;//�����б�
			
			var start=url.indexOf(tpname)+tpname.length;//��ȡ��ȡ��startλ��.+��tpname��ΪҪ�õ��������ȥ����ַ���
			var end=url.length;//��ȡ��ȡ��endλ��
			paramList=url.substring(start,end);
			
			if(paramList=="" || paramList.substring(0,1)!="?"){return "";}//��飺û�в������߲������ϸ���ֹͣ
			
			//�õ����������б���key=С��&type=web&id=002��,�Ұ�?ȥ��le#############################################
			paramList=paramList.substring(1,paramList.length);
			
			
			
			//-----------�·���########################################################
			//.split("&")�����������"name=a&type=b"�ͻ�ֽ����������"name=a"��"type=b"
			//���ص���һ������
			var arrParams=paramList.split("&"); // ����url�и�Ϊ��� name/value��
			
			if(arrParams==""){return "";}
			
			for(var i=0;i<arrParams.length;i++){ // ���� �������飬����ÿ��������
			var arrKey=arrParams[i].split("=");
			if(arrKey[0]==keyName)//[0]����name
				return arrKey[1];//[1]����value
			}
			return "";
			
			
			//##################################################################
			

			/*//���ʹ�õķ���
			
			//���Խ�ȡ�ַ����������û�д���������#############################################
			//test//document.form_All.Show.value=url.substring(url.indexOf("Search.htm")+10,url.length);
			var paramList;//�����б�
			
			var start=url.indexOf(tpname)+tpname.length;//��ȡ��ȡ��startλ��.+��tpname��ΪҪ�õ��������ȥ����ַ���
			var end=url.length;//��ȡ��ȡ��endλ��
			paramList=url.substring(start,end);
			
			if(paramList=="" || paramList.substring(0,1)!="?"){return "";}//��飺û�в������߲������ϸ���ֹͣ
			
			//�õ����������б���key=С��&type=web&id=002��,�Ұ�?ȥ��le#############################################
			paramList=paramList.substring(1,paramList.length);
			
			//��ʼ��ȡָ���Ĳ���ֵ#############################################
			var key;
			var startKey=paramList.indexOf(keyName+"=");
			var beforeKey=paramList.substring(startKey-1,startKey);
			if(startKey<0 || beforeKey!="&"  && beforeKey!=""){return "";}//��飺���û��keyName��������ֹͣ��
			var c=paramList.indexOf("&",startKey+keyName.length+1);//��keyֵ֮��ʼ��&
			if(c>0){//���keyֵ֮����&
				key=paramList.substring(startKey+keyName.length+1,c);//��startKey+4����ָҪ��key=��֮���λ�ã�
			}else if(c<0){//���keyֵ֮��Ϊ��(�Ҳ���&��Ψһ�赥���������)
				key=paramList.substring(startKey+keyName.length+1,paramList.length);
			}
			
			return key;
			
			//��׻����ܣ���ǰ�᣺������Ϊkey��type��
			//http://��������.htm �β�Ҫ
			//http://��������.htm? �β�Ҫ
			//http://��������.htm?*&%^-(*) �β�Ҫ
			//http://��������.htm?a=324b=fwfei �β�Ҫ
			//http://��������.htm?akey=weofij �β�Ҫ
			//http://��������.htm?type=aa&key= �β�Ҫ
			//http://��������.htm?key=aa*type=bb �β�Ҫ
			*/
		}
//----End----������ַ���õ�����----








