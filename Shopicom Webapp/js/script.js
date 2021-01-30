/*
Practically this app needs to be hosted with a database and server, since this one is a prototype,
Local and server code are written in the same file.
Comments are added to distinguish between the two...
*/

//client side code//
function findshop()
{
	var invis= document.getElementById("log");	
	var vis= document.getElementById("shopfinal");	
	invis.style.display='none';
	vis.style.display='block';
	var loc = document.getElementById("locality").options.selectedIndex;
	var cat = document.getElementById('cat').options.selectedIndex;
}
function enljumb()
{
	
	var en= document.getElementById("jumb");
	en.style.backgroundImage = "url()"; 
	en.style.fontcolor=black;
}
function decjumb()
{
	
	var en= document.getElementById("jumb");
	en.style.backgroundImage = "url(img/divbg.jpg)"; 
	
}
function decajumb()
{
	
	var en= document.getElementById("jumb");
	en.style.backgroundImage = "url(img/divbg.jpg)"; 
	
}
function login()
{
	window.name=document.getElementById('name').value;
	var mkitinvis=document.getElementById("login");
	var mkitvis= document.getElementById("log");
	var visconv=document.getElementById('conv')
	var lgcr=document.getElementById('lg');
	lgcr.style.display='none';
	var mkitinvis=document.getElementById("login");
	var mkitvis= document.getElementById("log");
			setTimeout(continued,0001);
	
	}
function continued()
{	
	var mkitinvis=document.getElementById("login");
	var mkitvis= document.getElementById("log");
	var visconv=document.getElementById('conv')
	var lgcr=document.getElementById('lg');
	mkitinvis.style.display='none';
	mkitvis.style.display='block';
	visconv.style.display='block';		
}



//Server side Code//
function chkempty(){
	var ShopName = document.getElementById('inBusName').value;
	var ShopAdd1 = document.getElementById('inputAddress').value;
	
	var owner = document.getElementById('inOwName').value;
	var email = document.getElementById('inputEmail').value;
	var cat = document.getElementById('inputCat').options.selectedIndex;
	if(ShopName==""||ShopAdd1==""||owner==""||email==""){
	alert('Please fill all the details, to proceed!');
	}
   else{
   setTimeout(prototypenotice,0001);
   }
}
function prototypenotice(){
	
	var mkitinvis=document.getElementById("regform");
	var navdisappear = document.getElementById('navup');
	var mkitvis= document.getElementById("samplepg");
	mkitinvis.style.display='none';
	navdisappear.style.display='none';
	/*Practically this data would be added to the database and server script will fetch it to develop website */
	var ShopName = document.getElementById('inBusName').value; 
	var ShopAdd1 = document.getElementById('inputAddress').value;
	var ShopAdd2 = document.getElementById('inputAddress2').value;
	var owner = document.getElementById('inOwName').value;
	var email = document.getElementById('inputEmail').value;
	var cat = document.getElementById('inputCat').options.selectedIndex;
	document.getElementById('sampname').innerHTML += ShopName;
	if(cat==0){
		document.getElementById("sampcat").innerHTML+="General Store"
	}
	else if(cat==1){
		document.getElementById("sampcat").innerHTML+="Stationary and Educational materials."
	}
	else if(cat==2){
		document.getElementById("sampcat").innerHTML+="Medical and other health services"
	}
	else if(cat==3){
		document.getElementById("sampcat").innerHTML+="Agriculture and associated products"
	}
	document.getElementById("dispown").innerHTML+= owner;
	document.getElementById("disemail").innerHTML+= email;
	document.getElementById("sampadd").innerHTML+=ShopAdd1;
	document.getElementById("sampadd").innerHTML+="<br>"+ ShopAdd2;
   alert('ALERT: Please note that this Web App is just a prototype, no database is associated with this app, hence the data was processed locally!')
	mkitvis.style.display='block';

}
 
function gotosample()
{
	gd ="sample.html";
			redirecturl =gd;
        	document.location.href=redirecturl;
}

				
		function info()
		{
			gd ="Aboutus.html";
			redirecturl =gd;
        	document.location.href=redirecturl;
			
		}
		function returntogd()
		{
			gd ="index.html";
			redirecturl =gd;
        	document.location.href=redirecturl;
			
		}
		