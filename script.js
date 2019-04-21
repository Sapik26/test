var line="Біжуча стрічка";
var speed=150;
var i=0;
function m_line() {
	if(i++<line.length) {
		document.cit.forum.value=line.substring(0,i);
	}
else{
	document.cit.forum.value=" ";
	i=0;
	}
setTimeout('m_line()',speed);
}


function bigPict(){
     var w=document.zvir.width;
     if (w<302){
      document.zvir.width=w+10;
      document.zvir.src="1.jpg"
      setTimeout("bigPict()", 5)
     }
    }


function ChangeImage(id,image)
{
var el=document.getElementById(id);
el.src=image;
}

function suma()
{
    var x=document.getElementById("a").value;
    var y=document.getElementById("b").value;
    var z=parseInt(x)+parseInt(y);

     document.getElementById("rez").value=Z;
    
}

function Solute_1()
{
    if(document.getElementById("1button1").onclick == true)
        {
            alert("sfgddf");
        } else alert("2");
};

function Example_1()
{
    if(document.getElementById("text_1").value == 25)
        {
            alert("Правильно!!!");
        }
    else
        {
            alert("Не правильно!!!");
        }
}

function Example_2()
{
    if(document.getElementById("text_2").value == 2)
        {
            alert("Правильно!!!");
        }
    else
        {
            alert("Не правильно!!!");
        }
}

function Example_3()
{
    if(document.getElementById("text_3").value == -0.9)
        {
            alert("Правильно!!!");
        }
    else
        {
            alert("Не правильно!!!");
        }
}

function Example_4()
{
    if(document.getElementById("text_4").value == 3)
        {
            alert("Правильно!!!");
        }
    else
        {
            alert("Не правильно!!!");
        }
}