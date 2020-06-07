function showcart(){
	var right = document.getElementById('right');
	var back = document.getElementById('background');
	back.style.display = 'block';
	right.style.display = 'block';
	//alert('nice');
}

function hidecart(){
	var right = document.getElementById('right');
	var back = document.getElementById('background');
	back.style.display = 'none';
	right.style.display = 'none';
}

function resize(){
	//console.log(screen.width);
	//console.log(window.innerWidth);
	if(window.innerWidth>700){
		var right = document.getElementById('right');
		right.style.display = 'block';
	}else{
		var right = document.getElementById('right');
		var back = document.getElementById('background');
		right.style.display = 'none';
		back.style.display = 'none';
	}
}

function ordertype(value){
	var target = document.getElementById('ordertypeboxes');
	var image1 = document.getElementById('typeboximg1');
	var image2 = document.getElementById('typeboximg2');
	if(value=='delivery'){
		image1.src = "img/deliverytruck.png";
		image2.src = "img/pickupbaggrey.png";
		target.innerHTML = `
			<h2 id="orderingtype">Delivery</h2>
			<b>Address:</b><br>
			<input id="orderingaddress" class="addressinput" placeholder="Place your address here">
			<p>Cart:</p>
		`;
	}else if(value='pickup'){
		image1.src = "img/deliverytruckgrey.png";
		image2.src = "img/pickupbag.png";
		target.innerHTML = `
			<h2>Pickup at:</h2>
			<b>Address:</b>
			<p>2199 King Street,VA 22134-31551 United States</p>
			<p>Cart:</p>
		`;
	}
}

// default name and prices
// total
var totalfoodlist = ['large pizza','medium pizza','chicken wing','family meal','french fries','cheese stick','nacho chip','coke','pepsi','dr pepper','sprite','diet coke','mountain dew','ice tea'];
var totalpiclist = ['largepizza','medpizza','chicken','meal','fries','cheesetick','nacho','coke','pepsi','drpepper','sprite','cokediet','mountaindew','tea'];
var totalpricelist = [10,7,6,14,5,5,5,4,4,4,4,4,4,4];
// separate
var foodlist = ['large pizza','medium pizza','chicken wing','family meal'];
var sidelist = ['french fries','cheese stick','nacho chip'];
var drinklist = ['coke','pepsi','dr pepper','sprite','diet coke','mountain dew','ice tea'];

var foodpiclist = ['largepizza','medpizza','chicken','meal'];
var sidepiclist = ['fries','cheesetick','nacho'];
var drinkpiclist = ['coke','pepsi','drpepper','sprite','cokediet','mountaindew','tea'];

var foodlistprice = [10,7,6,14];
var sidelistprice = [5,5,5];
var drinklistprice = [4,4,4,4,4,4,4];
// list of the objects in cart
var cartlist = [];
var cartprice = [];
var cartquantity = [];
var cartpic = [];
var carttotal = 0;
var cartnumber = 0;
function edibletype(value){
	var target = document.getElementById('edibleboxes');
	var button1 = document.getElementById('ediblebutton1');
	var button2 = document.getElementById('ediblebutton2');
	var button3 = document.getElementById('ediblebutton3');
	target.innerHTML = "";
	if(value=='food'){
		button1.style.color = "lime";
		button2.style.color = "grey";
		button3.style.color = "grey";
		for(var list=0;list<foodlist.length;list++){
			target.innerHTML += `
				<li class="inline">
						<div class="ediblebox">
							<img src="img/`+foodpiclist[list]+`.png" width="100px" height="100px">
							<h2>`+foodlist[list]+`</h2>
							
							<p>Signature Italian style pizza in large size</p>
							<h2>$ `+foodlistprice[list]+`</h2>
							<button onclick="cart('`+foodlist[list]+`','add');" class="cartbutton">Add to cart</button>
						</div>
					</li>
			`;
		}
	}else if(value=='side'){
		button1.style.color = "grey";
		button2.style.color = "lime";
		button3.style.color = "grey";
		for(var list=0;list<sidelist.length;list++){
			var description = "";
			if(list==0){
				description = "1 pound of French fries";
			}else if(list==1){
				description = "8 piece of cheesetick";
			}else{
				description = "Large Nacho cheese";
			}
			target.innerHTML += `
				<li class="inline">
						<div class="ediblebox">
							<img src="img/`+sidepiclist[list]+`.png" width="100px" height="100px">
							<h2>`+sidelist[list]+`</h2>
							<p>`+description+`</p>
							<h2>$ `+sidelistprice[list]+`</h2>
							<button onclick="cart('`+sidelist[list]+`','add');" class="cartbutton">Add to cart</button>
						</div>
					</li>
			`;
		}
	}else if(value=='drink'){
		button1.style.color = "grey";
		button2.style.color = "grey";
		button3.style.color = "lime";
		for(var list=0;list<drinklist.length;list++){
			target.innerHTML += `
				<li class="inline">
						<div class="ediblebox">
							<img src="img/`+drinkpiclist[list]+`.png" width="100px" height="100px">
							<h2>`+drinklist[list]+`</h2>
							
							<p>1 Liter Size Bottle Drink</p>
							<h2>$ `+drinklistprice[list]+`</h2>
							<button onclick="cart('`+drinklist[list]+`','add');" class="cartbutton">Add to cart</button>
						</div>
					</li>
			`;
		}
	}
}

