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

			//.split("&")�����������"name=a&type=b"�ͻ�ֽ����������"name=a"��"type=b"
			//���ص���һ������
			var arrParams=paramList.split("&"); // ����url�и�Ϊ��� name/value��
			
			if(arrParams==""){return "";}
			
			for(var i=0;i<arrParams.length;i++){ // ���� �������飬����ÿ��������
			var arrKey=arrParams[i].split("#")[0].split("=");
			if(arrKey[0]==keyName)//[0]����name
				return arrKey[1];//[1]����value
			}
			
			return "";

		}
//----End----������ַ���õ�����----








