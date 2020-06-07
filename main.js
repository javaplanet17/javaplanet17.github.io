// show picture
function show(){
	if(window.innerWidth>1000){
		var menu = document.getElementById('inneralert');
		var background = document.getElementById('alert');

		var resume = document.getElementById('resume');
		var work = document.getElementById('work');
		var rimage = document.getElementById('resumeimage');

		menu.style.display = 'block';
		background.style.display = 'block';
		menu.style.height = "550px";
		menu.style.width = "35%";

		resume.style.display = 'block';
		rimage.style.height = '450px';
		work.style.display = 'none';
	}else{
		var menu = document.getElementById('inneralert');
		var background = document.getElementById('alert');

		var resume = document.getElementById('resume');
		var work = document.getElementById('work');

		menu.style.display = 'block';
		background.style.display = 'block';

		resume.style.display = 'none';
		work.style.display = 'block';
	}
}

function fullresume(){

}

function remove(){
	var menu = document.getElementById('inneralert');
	var background = document.getElementById('alert');
	menu.style.display = 'none';
	background.style.display = 'none';
}