function cart(value,type){
	var boxes = document.getElementById('cartboxes');
	var duplicate = cartlist.includes(value);
	var duplicatelocation = cartlist.indexOf(value);

	var listlocation = totalfoodlist.indexOf(value);
	var totalcount = document.getElementById('totalcount');
	// show number of items in the cart
	var indicator = document.getElementById('indicator');
	// add to php session
	if(type=='add'){
		if(duplicate==true){
			// add to quantity and add price
			cartprice[duplicatelocation] += totalpricelist[listlocation];
			cartquantity[duplicatelocation] += 1;
		}else{
			// add to list
			cartlist.push(value);
			cartprice.push(totalpricelist[listlocation]);
			cartquantity.push(1);
			cartpic.push(totalpiclist[listlocation]);
		}
	}else if(type='delete'){
		cartprice[duplicatelocation] -= totalpricelist[listlocation];
		cartquantity[duplicatelocation] -= 1;
	}
	// remove from list
	if(cartquantity[duplicatelocation]==0){
		cartlist.splice(duplicatelocation,1);
		cartprice.splice(duplicatelocation,1);
		cartquantity.splice(duplicatelocation,1);
		cartpic.splice(duplicatelocation,1);
	}
	// add to list
	boxes.innerHTML = "";
	for(var list=0;list<cartlist.length;list++){
		boxes.innerHTML += `
			<li id='cartbox' class='cartbox'>
				<div class='cartboxleft'>
					<img src='img/`+cartpic[list]+`.png' width='60px' height='60px'>
				</div>
				<div class='cartboxmid'>
					<h4 style='margin-top:-0px;'>`+cartlist[list]+`</h4>
					<ul style="margin-top:-10px;">
						<li class='inline'>Quantity: </li>
						<li class='inline'>`+cartquantity[list]+`</li>
					</ul>
					<ul style="margin-top:5px;">
						<li class='inline'>Price: </li>
						<li class='inline'>`+cartprice[list]+`</li>
					</ul>
				</div>
				<div class='cartboxright'>
					<button class="deletebutton" onclick="cart('`+cartlist[list]+`','delete');">X</button>
				</div>
			</li>
		`;
	}
	//if list empty
	if(cartlist==0){
		boxes.innerHTML = `
			<center>
				<img style="margin-top: 50px;" src="img/cart.png" width="100px" height="100px">
				<h4>Fill me with food i am hungry</h4>
			</center>
		`;
	}

	// carttotal = cartprice.reduce((a,b) => a + b);
	// cartnumber = cartquantity.reduce((a,b) => a + b);
	
	carttotal = summing(cartprice);
	cartnumber = summing(cartquantity);
	console.log();
	if(cartlist==0){
		carttotal = 0;
		cartnumber = 0;
		totalcount.innerHTML = "Total: $ 0";
		indicator.style.display = 'none';	
		indicator.innerHTML = "0";
	}else{
		totalcount.innerHTML = `Total: $ `+carttotal+` `;
		indicator.style.display = 'block';
		indicator.style.marginTop = '15px';
		indicator.style.marginRight = '7px';
		indicator.innerHTML = cartnumber;
	}
	//console.log(cartquantity);
	//console.log(cartnumber);
}

function summing(array){
	var total = 0;
	for(var ar=0;ar<array.length;ar++){
		total +=array[ar];
	}
	return total;
}
function checkout(){
	//var b = document.getElementById('something').value;
	//var url = 'checkout?total='+encodeURIComponent(b);
	var types = document.getElementById('orderingtype').innerHTML;
	var address = document.getElementById('orderingaddress').value;
	console.log(types);
	var content = "";
	for(var num =0;num<cartlist.length;num++){
		content += "&name"+num+"="+cartlist[num]+"&number"+num+"="+cartquantity[num]+"";
	}
	window.location.href = "checkout?total="+types+"&address="+address+"&total="+carttotal+content;
}