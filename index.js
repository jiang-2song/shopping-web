;;(function($){
	var $obox=$('.Carousel-big');
	var $oul=$('.Carousel-big ul');
	var $pics=$('.Carousel-big ul li');
	var $minpic=$('.Carousel-small ul li')
	var $document=$(document);
	var $body=$('body');
	var $timer=null;
	var $num=0;
	var $index=0;
	var $pindex;
	$pics.eq(0).css('opacity',1);
	//$minpic.eq(0).css('opacity',0.5);
	$timer=setInterval(function(){		
		$pics.eq($pindex).css('opacity',0);
		$pics.eq(0).css('opacity',1);		
		//$minpic.eq(0).css('opacity',0.5);
		$minpic.eq($pindex).css('opacity',1);
		$index++;
		$num=$index;
		if($num==$pics.length-1){
			$index=0;
			$pics.eq(0).css('opacity',0);
		}
		$pics.eq($num).css('opacity',1);
		
		$minpic.eq($num).css('opacity',0.5);
		$pindex=$index;
	},2000)
	
	$obox.on('mouseover',function(){
		clearInterval($timer);
	});
	$obox.on('mouseout',function(){
		$timer=setInterval(function(){
		$pics.eq(0).css('opacity',1)
		$pics.eq($pindex).css('opacity',0);
		$minpic.eq($pindex).css('opacity',1);
		$index++;
		$num=$index;
		if($num>$pics.length-1){
			$index=0;
			//$pics.eq($pindex).css('opacity',1);
			//$pics.eq(0).css('opacity',1)
		}
		$pics.eq($num).css('opacity',1);
		$minpic.eq($num).css('opacity',0.5);
		
		$pindex=$index;
	},2000)
	})
	
	
	
	
	
	
	
	
	
	
	
	var $secname=$('.right_list li');
	var $secnav=$('.second-nav');
	$secname.on('mouseover',function(){
		$secnav.css('display','block')
	});
	$secname.on('mouseout',function(){
		$secnav.css('display','none')
	});
	var $country=$('.china-right').eq(0);
	var $list=$('.all-country');
	$country.on('click',function(event){
		
		$list.css('display','block');
		event.stopImmediatePropagation();
	});
	$document.on('click',function(){
		$list.css('display','none');
	});
	
	
	
	/*var $search=$('.search-text');
	var $commdity=$('.search-name ul');
	function baidu(data){
		var arr=data.s;
		var inner='';
		for(var i=0;i<arr.length;i++){
			inner+='<li><a href="#">'+arr[i][0]+'</a></li>'
		}
		
		$commdity.html(inner);
	}
	$search.on('input',function(){
		var $cscript=$('<script></script>');
		$cscript.attr("src","https://api.suggest.search.rakuten.co.jp/suggest?cb=baidu&q="+$search.val()+"&cl=gsmallcn&rid=2043711737&sid=80&oe=utf-8&sl=pm_wop&h=10&_=1522043711532")
		//document.body.appendChild($cscript);
	    $body.append($cscript);
	})*/
})(jQuery);

;;;;(function(){
	var search=document.querySelector('.table input');
	var commdity=document.querySelector('.search-name ul');
	var txt=document.querySelectorAll('.search-name ul li');
	function baidu(data){
		var arr=data.result;
		var html='';
		for(var i=0;i<arr.length;i++){
			html+='<li><a href="#">'+arr[i][0]+'</a></li>';
		}
		commdity.innerHTML=html;
	}
	
	search.oninput=function(){
		var scsript=document.createElement('script');
		scsript.src='https://api.suggest.search.rakuten.co.jp/suggest?cb=baidu&q='+search.value+'&cl=gsmallcn&rid=2043711737&sid=80&oe=utf-8';
		document.body.appendChild(scsript);
	};
	search.onblur=function(){
		search.value='';
		commdity.style.display='none';
	};
	
	commdity.onclick=function(ev){
		var ev=ev||window.event;
	    var list=ev.target.nodeName;
	    alert(list.children.innerHTML)
	     if(list=='LI'){
	     	alert(1);
	     	search.value=list.childNodes.innerHTML;
	     }
	}
	window.baidu=baidu;
})();

