import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';

class Comments extends React.Component{
    state = {
        comments: [
            {id: 1 , message:"Premiere commentaire"},
            {id: 2 , message:"Deuxieme commentaire"}
        ],    
        nouveauComment: "Christian Voiture"      
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
        //const comment = {id : id, message: message};
        //const comments = this.state.comments.slice();
        const comments = [...this.state.comments];
        comments.push({id, message}); 
        //comments.push(comment);
        this.setState({comments : comments, nouveauComment : ''});

    };
    handleChange = (event) => {
        const value = event.currentTarget.value; 
        this.setState({ nouveauComment : value });

    }
    render(){
        return(
            <div>
                <h1>Liste de commentaire</h1>
                <ul>
                    {this.state.comments.map(comment => (
                    <li key = {comment.id}>
                       {comment.id} | {comment.message} <button  onClick = {() => this.handleDelete(comment.id)}>Supprimer</button>
                    </li>
                    ))} 
                </ul>
                <form onSubmit = {this.handleSubmit}>
                    <input value = {this.state.nouveauComment} onChange = {this.handleChange} type = "text" placeholder = "Ajouter un commentaire"/>
                    <button>Send</button>
                </form>
            </div>
         
               
        );
    }
}

export default Comments; 