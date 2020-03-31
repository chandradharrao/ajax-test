(function (global) {
	var ajaxutils = {}; //creating namespaces

	//create XMLHttpsRequest object is used to communicate data with the webserver
	function getRequestObject() {
		if (window.XMLHttpRequest){
		//checking if the browser global object has XMLHttpsRequest object
		return (new XMLHttpRequest());
	}
	else if(window.ActiveXobject) {
		//for old browsers that communicate with acrtive object
		return (new ActiveXobject("Microsoft.XMLHTTP"));
	}
	else {
		//if theres no request object to communicate with the server thn ajax aint supported in the browser
		global.alert("Ajax isnt support")
		return(null);
		}
	}	
//Makes an AJAX GET request to the URL to get Response
ajaxutils.MysendRequest = function(requestUrl,responseHandler) {
	var request = getRequestObject();
	request.onreadystatechange = function() {
		handleResponse(request,responseHandler);
	};
	request.open("GET",requestUrl,true);//if the connection with server is establoshed and response is exracted,onready value is changed and GETRequest function is invoked
	request.send(null);
	//when the respose is ready this calls the user defined 
	//response handler(call back function)
};
	function handleResponse(request,responsehandler) {
		console.log("handleresponse is loaded");
		console.log(request.readyState);
		console.log(request.status);

		if((request.readyState == 4)&&(request.status == 200)) {
			console.log("inside if");
			responseHandler(request);
			
		}
	}
	global.$ajaxutils = ajaxutils;
})(window);