;;;(function($){
	var $sport=$('.commodity-list ul li');
	$nike=$('.sport');
	/*$sport.on('mouseover',function(){
		
	})*/
	$sport.each(function(index,ele){
		$sport.eq(index).hover(function(){
		$nike.slideDown()
	},function(){
		$nike.slideUp()
	})
	});
	
	
})(jQuery);
;;;;(function($){
	$.ajax({
		type:"get",
		url:"../php/pushdata.php",
		async:true,
		dataType:'json',
	}).done(function(d){
		console.log(d);
		var record=d;
		var arr=record.pic1;
		//console.log(arr);
		var $imageone=$('.image-first');
		for($i=0;$i<arr.length;$i++){
			var $img=$('<img src='+arr[$i].url+' />');
		     $imageone.append($img);
		}
		
	});
	
})(jQuery);;
;;(function($){
	$.ajax({
		type:"get",
		url:'http://127.0.0.1/Japan%20market/php/pushdata.php',
		async:true,
		dataType:'json',
	}).done(function(d){
		var sass=d;
		var arr1=sass.pic2;
		//console.log(arr1.length);
		var $circle=$('.circle-img-top ul li a');
		
		for($i=0;$i<arr1.length;$i++){
			var $amg=$('<img src='+arr1[$i].url+' />');
			$circle.eq($i).append($amg);
		}
	
	})
})(jQuery);
;;;;(function($){
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/Japan%20market/php/pushdata.php",
		async:true,
		dataType:'json',
	}).done(function(d){
		var gulp=d;
		var arr2=gulp.pic3;
		//console.log(arr2);
		var $plate=$('.plate-one-top');
		for(var $i=0;$i<arr2.length;$i++){
			var $adv=$('<img src='+arr2[$i].url+' />');
			$plate.eq($i).append($adv);
		}
	});
	
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/Japan%20market/php/pushdata.php",
		async:true,
		dataType:'json',
	}).done(function(m){
		var red=m;
		var arr3=red.pic4;
		//console.log(arr3);
		var $top=$('.midder-top-first');
		for(var $i=0;$i<arr3.length;$i++){
			var $adv=$('<img src='+arr3[$i].url+' />');
			$top.append($adv);
		}
	});
	
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/Japan%20market/php/pushdata.php",
		async:true,
		dataType:'json',
	}).done(function(x){
		var down=x;
		var arr4=down.pic5;
		//console.log(arr4);
		var $vans=$('.circle-img-down ul li a');
		for(var $i=0;$i<arr4.length;$i++){
			var $adv=$('<img src='+arr4[$i].url+' />');
			$vans.eq($i).append($adv);
		}
	});
	
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/Japan%20market/php/pushdata.php",
		async:true,
		dataType:'json',
	}).done(function(y){
		var top=y;
		var arr5=top.pic6;
		//console.log(arr5);
		var $apk=$('.Carousel-small ul li');
		for(var $i=0;$i<arr5.length;$i++){
			var $adv=$('<img src='+arr5[$i].url+' />');
			$apk.eq($i).append($adv);
		}
	});
	
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/Japan%20market/php/pushdata.php",
		async:true,
		dataType:'json',
	}).done(function(num){
		var big=num;
		var arr6=big.pic7;
		//console.log(arr6);
		var $amk=$('.img-list ul li a');
		for(var $i=0;$i<arr6.length;$i++){
			var $adv=$('<img src='+arr6[$i].url+' />');
			$amk.eq($i).append($adv);
		}
	});
	
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/Japan%20market/php/pushdata.php",
		async:true,
		dataType:'json',
	}).done(function(ber){
		var sm=ber
		var arr7=sm.pic8;
		//console.log(arr6);
		var $rpk=$('.Carousel-big ul li a');
		for(var $i=0;$i<arr7.length;$i++){
			var $adv=$('<img src='+arr7[$i].url+' />');
			$rpk.eq($i).append($adv);
		}
	});
})(jQuery);
;;;(function($){
	function Tab(){
		this.btns=$('.everyday-dity ul li');
	}
	Tab.prototype.init=function(){
		var that=this;
		this.btns.each(function(index,ele){
			//that.index=this.index;
			
			that.btns.eq(index).on('click',function(){
				that.btns.each(function(){
					that.btns.css('background','white');;
				})
				that.btns.eq(index).css('background','red');
				//that.btns.css('background','white');
			});
		});
	}
	new Tab().init();
})(jQuery);;;
;;;;;
;;;;;;;(function($){
	function Casousel(){
		this.sin=$('.img-list ul li');
		this.ul=$('.img-list ul');
		this.right=$('.down-arrow-right');
		this.left=$('.down-arrow-left');
		//console.log(this.sin.width());
	}
	Casousel.prototype.sec=function(){
		var that=this;	
			var liwidth=that.sin.width()+20;
			var num=6;
			that.right.on('click',function(){
				
				that.ul.animate({
					left:-liwidth*(num)+'px'
				})
			});
			this.left.on('click',function(){
				that.ul.animate({
					left:0
				})
			})
		
	}
	new Casousel().sec();
})(jQuery);;

;;;(function($){
	$('.type-sony').hover(function(){
		var $img=$(this).find('img');
		$img.stop(true,true).animate({
			left:'-64px',
			width:0
		},function(){
			$img.stop(true,true).animate({
			left:0,
			width:'128px',
			})
			
			
		})
	})
})(jQuery)
