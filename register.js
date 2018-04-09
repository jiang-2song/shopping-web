(function($){
	var $num=$('.num');
	var $nom=$('.nom');
	var $npt=$('input');
	var $min=$('.num i');
	var $spn=$('.changing')
	//console.log($spn)
	var $arr=['您的账户名和登录名','建议至少使用两种字符组合','请确认您的账户名和登录名','建议使用常用手机','请输入验证码'];
	
	/*$npt.each(function(index,ele){
		$npt.eq(index).on('focus',function(){		
			//console.log($npt.eq(index));			
			$npt.eq(index).val('');
		});
		$npt.eq(index).on('blur',function(){
			$npt.eq(index).val($arr[index]);
		})
	});*/
	//console.log($npt.eq(0).val());
	$npt.eq(0).on('focus',function(){
		$(this).attr('value','')
		$nom.eq(0).html('建议使用字母，数字和符号及两种以上的组合，6-20个字符');
	});
	$npt.eq(0).on('blur',function(){
		$nom.eq(0).html('');
		var $reg=/^[\w-\u4e00-\u9fa5][\w]{4,20}$/g;
		var $newreg=/^\d{4,20}$/g;
		var username=$npt.eq(0).val();
		var pass=$npt.eq(1).val();
		var telphone=$npt.eq(3).val();
		var bstop=true;
		$.ajax({
			type:"post",
			url:"../php/register.php",
			async:true,
			data:{
				name:username,
				psword:pass,
				tel:telphone
			},
			success:function(data){
				if(!data){
					$nom.eq(0).html('√');
					bstop=false;
				}else{
					$nom.eq(0).html('该用户名已存在');
					bstop=true
				}
			}
		});
		if($npt.eq(0).val()==''){
			$npt.eq(0).attr('value','用户名不能为空');
		}
		else if($newreg.test($npt.eq(0).val())){
			//alert('不支持纯数字的用户名');
			//$nom.eq(0).html('加油');0                          
			$nom.eq(0).html('不支持纯数字的用户名');
		}else if($reg.test($npt.eq(0).val())){
			$min.eq(0).html('√');			
		}else{
			$min.eq(0).html('格式错误')
		}
		//$nom.eq(0).html('');
	});
	
	
	$npt.eq(1).on('focus',function(){
		$(this).attr('value','')
		$nom.eq(1).html($arr[1]);
	});
	$npt.eq(1).on('blur',function(){	
		$nom.eq(1).html('');
		if($npt.eq(1).val()!=''){
			var $reg=/^[\w@]{6,20}$/g;
			if($reg.test($npt.eq(1).val())){
				$min.eq(1).html('√');
			}else{
				$min.eq(1).html('格式错误')
			}
		}
	});
	
	
	
	
	$npt.eq(2).on('focus',function(){
		$(this).attr('value','')
		$nom.eq(2).html($arr[2]);
		
	});
	$npt.eq(2).on('blur',function(){
		$nom.eq(2).html('');
		if($npt.eq(2).val()==$npt.eq(1).val()){
			$min.eq(2).html('√');
		}else{
			$min.eq(2).html('');
			$nom.eq(2).html('请重新确认密码');
		}
		
	});;
	
	
	
	$npt.eq(3).on('focus',function(){
		$(this).attr('value','')
		$nom.eq(3).html('请输入常用手机号');
	});
	$npt.eq(3).on('blur',function(){
		$nom.eq(3).html('');
		var $reg=/^[1][3|5|8|7]\d{9}$/;
		if($reg.test($npt.eq(3).val())){
			$min.eq(3).html('√');
		}else{
			$min.eq(3).html('格式错误')
		}
		if($npt.eq(3).val()==''){
			$min.eq(3).html('')
		}
		
	});;;
	
	
	$npt.eq(4).on('focus',function(){
		$(this).attr('value','')
		$nom.eq(4).html('请输入验证码');
		
	});
	$npt.eq(4).on('blur',function(){
		$nom.eq(4).html('');
	
	})
		$spn.on('click',function(){
			console.log(1);
			var $str='';
			var $newarr=[];
			for($i=48;$i<57;$i++){
				$newarr.push(String.fromCharCode($i));
			}
			for($i=0;$i<4;$i++){
				var $random=parseInt(Math.random()*$newarr.length);
				$str+=$random;
			}
			$spn.html($str);
			$spn.css('color','white');
			$spn.css('font-size','24px')
		});
		
		
})(jQuery)
