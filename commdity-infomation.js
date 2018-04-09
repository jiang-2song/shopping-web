(function($){
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/Japan%20market/php/pushdata.php",
		async:true,
		dataType:'json',
	}).done(function(m){
		var red=m;
		var arr3=red.pic4;
		//console.log(arr3);
		var $top=$('.market-logo a');
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
	}).done(function(data){
		var info=data;
		var arr=info.pic9;
		//console.log(arr3);
		var $down=$('.Carousel-picture ul li');
		for(var $i=0;$i<arr.length;$i++){
			var $suv=$('<img src='+arr[$i].url+' />');
			$down.eq($i).append($suv);
		}
	});
	
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/Japan%20market/php/pushdata.php",
		async:true,
		dataType:'json',
	}).done(function(data){
		var info=data;
		var arr=info.pic9;
		//console.log(arr3);
		var $down=$('.hot-shoes ul li a');
		for(var $i=0;$i<arr.length;$i++){
			var $suv=$('<img src='+arr[$i].url+' />');
			$down.eq($i).append($suv);
		}
	});
	
	
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/Japan%20market/php/pushdata.php",
		async:true,
		dataType:'json',
	}).done(function(data){
		var shin=data;
		var arr=shin.mac;
		//console.log(arr3);
		var $rock=$('.big-picture');
		for(var $i=0;$i<arr.length;$i++){
			var $bmw=$('<img src='+arr[$i].url+' />');
			$rock.append($bmw);
		}
	});
	
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/Japan%20market/php/pushdata.php",
		async:true,
		dataType:'json',
	}).done(function(japs){
		var island=japs;
		var arr=island.jap;
		//console.log(arr);
		var $ugg=$('.detailed-numbers a');
		for(var $i=0;$i<arr.length;$i++){
			var $slan=$('<img src='+arr[$i].url+' />');
			$slan.insertAfter($ugg);
		}
	});
	
	
	
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/Japan%20market/php/pushdata.php",
		async:true,
		dataType:'json',
	}).done(function(cans){
		var north=cans;
		var arr=north.candian;
		//console.log(arr);
		var $ugg=$('.left-images-down ul li');
		for(var $i=0;$i<arr.length;$i++){
			var $tay=$('<img src='+arr[$i].url+' />');
			$ugg.eq($i).append($tay);
		}
	});
	
	
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/Japan%20market/php/pushdata.php",
		async:true,
		dataType:'json',
	}).done(function(tha){
		var wes=tha;
		var arr=wes.thailan;
		//console.log(arr);
		var $ugg=$('.left-images-top ul li');
		for(var $i=0;$i<arr.length;$i++){
			var $kat=$('<img src='+arr[$i].url+' />');
			$ugg.eq($i).append($kat);
		}
	});
	
	/*$.ajax({
		type:"get",
		url:"http://127.0.0.1/Japan%20market/php/pushdata.php",
		async:true,
		dataType:'json',
	}).done(function(tha){
		var wes=tha;
		var arr=wes.thailan;
		console.log(arr);
		var $ugg=$('.bigpic p');
		for(var $i=0;$i<arr.length;$i++){
			var $kat=$('<img src='+arr[$i].url+' />');
			$ugg.eq($i).append($kat);
		
		}
	});*/
	
})(jQuery);
;;;
(function($){
	function Casousel(){
		this.right=$('.right-btn');
		this.left=$('.left-btn');
		this.box=$('.Carousel-picture');
		this.ulist=$('.Carousel-picture ul');
		this.pics=$('.Carousel-picture ul li');
		
	}
	Casousel.prototype.init=function(){
		var that=this;
		var num=0;
		var liwidth=this.pics.width();
		var timer=null;
		//console.log(liwidth);
		this.right.on('click',function(){
			num++;
			that.ulist.animate({
				left:-liwidth*num+'px',
			},function(){
				//alert(liwidth*(that.pics.length+1));
				if(parseInt(that.ulist.css('left'))==-liwidth*(that.pics.length-3)){
					that.ulist.animate({
						left:0,
					})
					num=0;
				}
			});
		});
		this.left.on('click',function(){
			//alert(num)
			num--;
			that.ulist.animate({
				left:-liwidth*num+'px',
			},function(){
				//alert(liwidth*(that.pics.length+1));
				if(parseInt(that.ulist.css('left'))>=0){
					that.ulist.animate({
						left:-liwidth*(that.pics.length-3),
					})
					num=that.pics.length-3;
				}
			});
		})
		timer=setInterval(function(){
			
			num++;
			that.ulist.animate({
				left:-liwidth*num+'px',
			},function(){
				//alert(liwidth*(that.pics.length+1));
				if(parseInt(that.ulist.css('left'))==-liwidth*(that.pics.length-3)){
					that.ulist.animate({
						left:0,
					})
					num=0;
				}
			});
			//alert(1);
			//console.log(-liwidth*num);
			//that.ulist.css('left',-liwidth*num+'px');
		},2000);
		this.box.on('mouseover',function(){
			clearInterval(timer);
		});
		this.box.on('mouseout',function(){
			timer=setInterval(function(){
			
			num++;
			that.ulist.animate({
				left:-liwidth*num+'px',
			},function(){
				//alert(liwidth*(that.pics.length+1));
				if(parseInt(that.ulist.css('left'))==-liwidth*(that.pics.length-3)){
					that.ulist.animate({
						left:0,
					})
					num=0;
				}
			});
			//alert(1);
			//console.log(-liwidth*num);
			//that.ulist.css('left',-liwidth*num+'px');
		},1000);
		})
		
	}
	new Casousel().init()
})(jQuery);;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(function(){
	//alert(1);
	var box=document.getElementById('fixed');
	var winheight=document.documentElement.clientHeight;
	//alert(winheight);
	window.onscroll=function(){
		var top=document.documentElement.scrollTop||document.body.scrollTop;
		if(top>winheight){
			box.style.display='block';
		}else{
			box.style.display='none';
		}
	}
	box.onclick=function(){
		var timer=setInterval(function(){
			var top=document.documentElement.scrollTop||document.body.scrollTop;
			if(top==0){
				clearInterval(timer);
			}else{
			var speed=Math.ceil(top/8);
			document.documentElement.scrollTop=document.body.scrollTop=top-speed;
			}
			
			
		},50)
	}
})();;;;;
;;;;;;;;;;;
(function($){
	function Nike(){
		this.sp=$('.left-images-down ul li');
		this.bf=$('.left-images-top ul li');
		
	}
	Nike.prototype.init=function(){
		var that=this;		
		
								
			
				this.bf.each(function(index,ele){
					that.sp.eq(index).on('mouseover',function(){
						that.bf.each(function(){
							that.bf.css('display','none');
						})
						that.bf.eq(index).css('display','block');
					});
					
				});
						
				
			
			
		
		
	}
	new Nike().init();
})(jQuery);;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;
(function($){
	var sf=$('.scale');
	var sp=$('.left-images-top ul');
	var bf=$('.bigpic p');
	var bp=$('.bigpic p img');
	sp.hover(function(){
		sf.css('visibility','visible');
		bf.eq(0).css('display','block');
		var wid=sp.width()*bf.width()/660;
		var hei=sp.height()*bf.height()/720;
		var scale=330/165;
		//console.log(scale);
		sf.width(wid);
		sf.height(hei);
		sp.on('mousemove',function(ev){			
			var $l=ev.pageX-sp.offset().left-sf.width()/2+'px';
			var $t=ev.pageY-sp.offset().top-sf.height()/2+'px';
			if(parseInt($l)<0){
				$l=0;
			}else if(parseInt($l)>=sp.width()-sf.width()){
			$l=sp.width()-sf.width();
			}
			if(parseInt($t)<0){
				$t=0;
			}else if(parseInt($t)>=sp.height()-sf.height()){
			$t=sp.height()-sf.height()
			}
		    sf.css('left',$l);
			sf.css('top',$t);
			console.log(scale*parseInt($l)+'px');
			bp.css('left',-scale*parseInt($l)+'px');
			bp.css('top',-scale*parseInt($t)+'px');
			
		})
	},function(){
		sf.css('visibility','hidden');
		bf.eq(0).css('display','none');
	})
	
		
		
		
	
	
})(jQuery)
;;;;;;;;;;;;;;;

