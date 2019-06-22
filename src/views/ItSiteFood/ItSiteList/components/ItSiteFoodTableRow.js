
import React, { Component } from 'react';


class ItSiteFoodTableRow extends Component{

    static defaultProps = {
        food: {
            "clsNm": "가공식품>음료류>탄산음료>콜라",
            "cpnNm": null,
            "createDt": "2019-06-18 14:08:35.0",
            "gnlOwnerNm": "한국코카콜라(유)",
            "gtin": "8801094013400",
            "prdApiId": "61829e93-20a4-4c23-a2ff-920f468e85fc",
            "prdNm": "코카콜라",
            "prdUseYn": "Y",
            "repImgPath": null
        }
      }

    goDetailPage = (data) => {
        this.props.callbackFunction(data);
    }

    render(){

        let { 
            clsNm,
            cpnNm,
            createDt,
            gnlOwnerNm,
            gtin,
            prdApiId,
            prdNm,
            prdUseYn,
            repImgPath
        } = this.props.food;

        if(repImgPath === undefined){
            repImgPath = '/static/media/coffein.330e00f2.png';
        }

        return (
           <tr onClick={e => this.goDetailPage({prdApiId})}>
               <td>{prdApiId}</td>
               <td>{clsNm}</td>
               <td>{gnlOwnerNm}</td>
               <td>{prdNm}</td>
               <td>{cpnNm}</td>
               <td>{gtin}</td>
               <td>{prdUseYn}</td>
               <td>{createDt}</td>
               <td>
                   <div className="itsite-box">
                        <img className="itsite-box-img" src={repImgPath}/>
                   </div>
                </td>
             </tr>
        );
    }
}
export default ItSiteFoodTableRow;