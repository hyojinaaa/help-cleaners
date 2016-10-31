
var video1 = document.querySelector('#video1');
var dialog = document.querySelector('.dialog');

var count = 0;
console.log(count);

localStorage.getItem("count");

	video1.onended = function(e) {
     	count++;
     	console.log(count);

     	$(document).ready(function() {
    	$(".dialog").dialog();
		});
     	
    };

    if( count == 1 ){
    	console.log('one view');
    }
