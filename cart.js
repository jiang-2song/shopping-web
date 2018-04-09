(function($){
	var picsid=[];
	var comnum=[];
	function getcookievalue(){
		if(getCookie('cartsid')){
			picsid=getCookie('cartsid').split(',');		
		}
		if(getCookie('cartnum')){
			comnum=getCookie('cartnum').split(',')
		}
	};
	
	$('.shopping-add-cart').find('a').on('click',function(){
		
	})
})(jQuery)
