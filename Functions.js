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
	//ר�Ŵ���Get�����ύ��������
	function goSearchGet(fname){//fname��ָ����
		//����get�����ı���ֱ����ת���ӾͿ�����
		
		//[2]�Ƕ�Ӧ�ĵ�ַ//��׻���⣺this.location.href="www.xxx.com/k="+"������Ϣ"//ΪʲôҪ�����أ���ΪData����ĳ�ʼֵ�趨����
		//window.open(getForm(fname)[2]+Data[0]);
		this.location.href=getForm(fname)[2]+Data[0];
	}
	
	//ר�Ŵ���Post�����ύ��������
	//*****************************�˺�����ʱ�����⣬�Ժ���!!!!!!!!!!!!!!!!!!!!!!!!!*****************************
	function goSearchPost(fname){
		
		var form=getForm(fname);//form�õ�����
		document.write(form[2]);//[2]�Ƕ�Ӧ�����������
		alert(form[0]);alert(form[1]);alert(form[2]);alert(form[3]);
		//document.form[0].form[3].value=Data[0];//����keyֵ//[3]�Ƕ�Ӧ��keyName
		//alert(document.form[0].form[3].value);
		//document.form[0].target="_blank";
		//document.form[0].style.visibility="hidden";
		//document.form[0].submit();
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
		return Data[1];
	}
//----End----��Data�����в����ƶ����Ƶ����飬������----



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








