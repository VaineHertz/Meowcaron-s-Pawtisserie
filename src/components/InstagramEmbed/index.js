import React from "react";
import './index.scss'
import img1 from "../../asset/macarons/1.jpg";
import img2 from "../../asset/macarons/2.jpg";
import img3 from "../../asset/macarons/3.jpg";
import img4 from "../../asset/macarons/4.jpg";
import img5 from "../../asset/macarons/5.jpg";
import img6 from "../../asset/macarons/6.jpg";
import img7 from "../../asset/macarons/7.jpg";
import img8 from "../../asset/macarons/8.jpg";
import img9 from "../../asset/macarons/9.jpg";

class InstagramEmbed extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <>
        <div className='landing'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img className='imgCell' src={img4}></img>
                        <img className="imgCell" src={img1}></img>
                        <img className="imgCell" src={img3}></img>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <img className='imgCell' src={img2}></img>
                        <img className="imgCell" src={img5}></img>
                        <img className="imgCell" src={img6}></img>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <img className='imgCell' src={img7}></img>
                        <img className="imgCell" src={img8}></img>
                        <img className="imgCell" src={img9}></img>
                    </div>
                </div>
            </div>
        </div>
        </>
}
}

export default InstagramEmbed