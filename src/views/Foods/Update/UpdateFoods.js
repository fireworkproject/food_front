
import React, { Component } from 'react';

class UpdateFoods extends Component {

    state = {
        food : {
            caffeine: "0",
            calorie: "0",
            carbohydrate: "0",
            cholesterol: "0",
            fat: "0",
            food_group: "",
            food_name: "",
            protein: "0",
            salt: "0",
            saturated_fat: "0",
            calcium: "0", 
            size: "0",
            unit: "",
            sugars: "0",
            trans_fat: "0",
            year: "0"
        }
    }



    componentDidMount() {
        this.getFood(this.props.match.params.id);
      }
    
    getFood(id){
        fetch('/svc/foods/'+id)
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          if(!data._source.unit){
              data._source.unit = 'g';
          }
          if(!data._source.calcium){
              data._source.calcium = 0;
          }
          this.setState({ food: data._source })
        })
        .catch(console.log)
    }

    handleChange = (e) => {
        const { food } = this.state;
        this.setState({
            food: {
                ...food,
                [e.target.name] : e.target.value
            }
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.food);
        const {food} = this.state;
        const id = this.props.match.params.id;
        fetch('/svc/foods/'+ id, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(food)
        })
        .then(res => res.text()) // OR res.json()
        .then(res => console.log(res))
    }


    render() {

        const {food} = this.state;

        return(
            <div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="exampleFormControlInput1">식품군</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" name="food_group" value={food.food_group} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="exampleFormControlInput2">식품 이름</label>
                        <input type="text" className="form-control" id="exampleFormControlInput2" name="food_name" value={food.food_name} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="exampleFormControlInput3">1회 제공량 (g)</label>
                        <input type="text" className="form-control" id="exampleFormControlInput3" name="size" value={food.size} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="exampleFormControlInput15">단위</label>
                        <input type="text" className="form-control" id="exampleFormControlInput15" name="unit" value={food.unit} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="exampleFormControlInput4">칼로리 (kcal)</label>
                        <input type="text" className="form-control" id="exampleFormControlInput4" name="calorie" value={food.calorie} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="exampleFormControlInput5">탄수화물</label>
                        <input type="text" className="form-control" id="exampleFormControlInput5" name="carbohydrate" value={food.carbohydrate} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="exampleFormControlInput6">단백질</label>
                        <input type="text" className="form-control" id="exampleFormControlInput6" name="protein" value={food.protein} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="exampleFormControlInput7">지방 (g)</label>
                        <input type="text" className="form-control" id="exampleFormControlInput7" name="fat" value={food.fat} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="exampleFormControlInput8">당류 (g)</label>
                        <input type="text" className="form-control" id="exampleFormControlInput8" name="sugars" value={food.sugars} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="exampleFormControlInput9">나트륨 (mg)</label>
                        <input type="text" className="form-control" id="exampleFormControlInput9" name="salt" value={food.salt} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="exampleFormControlInput10">콜레스톨 (mg)</label>
                        <input type="text" className="form-control" id="exampleFormControlInput10" name="cholesterol" value={food.cholesterol} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="exampleFormControlInput11">포화지방산 (g)</label>
                        <input type="text" className="form-control" id="exampleFormControlInput11" name="saturaated_fat" value={food.saturated_fat} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="exampleFormControlInput12">트랜스 지방산(g)</label>
                        <input type="text" className="form-control" id="exampleFormControlInput12" name="trans_fat" value={food.trans_fat} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="exampleFormControlInput13">카페인 (mg)</label>
                        <input type="text" className="form-control" id="exampleFormControlInput13" name="caffeine" value={food.caffeine} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="exampleFormControlInput16">칼슘 (mg)</label>
                        <input type="text" className="form-control" id="exampleFormControlInput16" name="calcium" value={food.calcium} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="exampleFormControlInput14">출시연도</label>
                        <input type="text" className="form-control" id="exampleFormControlInput14" name="year" value={food.year} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="col-auto my-1">
                    <button className="btn btn-primary" onClick={ e => window.confirm("업데이트 할꺼냐?") && this.handleSubmit(e)}>Submit</button>
                </div>
            </div>
        );    
    }
}

export default UpdateFoods;