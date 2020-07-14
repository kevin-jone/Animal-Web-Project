$.ajax({
	url:"head.html",
	type:"get",
	success:function(result){
		console.log(result);
		$(result).replaceAll("#header");
		$(`<link rel="stylesheet" type="text/css" href="css/head.css" />`).appendTo("head");
	}
})
