let minute=0;
let second=0;
let mil=0;
let timer;
let value=0;
let name;
function j(){
	let y=document.getElementById('TIME');
	let ee=document.getElementById("name");
	name=ee.value;
	timer = setInterval(() => {
		if(second===60){
			minute++;
			second=0;
		}
		if (mil==100) {
			mil=0;
			second++;
		}
		if (second<10) {
			if (mil<10) {
				y.innerHTML = `Time: 0${minute} min 0${second} sec 00${mil++} mil`;
			}else  {
				y.innerHTML = `Time: 0${minute} min 0${second} sec 0${mil++} mil`;
			}
		}else{
			if (mil<10) {
				y.innerHTML = `Time: 0${minute} min ${second} sec 00${mil++} mil`;
			}else  {
				y.innerHTML = `Time: 0${minute} min ${second} sec 0${mil++} mil`;
			}
		}
		
	}, 10);
}
function stugel(elements){
	let value1=Math.floor(Math.random() * 24) + 1;
	for (let el of elements) {
		if (value1==el.innerHTML) {
			value1=0;
		}
	}
	if (value1!=0) {
		return value1;
	}else{
		return stugel(elements);
	}
}
function sexmel(q) {
	q.style.backgroundColor="blue";
	if(q.innerHTML==24 && q.innerHTML==value+1){
		let y=document.getElementById('TIME');
		value=0;
		let elements = document.getElementsByClassName("x");
		let iiii=document.getElementById("re");
		let qqqq=document.createElement("h2");
		if (name=="") {
			qqqq.innerHTML="no name: "+ y.innerHTML;
		}else{
			qqqq.innerHTML=name+": "+ y.innerHTML;
		}
		
		iiii.appendChild(qqqq);
		for (let el of elements) {
			el.style.backgroundColor = "lime";
			el.style.color = "black";
		}
		clearInterval(timer);
		setTimeout(()=>{
			
			let e=document.getElementById("start");
			for (let el of elements) {
				el.style.backgroundColor = "#fff";
				el.style.color = "#444";
			}
			e.innerHTML="START";
			y.innerHTML = `Time: 00 min 00 sec 000 mil`;
			name="";
			let ee=document.getElementById("name");
			ee.value="";
			minute=0;
			second=0;
			for (let el of elements) {
				el.innerHTML=0;
			}
			for (let el of elements) {
				el.innerHTML=stugel(elements);
			}
		}, 3000);
		
	}else if (q.innerHTML!=value+1) {
		let elements = document.getElementsByClassName("x");
		q.style.backgroundColor="red";
		q.style.color="black";
		clearInterval(timer);
		setTimeout(()=>{
			if (q.innerHTML<=value) {
				q.style.backgroundColor="blue";
			}else{
				q.style.backgroundColor="#fff";
			}
			q.style.color="#444";
			j();
		}, 3000);

		
	}else{
		value++;
		let e=document.getElementById("start");
		if (e.innerHTML==="START") {
			j();
			e.innerHTML="STOP";
		}
	}
}

function sksel(q){
	if (q.innerHTML=="START") {
		q.innerHTML="STOP";
		j();
	}else{
		q.innerHTML="START";
		clearInterval(timer);
		let y=document.getElementById('TIME');
		minute=0;
		second=0;
		y.innerHTML = `Time: 00 min 00 sec`;
		let elements = document.getElementsByClassName("x");
		for (let el of elements) {
			el.style.backgroundColor = "#fff";
			el.style.color="#444";

		}

	}
}