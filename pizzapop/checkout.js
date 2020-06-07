// get and parse the data of a parameter from GET method
	const querystring = window.location.search;
	const urlParams = new URLSearchParams(querystring);
	const gtotal = urlParams.get('total');
	const gtype = urlParams.get('type[0]');
	const gaddress = urlParams.get('address');
	//const gorder = urlParams.get('order');
	//const gquantity = urlParams.get('quantity');
	var type = document.getElementById('ordertype');
	var address = document.getElementById('orderaddress');
	var total = document.getElementById('ordertotal');

	var result = [];
	var number = querystring.split("&");
	for(var num = 0;num<number.length;num++){
		var pair = number[num].split('=');
		// get the value after = using number 1 
		var key = decodeURIComponent(pair[1]);
		result.push(key);
	}
	type.innerHTML = result[0];
	address.innerHTML = result[1];
	total.innerHTML = "$ "+result[2];
	var bottom = document.getElementById('bottomcontentboxes');
	for(var num = 2;num<result.length;num++){
		//console.log('yes');
		if((num % 2) == 1){
			//console.log('even'+num);
			bottom.innerHTML += `<li>
								<h2 style="margin-bottom: -5px;">`+result[num]+`</h2>
								<div class="middlecontent">
									<p class="left">Quantity: </p>
									<p class="right">`+result[num+1]+`</p>
								</div>
							</li>`;
		}
		
	}
	