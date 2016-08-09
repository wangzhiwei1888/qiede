$(function(){

	var bannerFn = function(){

		var i = 0;
		var $banner = $('.index_content_top');
		setInterval(function(){
			i = (i+1);
			console.log(i%3)
			$banner.find('.index_ad_dian').removeClass('action')
			if(i%3==0){
				$banner.css('background','url(images/index_ad.png) center 0 no-repeat')
				// $banner.css('opacity','1')	
				$('.index_ad_dian').eq(i%3).addClass('action'); 
			}
			if(i%3==1){

				$banner.css('background','url(images/index_ad01.png) center 0 no-repeat')
				// $banner.css('opacity','0.8')
				$banner.find('.index_ad_dian').eq(i%3).addClass('action');
			}
			if(i%3==2){

				$banner.css('background','url(images/index_ad02.png) center 0 no-repeat')
				// $banner.css('opacity','0.5')
				$banner.find('.index_ad_dian').eq(i%3).addClass('action');
			}
			
		},3000)

	}
	bannerFn();


	var scrollImg = function(){

		var $scorllImg = $('.scorllImg');

		var leftBtn = $scorllImg.find(".left-btn");
		var rightBtn = $scorllImg.find(".right-btn");
		var scrollImgC = $scorllImg.find('.scrollImg-c');
		var scrollUl = $scorllImg.find('.scroll-ul');
		var allDian = $scorllImg.find('.index_ad_dian');
		var width = 912;

		var i = 0;

		rightBtn.on('click',function(){

			i=i+1;
			console.log(i);

			if(i>=3){
				i=0;
			}

			scrollUl.animate({'margin-Left':-(width*i)+'px'})

			allDian.removeClass('action');
			allDian.eq(i).addClass('action');

		})

		leftBtn.on('click',function(){

			i=i-1;
			// console.log(i);

			if(i<0){
				i=2;
			}

			scrollUl.animate({'margin-Left':-(width*i)+'px'})
			allDian.removeClass('action');
			allDian.eq(i).addClass('action');
		})


		setInterval(function(){

			rightBtn.click()

		},3000)


	}
	scrollImg()


	var tabBox = function(){

		var $tabB = $('.index_box5');
		var $tab = $tabB.find('.tab1');

		$tab.on('click',function(){

			var index = $(this).index();
			console.log(index)
			$tab.removeClass('active');
			$(this).addClass('active');

			$('.tabBox').hide();
			$('.tabBox').eq(index).show();
		})


		var i=0;
		$('.tab1-BtnBox').find('.index_box5_shang').on('click',function(){
			var height = 330;
			i=i-1;
			// console.log(i);

			if(i<0){
				i=3;
			}

			$(this).parent().parent('.tabBox').find('.index_box5_list').animate({'margin-top':-(height*i)+'px'})
			$(this).parent().find('.index_box5_shu').removeClass('action')
			$(this).parent().find('.index_box5_shu').eq(i).addClass('action')
		})

		$('.tab1-BtnBox').find('.index_box5_xia').on('click',function(){

			var height = 330;
			i=i+1;
			console.log(i);

			if(i>=4){
				i=0;
			}

			$(this).parent().parent('.tabBox').find('.index_box5_list').animate({'margin-top':-(height*i)+'px'})
			$(this).parent().find('.index_box5_shu').removeClass('action')
			$(this).parent().find('.index_box5_shu').eq(i).addClass('action')
		})

		var j=0;
		$('.tab2-BtnBox').find('.index_box5_shang').on('click',function(){
			var height = 330;
			j=j-1;
			// console.log(i);

			if(j<0){
				j=3;
			}

			$(this).parent().parent('.tabBox').find('.index_box5_list').animate({'margin-top':-(height*j)+'px'})
			$(this).parent().find('.index_box5_shu').removeClass('action')
			$(this).parent().find('.index_box5_shu').eq(j).addClass('action')
		})

		$('.tab2-BtnBox').find('.index_box5_xia').on('click',function(){

			var height = 330;
			j=j+1;
			console.log(j);

			if(j>=4){
				j=0;
			}

			$(this).parent().parent('.tabBox').find('.index_box5_list').animate({'margin-top':-(height*j)+'px'})
			$(this).parent().find('.index_box5_shu').removeClass('action')
			$(this).parent().find('.index_box5_shu').eq(j).addClass('action')
		})


	}

	tabBox();

})
