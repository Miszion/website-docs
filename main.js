// Your code here!


var globalID;





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

