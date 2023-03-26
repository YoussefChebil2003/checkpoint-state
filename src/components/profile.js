import React from "react";
import anonymousIcon from "../assets/icon/anonymous.png";
import YoussefPhoto from "../assets/img/Youssef Chebil photo.jpg"
import "../stylesheets/main-navbar.css"
import TimeSinceMount from "./timeSinceMount";

class Person{
    constructor(fullName, profession, bio, imgSrc){
        this.fullName= fullName;
        this.profession= profession;
        this.bio= bio;
        this.imgSrc= imgSrc;
    }
}

class App extends React.Component{
    timeField = new TimeSinceMount();
    Youssef = new Person("Youssef Chebil", "Full Stack Developer", "Lorem ipsum text", YoussefPhoto);
    Anonymous = new Person("","","", anonymousIcon)
    state={
        Person: this.Anonymous,
        shows:false,
    };
    handleClick=()=>{
        if (this.state.shows == false)
            this.setState({Person: this.Youssef, shows: true})
        else    
            this.setState({Person: this.Anonymous, shows: false})
        this.timeField.setState({time:0})
    }
    render(){
        return (
            <div className="profile-box">
                <img style={{height: "250px", width:"250px"}} src={this.state.Person.imgSrc}></img>
                <h1>Name : {this.state.Person.fullName}</h1>
                <h2>Profession: {this.state.Person.profession}</h2>
                <p>Bio: {this.state.Person.bio}</p>  
                {/*<button onClick={this.handleClick}>Login</button>
                */}
                <label class="switch">
                    <input onClick={this.handleClick} type="checkbox"/>
                    <span class="slider"></span>
                </label>
                <p>Time since mount: {this.timeField.time} seconds</p>
            </div> 
        )
        
    }
}

export default App;