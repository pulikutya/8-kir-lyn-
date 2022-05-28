const container = document.querySelector(".Grid-Container");
for(let i = 0; i < container.children.length; i++) {
	container.children[i].onclick = () => click(i); }
const rq = document.getElementById("counter");
function click(c)
{
	console.log(c);
	if(container.children[c].innerText == "Q")
	{
		container.children[c].innerText = "";
		rq.innerText = parseInt(rq.innerText)+1;
	}
	else if(parseInt(rq.innerText) > 0)
	{
		container.children[c].innerText = "Q";
		rq.innerText = parseInt(rq.innerText)-1;
	}
	else 
		alert("you already placed all the queens")
}

