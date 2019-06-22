
import React, { Component } from 'react';


class FoodTableRow extends Component{

    static defaultProps = {
        food: {
            "food_group": "과자류",
            "food_name": "100% 유기농 허니팝 키즈퐁",
            "size": "30",
            "calorie": "33.3",
            "carbohydrate": "7.4",
            "protein": "0.63",
            "fat": "0",
            "sugars": "4.2",
            "salt": "0",
            "cholesterol": "0",
            "saturaated_fat": "0",
            "trans_fat": "0",
            "caffeine": "0",
            "year": "2017"
        }
      }

    goDetailPage = (data) => {
        this.props.callbackFunction(data);
    }

    render(){

        const { 
            id,
            food_group,
            food_name,
            size,
            calorie,
            carbohydrate,
            protein,
            fat,
            sugars,
            salt,
            cholesterol,
            saturaated_fat,
            trans_fat,
            caffeine,
            year
        } = this.props.food;

        return (
           <tr onClick={e => this.goDetailPage({id})}>
               <td>{id}</td>
               <td>{food_group}</td>
               <td>{food_name}</td>
               <td>{size}</td>
               <td>{calorie}</td>
               <td>{carbohydrate}</td>
               <td>{protein}</td>
               <td>{fat}</td>
               <td>{sugars}</td>
               <td>{salt}</td>
               <td>{cholesterol}</td>
               <td>{saturaated_fat}</td>
               <td>{trans_fat}</td>
               <td>{caffeine}</td>
               <td>{year}</td>
            </tr>
        );
    }
}
export default FoodTableRow;