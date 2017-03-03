function telebe(ad,soyad,bal){
	this.ad = ad;
	this.soyad = soyad;
	this.bal = bal;
}

var vezir = new telebe("Vazirxan","Tarverdiyev",3);
var nicat = new telebe("Nicat","Mardanli",4);
var celil = new telebe("Celil","Dadasov",9);
var sabir = new telebe("Sabir","Memmedli",6);
var cefer = new telebe("Cefer","Cabbarli",5);
var xeyal = new telebe("Xeyal","Yediyarov",2);
var isi = new telebe("Ismayil","Rahimli",7);
var hesen = new telebe("Hesen","Tagiyev",0);
var lale = new telebe("Lale","Rustamli",2);
var emrah = new telebe("Emrah","Ismayilzade",10);


var arr=[vezir,nicat,celil,sabir,cefer,xeyal,isi,hesen,lale,emrah];

document.write("<table>");
	document.write("<tr>");
		document.write("<th> Ad </th>");
		document.write("<th> Soyad</th>");
		document.write("<th> Bal </th>");
	document.write("</tr>");

	for (var i = 0; i < arr.length; i++) {
		document.write("<tr>");
			document.write('<td class="ad">'+arr[i].ad+"</td>");
			document.write('<td class="soyad">'+arr[i].soyad+"</td>");
			document.write('<td class="bal">'+arr[i].bal+"</td>");
		document.write("</tr>");
	}
document.write("</table>");

document.write('<input type="submit" name="Zeif" value="Zeif" onclick="zeifler()">');
document.write('<input type="submit" name="Zeif" value="Orta" onclick="ortalar()">');	
document.write('<input type="submit" name="Zeif" value="Yuksek" onclick="yuksekler()">');
	

function general(g){
	for(i = 0; i < g.length; i++){
		g[i].style.borderCollapse="collapse";
		g[i].style.border="1px solid black";
		g[i].style.width="300px";
		g[i].style.textAlign="center";
     }
}

function thStyle(th){
	for(i = 0; i < th.length; i++){
		th[i].style.backgroundColor="yellow";
     }
}

thStyle(document.getElementsByTagName("th"));
general(document.getElementsByTagName("th"));

general(document.getElementsByTagName("td"));

function zeifler(){
	for(i=0; i<document.getElementsByClassName("bal").length;i++){
		if(document.getElementsByClassName("bal")[i].innerHTML < 6){

			document.getElementsByClassName("ad")[i].style.backgroundColor="red";
			document.getElementsByClassName("soyad")[i].style.backgroundColor="red";
			document.getElementsByClassName("bal")[i].style.backgroundColor="red";
		
		}
	}
};

function ortalar(){
	for(i=0; i<document.getElementsByClassName("bal").length;i++){
		if(document.getElementsByClassName("bal")[i].innerHTML > 5 && document.getElementsByClassName("bal")[i].innerHTML < 9){

			document.getElementsByClassName("ad")[i].style.backgroundColor="aqua";
			document.getElementsByClassName("soyad")[i].style.backgroundColor="aqua";
			document.getElementsByClassName("bal")[i].style.backgroundColor="aqua";
		
		}
	}
};

function yuksekler(){
	for(i=0; i<document.getElementsByClassName("bal").length;i++){
		if(document.getElementsByClassName("bal")[i].innerHTML > 8){

			document.getElementsByClassName("ad")[i].style.backgroundColor="green";
			document.getElementsByClassName("soyad")[i].style.backgroundColor="green";
			document.getElementsByClassName("bal")[i].style.backgroundColor="green";
		
		}
	}
};	