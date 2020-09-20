import React from 'react';
import './stylesheet.css';
import ImageBlock from './ImageBlock'
import resumePDF from './assets/missionresume1.pdf';

class App extends React.Component{


  constructor(props)
  {
    super(props);

    this.state = {
      imageVisible: true,
      aboutActive: false,
      aboutHover: false,
      aboutRestart: true,
      backgroundColor: "white",
      imageSize: 400
    }

    this.onClick = this.onClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
    this.contentRef = React.createRef();
  }

  changeBackgroundColor(color){
    this.setState({
      backgroundColor: color
    })
  }

  componentDidMount(){
    window.addEventListener("resize", this.resize.bind(this));
    document.addEventListener('mousedown', this.handleClickOutside);
    this.resize();
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.contentRef.current && !this.contentRef.current.contains(event.target)) {
     
      if (this.state.imageVisible === false || !this.state.imageVisible)
      {
        this.setState({
          imageVisible: true,
          aboutActive: false,
          aboutRestart: true,
          aboutHover: false
        })
      }
    }
  }

  resize() {
    let currentHideOut = window.innerWidth <= 900;
    if (currentHideOut !== this.state.hideAbout)
    {
    this.setState({
      hideAbout: window.innerWidth <= 900,
      imageSize: (window.outerWidth < 400 ? window.outerWidth: 400)
    });
  }
  }

  onClick() {
    if (this.state.imageVisible === true || !this.state.imageVisible)
    {
      this.setState({
        imageVisible: false,
        aboutActive: true,
        aboutRestart: true,
      })
    }
  }

  render() {
  return (
    <div className = {this.state.backgroundColor}>
    <div className="Nameheader" style = {{opacity: (this.state.imageVisible === true ? 1 : 0), fontSize: (this.state.hideAbout === true && 45), textAlign: (this.state.hideAbout === true && "center"), marginLeft: (this.state.hideAbout && 0)}}> Mission &middot; Marcus </div>

    <div className="links" style = {{opacity: (this.state.imageVisible === true ? 1 : 0), marginBottom: (this.state.hideAbout === true && 50)}}>
        <div className="resume"> <a href={resumePDF} download>./Resume</a> </div>
        <div className="github"><a href="http://github.com/miszion">./Github</a> </div>
        <div className="linked"><a href="https://www.linkedin.com/in/mission-marcus/">./LinkedIn</a></div>
    </div>
    
    <div class = "content">
    
    <ImageBlock imageVisible = {this.state.imageVisible} isMobile = {this.state.hideAbout} changeBackgroundColor = {this.changeBackgroundColor} imageSize = {this.state.imageSize}></ImageBlock>
    <div className = {this.state.aboutActive === true ? "aboutMeContent-active" : (this.state.aboutRestart === true ? "aboutMeContent" : "aboutMeContent-normal")} ref = {this.contentRef} onMouseOver = {this.onHover} onMouseOut = {this.onHoverOut} onClick = {this.onClick} style = {{display: (this.state.hideAbout === true && "none") }}>
    <div className = "aboutme"> About Me </div>
    <span className = "aboutmetext"> My name is Mission and I am an aspiring software developer from Chicago, Illinois. I currently study at the University of Illinois at Chicago where I am pursuing my bachelor's degree in Computer Science. My favorite research topics include software optimization, data structures, and program design. My work can be found above at the github link as well as my personal resume and linked-in. This website was made with HTML5, CSS3, and React.js. I can be reached at <b>missionmarcus@gmail.com</b> for any work-related or technical inquiries.</span>
    </div>
    </div>
    </div>
  );
  }
}

export default App;
