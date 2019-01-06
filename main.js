// Your code here!


var globalID;



function changePic(name)
{
    if (name == "circle")
        {
            document.getElementById("circle2").style.backgroundColor = "grey";
            document.getElementById("circle3").style.backgroundColor = "lightgrey";
            document.getElementById("image").src = "picture1.jpg"
        }
    else if (name == "circle2")
        {
            document.getElementById("circle").style.backgroundColor = "darkgrey";
            document.getElementById("circle3").style.backgroundColor = "lightgrey";
            document.getElementById("image").src = "picture2.jpg"
        }
    else if (name == "circle3")
        {
             document.getElementById("circle").style.backgroundColor = "darkgrey";
            document.getElementById("circle2").style.backgroundColor = "grey";
            document.getElementById("image").src = "picture3.jpg"
        }
    
    document.getElementById(name).style.backgroundColor = "black";
}



function changePosition() {

    var title = document.getElementsByClassName("Nameheader");

    var pos = 500;

    var timeStamp = 0;

    function moveIt(timestamp) {

        if (pos <= -100) {
            timeStamp = cancelAnimationFrame(timeStamp);
            changeColor();
        }
        else {

            pos = pos - 4;
            title.style.marginLeft = pos + 'px';
            requestAnimationFrame(moveIt);
        }
    }

    requestAnimationFrame(moveIt);


}

