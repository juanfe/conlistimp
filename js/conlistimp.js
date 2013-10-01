function loadContacts(fileName){
	var storage = navigator.getDeviceStorage('sdcard');
	var contactsHandle = storage.get(fileName);
	
	contactsHandle.onsuccess = function () {
		var reader = FileReader();  		
  		reader.readAsText(this.result,"utf-8");	
  		reader.onloadend = function() {
			var txt = this.result;
			$("<p>" + txt  + "</p>").appendTo("#fileContent");
      }
  	}
	
	contactsHandle.onerror = function () {
  			console.warn('Unable to get the file: ' + this.error);
	}		
}




$(document).ready(function(){
    $("#import").click(function(){    		    		
        loadContacts('00002.vcf');
    });
 });   
 