const info = document.querySelector('#info');
info.onclick = function(){
	const desc = document.querySelector('#desc');
	const cont = document.querySelector('#container');
	if(desc.style.display == 'none' && desc.style.visibility == 'hidden'){
		info.innerHTML = '&times;';
		desc.style.display = 'inherit';
		desc.style.visibility = 'visible';

		cont.style.display = 'none';
		cont.style.visibility = 'hidden';
	}
	else{
		info.innerHTML = '&equiv;';
		desc.style.display = 'none';
		desc.style.visibility = 'hidden';

		cont.style.display = 'inherit';
		cont.style.visibility = 'visible';
	}
};
