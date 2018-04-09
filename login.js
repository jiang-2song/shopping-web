(function($){
	var $username=$('#txt').val();
	var $password=$('#pas').val();
	$('#btn').on('click',function(){
		$.ajax({
			type:"post",
			url:"../php/login.php",
			async:true,
			data:{
				name:$username,
				pass:$password
				
			},
			success:function(data){
				if(!data){
					alert('用户名或者密码错误');
				}else{
					location.href='index.html';
				}
			}
		});
	})
	
})(jQuery)
