//import voiture_img from './images/imagen0.jpg'
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class Display extends Component{

    state = {
        post : {}
    }

    componentDidMount(){
        fetch('/api/christian').then((res) => {
            return res.json() //res.json() est un promesse, on l'execute avec then()
            
        }).then((result) => {
            this.setState({post : result})
            //console.log(result)
        })

    }
    render(){
         
        return(
            <div className = "Display">
                <h1>Bienvenue dans fetch Data from this API</h1>
                voiture_id: {this.state.post.id} <br/>
                Details: {this.state.post.msg} <br/>
                
              

            </div>
        );
    }
}

export default Display;