import React, { Component } from 'react';

class Listdata extends Component {
    /*
     * constructor
     *
     // @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {
        super(props);
        
        this.state = {
            items: [],
            isLoaded: false
        }

    }

    /**
     * Fetch json array of objects from localhost:5500 and update state.
     */
    componentDidMount = () => {

        fetch('/api/christian')
            .then(res => res.json())  
            .then(json => { 
                //console.log(json)
                this.setState({
                    isLoaded: true,
                    items: json,
                     
                })
            });

    }

    /**
     * render UI
     */
    render() {

        //var { isLoaded, items } = this.state;
        var { items = [] } = this.props;
    
        var { isLoaded } = this.state;
        

        if (!isLoaded){
            return <div>Loading...</div>;
            //alert(typeof(items)) 
        }else{
            return (
                <div className="Listdata">

                    Data has been loaded succes
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                Message: {item.msg} | Photo: {item.picture}

                            </li>
                        ))};
                        <li>Mandeha</li>

                    </ul>

                    
                    
                </div>
            );

        }


    }

}
export default Listdata; 