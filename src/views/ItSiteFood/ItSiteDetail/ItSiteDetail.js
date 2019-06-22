
import React, { Component } from 'react';

class ItSiteDetail extends Component {

    state = {
        food: {},
        foodstr: ""
    }

    


    componentDidMount() {
        console.log(this.props.match.params.id)
        this.getFood(this.props.match.params.id);
    }


    getFood(id){
        fetch('/svc/foods/itsite/search/'+id)
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          this.setState({ food: data, foodstr: JSON.stringify(data) })
        
        })
        .catch(console.log('error'))
    }


    render(){
        return (
            <div dangerouslySetInnerHTML={ {__html: this.state.foodstr} }>
            </div>

        );
    }
}

export default ItSiteDetail;


