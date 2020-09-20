import React from "react";
import picture1 from "./assets/picture1.jpg"
import picture2 from "./assets/picture2.jpg";
import picture3 from "./assets/picture3.jpg";

class ImageBlock extends React.Component{
    constructor(props){
        super(props);

        this.changePic = this.changePic.bind(this);
        this.selectButton1 = this.selectButton1.bind(this);
        this.selectButton2 = this.selectButton2.bind(this);
        this.selectButton3 = this.selectButton3.bind(this);
        this.tickDown = this.tickDown.bind(this);
        this.tickUp = this.tickUp.bind(this);
        this.fadeIn = this.fadeIn.bind(this);

        this.state = {
            picture: picture1,
            circle1Color: "black",
            circle2Color: "grey",
            circle3Color: "lightgrey",
            opacity: 1,
        }
    }

    tickDown()
    {
        if (this.state.opacity > 0)
        {
        this.setState({
            opacity: this.state.opacity - .05
        })
        }
    }

    tickUp()
    {
        if (this.state.opacity < 1)
        {
        this.setState({
            opacity: this.state.opacity + .05
        })
        }
    }


    fadeIn(){

        if (this.timerRef !== undefined)
        {
            clearInterval(this.timerRef)
        }

       this.timerRef= setInterval(this.tickUp, 20);
    }

    changePic(selectedButton){


        if (selectedButton === 'button1' && this.state.picture !== picture1)
        {
           this.setState({
            picture: picture1,
            circle1Color: "black",
            circle2Color: "grey",
            circle3Color: "lightgrey",
        })
        }
        else if (selectedButton === 'button2' && this.state.picture !== picture2)
        {
            this.setState({
                picture: picture2,
                circle1Color: "lightgrey",
                circle2Color: "black",
                circle3Color: "grey",
            })
        }
        else if (selectedButton === 'button3' && this.state.picture !== picture3)
        {
            this.setState({
                picture: picture3,
                circle1Color: "grey",
                circle2Color: "lightgrey",
                circle3Color: "black",
            })
        }
    }
   

    selectButton1(){
        this.changePic("button1");
    }
    selectButton2(){
        this.changePic("button2");
    }
    selectButton3(){
        this.changePic("button3");
    }


    render(){

        return(
        <div className = "pictureBlock" style = {{opacity: (this.props.imageVisible === true ? 1: 0), marginLeft: 75}}>
        <div id = "picture">
        
        <img id = "image" src = {this.state.picture} style = {{opacity: this.state.opacity}} alt = "mission" height = {this.props.imageSize} width = {this.props.imageSize}/>
        </div>
        <div className = "circles">
        <div id="circle" onClick={this.selectButton1} style = {{backgroundColor: this.state.circle1Color}}></div>
        <div id="circle2" onClick={this.selectButton2} style = {{backgroundColor: this.state.circle2Color}}></div>
        <div id="circle3" onClick={this.selectButton3} style = {{backgroundColor: this.state.circle3Color}}></div>
        </div>
        </div>
        );
    }

}

export default ImageBlock;