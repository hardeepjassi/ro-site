import React from 'react';
import './cardd.css';
import Colors from './color'
import DetailsThumb from './deat';
import smlimgs from "../assets/item-img/mdemo-sider.jpg";
import Callbtn from '../components/card/callbtn';



class Cardd extends React.Component{
  
  state = {
    products: [
      {
        "_id": "1",
        "title": "Aqua Grand Plus",
        "src": [
          "https://lh3.googleusercontent.com/drive-viewer/AITFw-yTVo4gQw_HSj5ZIST101qcCQwx-FQKgKS275W9IXmXFjCRBHVDJktA8MLYoB1lNEvwTbEb45OM8vLfNloE1SgUxfXbuw=w1920-h942",
          "https://images.unsplash.com/photo-1682685797208-c741d58c2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1683009686716-ac2096a5a73b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
        ],
        "description": "This is new ro with new features ",
        "pricenew":" 7,000 ",
        "priceold": " 11,000",
        "colors":["white"],
        "count": 1
      }
    ],
    index: 0
    
    
  };
  

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>
              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span className='new-price' > &#x20b9;{item.pricenew} <span className='old-price'> &#x20b9; {item.priceold}</span> </span>
                </div>
                <Colors colors={item.colors} />
                <p>{item.description}</p>
                <p>{item.content}</p>
                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                {/* <button className="cart">Add to cart</button> */}
		  	<Callbtn/>
              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default Cardd;
