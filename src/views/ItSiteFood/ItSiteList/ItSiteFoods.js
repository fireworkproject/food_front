import React, { Component } from 'react';
import ItSiteFoodTableRow from './components/ItSiteFoodTableRow';

class ItSiteFoods extends Component {

  constructor(props){
    super(props);
    this.timeout =  0;
  }

  state = {
    foods: [],
    foodName: '',
    selected : false,
    select_id: 1,
    search_text: ""
  };

  food_name = "";


  componentDidMount() {
  }

  handleOnChangeSearchText = (e) => {
    this.setState({
      search_text: e.target.value
    })
  }

  handleClickSearchFoodName = (e) => {
    console.log(this.state.search_text);
    this.searchFoods(this.state.search_text);
  }

  searchFoods = (foodName) => {
    
    if(foodName){
      fetch('/svc/foods/itsite/search?foodName='+foodName)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ foods: data.foods })
      })
      .catch(console.log);
    }
  }

  selectItem = (data) => {
    this.setState({
      select_id : data.prdApiId,
      selected : true
    })
    this.props.history.push('/itsite/'+data.prdApiId);
  }


  triggerChange() {
    console.log(this.state);
    // this.searchFoods(foodName);
  }

  render() {

    const list = this.state.foods.map((food)=>(
      <ItSiteFoodTableRow key={food.prdApiId} food={food} callbackFunction={this.selectItem} />
    ));

    return (
      <div>
        <div id="ui-view">
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" id="search_text" value={this.state.search_text} placeholder="식품 이름" onChange={evt => this.handleOnChangeSearchText(evt)} />
            </div>
            <div className="from-group col-md-6">
            <button onClick={evt => this.handleClickSearchFoodName(evt)}>검색</button>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              Food List
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">상품분류명</th>
                    <th scope="col">회사명</th>
                    <th scope="col">상품명</th>
                    <th scope="col">업체명</th>
                    <th scope="col">바코드</th>
                    <th scope="col">Y/N</th>
                    <th scope="col">등록일</th>
                    <th scope="col"></th>
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

export default ItSiteFoods;
