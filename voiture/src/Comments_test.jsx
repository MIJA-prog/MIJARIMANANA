import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Comments extends React.Component{

    //commentInput = React.createRef();
    
    state = {
        comments: [
            {id: 1 , message:"Premiere commentaire"},
            {id: 1 , message:"Premiere commentaire"}
        ],
        nouveauComment:"Christian Voiture"
    };
    handleDelete = id => {
        const comments = this.state.comments.slice();
        const index = comments.findIndex((comment) => comment.id === id);
        comments.splice(index, 1); 
        this.setState({comments : comments});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const id = new Date().getTime();
        const message = this.state.nouveauComment;
        const comment = {id : id, message: message};
        const comments = this.state.comments.slice();
        comments.push(comment);
        this.setState({comments : comments, nouveauComment : ''});

    };
    handleChange = (event) => {
        const value = event.currentTarget.value; 
        this.setState({ nouveauComment : value });

    }
    render(){
        const title = 'Listes de commentaire:::'; 
        return(
            <h5>{title}</h5>,
            <ul>
                {this.state.comments.map(comment => (
                    <li>
                        {comment.message} <button onClick = {() => this.handleDelete(comment.id)}>Delete Comments</button>
                    </li>
                ))} 
            </ul>,
            <form onSubmit = {this.handleSubmit}>
                <input value = {this.state.nouveauComment} onChange = {this.handleChange} type = "text" placeholder = "Ajouter un commentaire"/>
                <button>Send</button>

            </form> 
         
        );
    }
}

export default Comments;