import React from 'react';
import './cardd.css';
import Colors from './color'
import DetailsThumb from './deat';
import aquaRoOne from "../assets/item-img/aqua-crystal-plus-one.jpg";
import aquaRoTwo from "../assets/item-img/aqua-crystal-plus-Two.webp";
import aquaRoThree from "../assets/item-img/aqua-crystal-plus-Three.jpeg";
import Callbtn from '../components/card/callbtn';
import blueStarOne from "../assets/item-img/blue-start-ro-one.webp";
import blueStarTwo from "../assets/item-img/blue-start-ro-two.webp";
import blueStarThree from "../assets/item-img/blue-start-ro-three.webp";
import blueStarFoour from "../assets/item-img/blue-start-ro-four.webp";





class Cardd extends React.Component{
  
  state = {
    products: [
      {
        "_id": "1",
        "title": "Blue Star Eleanor 8L RO + UV + UF + Alkaline Water Purifier with Triple Layered Protection (Black/Grey)",
        "src": [
          blueStarOne,
          blueStarTwo,
          blueStarThree,
          blueStarFoour,
        ],
        "description": "This is new ro with new features ",
        "pricenew":" 12,000 ",
        "priceold": " 17,000",
        "colors":["Black"],
        "count": 1
      },
      {
        "_id": "2",
        "title": "Aqua Crystal Plus",
        "src": [
          aquaRoOne,
          aquaRoTwo,
          aquaRoThree,
          aquaRoOne,
        ],
        "description": "This is new ro with new features ",
        "pricenew":" 7,000 ",
        "priceold": " 11,000",
        "colors":["white"],
        "count": 1
      }
      ,
      {
        "_id": "2",
        "title": "Aqua Crystal Plus",
        "src": [
          aquaRoOne,
          aquaRoTwo,
          aquaRoThree,
          aquaRoOne,
        ],
        "description": "This is new ro with new features ",
        "pricenew":" 7,000 ",
        "priceold": " 11,000",
        "colors":["white"],
        "count": 1
      }
      
    ],
    indices: Array(3).fill(0), 
  };

  myRefs = this.state.products.map(() => React.createRef());

  handleTab = (index, cardIndex) => {
    const indices = [...this.state.indices];
    indices[cardIndex] = index;
    this.setState({ indices });
  };

  render() {
    const { products, indices } = this.state;
    return (
      <div className="app container">
        {products.map((item, cardIndex) => (
          <div className="details my-5" key={item._id}>
            <div className="big-img" ref={this.myRefs[cardIndex]}>
              <img src={item.src[indices[cardIndex]]} alt="" />
            </div>
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span className="new-price">
                  &#x20b9;{item.pricenew}{" "}
                  <span className="old-price"> &#x20b9; {item.priceold}</span>
                </span>
              </div>
              <Colors colors={item.colors} />
              <p>{item.description}</p>
              <p>{item.content}</p>
              <DetailsThumb
                images={item.src}
                tab={(index) => this.handleTab(index, cardIndex)}
                myRef={this.myRefs[cardIndex]}
              />
              <Callbtn />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Cardd;
