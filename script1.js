document.addEventListener("DOMContentLoaded",function(event) {
	document.querySelector("button").addEventListener("click",function() {
		$ajaxutils.MysendRequest("data1.txt",function(request){
			console.log(request.responseText);
			var output = request.responseText;
			document.querySelector("#content").innerHTML = "<h2>HELLO"+output+" !";
		});
	});
	}
	);
