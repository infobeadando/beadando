"use strict"; //Szigoru mod, ami szol, ha ostobasagot csinal az ember
var aside = document.createElement("aside"), //Letrehozunk egy "aside" elemet, ez az oldalhoz szorosan nem kapcsolodo tarolot jelent
	hours_span = document.createElement("span"), //Ebben jelenitjuk meg el az orat
	minutes_span = document.createElement("span"), //Ebben a percet
	seconds_span = document.createElement("span"), //Ebben a masodpercet
	hours = 11, //Ebben taroljuk el az orat
	minutes,  //Ebben a percet
	seconds; //Ebben a masodpercet
aside.appendChild(document.createTextNode("A jelenlegi id\u0151: "));
aside.appendChild(hours_span); //Az aside elembe beszurjuk az orakat jelzo elemet
aside.appendChild(document.createTextNode(":")); //Hozzarakunk egy kettospontot
aside.appendChild(minutes_span); //Beszurjuk a perceket jelzo elemet
aside.appendChild(document.createTextNode(":")); //Ujabb kettospont
aside.appendChild(seconds_span); //Masodperceket jelzo elem
document.body.appendChild(aside);
function update_time () { //Itt adjuk  meg, hogy mit csinal az update_time() utasitas
	let time = new Date(), //Aktualis datum-ido lekerese
		hours_now = time.getHours(), //Hany ora van
		minutes_now = time.getMinutes(), //Hany perc
		seconds_now = time.getSeconds(); //Hany masodperc
	if (hours_now != hours) { //Ha az ora kozben valtozott
		hours_span.textContent = hours_now; //Akkor megjelenitjuk az uj erteket
		hours = hours_now; //Es el is taroljuk azt
	}
	if (minutes_now != minutes) { //Ha a perc kozben valtozott
		minutes_span.textContent = minutes_now; //Akkor megjelenitjuk az uj erteket
		minutes = minutes_now; //Es el is taroljuk azt
	}
	if (seconds_now != seconds) { //Ha a masodperc kozben valtozott
		seconds_span.textContent = seconds_now; //Akkor megjelenitjuk az uj erteket
		seconds = seconds_now; //Es el is taroljuk azt
	}
	setTimeout(update_time, 1000); //1 masodperc mulva frissiteni kell az orat, tehat 1000 ezredmasodperc mulvara utemezzuk az ujboli elinditast
} //Utasitas-definicio vege
update_time(); //Elinditjuk a fuggvenyt
//Ez az egesz varazslat azzal, hogy kulon eltaroljuk az idot, es csak akkor modositunk, ha valtozott
//azert kell, mert a HTML dokumentum modositasa elegge szamitasigenyes muvelet
//es egy gyengebb szamitogep nem biztos, hogy orulne a masodpercenkkenti elvegzesuknek