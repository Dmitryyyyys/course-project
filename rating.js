const ratingItemsList = document.querySelectorAll('.ratingItem');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);


ratingItemsArray.forEach(item =>
	item.addEventListener('click', () =>
		item.parentNode.dataset.totalValue = item.dataset.itemValue
	)
);

// if($(window).scrollTop()>=0){
// 	$('#main-theme-picture-div').animate({
// 		opacity: 1
// }, 1000)
// }
// if($(window).scrollTop()>=0){
// 	$('#mainSidebar').animate({
// 		opacity: 1
// }, 1500)
// }
// if($(window).scrollTop()>=0){
// 	$('header').animate({
// 		opacity: 1
// }, 500)
// }
// $(window).scroll(function(){
// 	if($(window).scrollTop()>330){
// 		$('#contactField').animate({
// 			opacity: 1
// 	}, 1000)
// 	}
// 	if($(window).scrollTop()>850){
// 		$('#ourSpecialist').animate({
// 			opacity: 1
// 	}, 1000)
// 	}
// 	if($(window).scrollTop()>1000){
// 		$('#footer').animate({
// 			opacity: 1
// 	}, 1000)
// 	}
// })



function displayer1() {
	lesser();
	$('#headerContent1').css('display', 'flex');
	$('#headerContent1').animate({
		height: window.innerWidth > 500 ? "400px" : "750px",
	}, 500);
	$('#arrow1').css('display', 'block');
}

function displayer2() {
	lesser();
	$('#headerContent2').css('display', 'flex');
	$('#headerContent2').animate({
		height: window.innerWidth > 500 ? "400px" : "800px",
	}, 500);
	$('#arrow2').css('display', 'block');
}

function displayer3() {
	lesser();
	$('#headerContent3').css('display', 'flex');
	$('#headerContent3').animate({
		height: window.innerWidth > 500 ? "400px" : "750px",
	}, 500);
	$('#arrow3').css('display', 'block');

}

function displayer4() {
	lesser();
	$('#headerContent4').css('display', 'flex');
	$('#headerContent4').animate({
		height: window.innerWidth > 500 ? "400px" : "800px",
	}, 500);
	$('#arrow4').css('display', 'block');

}

function displayer5() {
	lesser();
	$('#headerContent5').css('display', 'flex');
	$('#headerContent5').animate({
		height: window.innerWidth > 500 ? "400px" : "750px",
	}, 500);
	$('#arrow5').css('display', 'block');

}

function lesser(){
	$('.headerContent').css('display', 'none');
	$('.arrow').css('display', 'none');
}

function lesser1(){
	$('#headerContent1').css('display', 'none');
	$('#arrow1').css('display', 'none');
}

function noneplayer1() {
	setTimeout(lesser1, 100);
	$('#headerContent1').animate({
		height: "0px",
	}, 150);
}

function lesser2(){
	$('#headerContent2').css('display', 'none');
	$('#arrow2').css('display', 'none');
}

function noneplayer2() {
	setTimeout(lesser2, 100);
	$('#headerContent2').animate({
		height: "0px",
	}, 150);
}

function lesser3(){
	$('#headerContent3').css('display', 'none');
	$('#arrow3').css('display', 'none');
}

function noneplayer3() {
	setTimeout(lesser3,100);
	$('#headerContent3').animate({
		height: "0px",
	}, 150);
}

function lesser4(){
	$('#headerContent4').css('display', 'none');
	$('#arrow4').css('display', 'none');
}

function noneplayer4() {
	setTimeout(lesser4, 100);
	$('#headerContent4').animate({
		height: "0px",
	}, 150);
}

function lesser5(){
	$('#headerContent5').css('display', 'none');
	$('#arrow5').css('display', 'none');
}

function noneplayer5() {
	setTimeout(lesser5, 100);
	$('#headerContent5').animate({
		height: "0px",
	}, 150);
}



		
	