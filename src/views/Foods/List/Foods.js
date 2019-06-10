import React, { Component } from 'react';
import FoodTableRow from './components/FoodTableRow';

class Foods extends Component {

  constructor(props){
    super(props);
    this.timeout =  0;
  }

  state = {
    foods: [],
    foodName: ''
  };

  food_name = "";


  componentDidMount() {
    this.getFoodList(0);
  }

  getFoodList(page){
    fetch('/svc/foods?page='+page)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      this.setState({ foods: data.foods })
    })
    .catch(console.log)
  }

  handleChangeFoodName = (e) => {
    var searchText = e.target.value; // this is the search text
    if(this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.searchFoods(searchText);
    }, 200);
  }

  searchFoods = (foodName) => {
    
    if(foodName){
      fetch('/svc/foods/search?foodName='+foodName)
      .then(res => res.json())
      .then((data) => {
        this.setState({ foods: data.foods })
      })
      .catch(console.log);
    }else{
      this.getFoodList(0);
    }


  }

  triggerChange() {
    console.log(this.state);
    // this.searchFoods(foodName);
  }

  render() {

    const list = this.state.foods.map((food)=>(
      <FoodTableRow key={food.food_name} food={food}/>
    ));

    return (
      <div>
        <div id="ui-view">
          <input
            placeholder="식품 이름"
            onChange={evt => this.handleChangeFoodName(evt)}
          />
          <div className="card">
            <div className="card-header">
              Food List
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">식품군</th>
                    <th scope="col">식품이름</th>
                    <th scope="col">1회제공량(g)</th>
                    <th scope="col">칼로리(kcal)</th>
                    <th scope="col">탄수화물(g)</th>
                    <th scope="col">단백질(g)</th>
                    <th scope="col">지방(g)</th>
                    <th scope="col">당류(g)</th>
                    <th scope="col">나트륨(mg)</th>
                    <th scope="col">콜레스톨(mg)</th>
                    <th scope="col">포화지방산(g)</th>
                    <th scope="col">트랜스지방산(g)</th>
                    <th scope="col">카페인(g)</th>
                    <th scope="col">출시연도</th>
                  </tr>
                </thead>
                <tbody>
                  {list}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Foods;
