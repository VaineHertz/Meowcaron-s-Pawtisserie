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

class InstagramEmbed extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modalImage: null,
        numCols: this.getNumCols(window.innerWidth),
      };
    }
  
    componentDidMount() {
      window.addEventListener("resize", this.handleResize);
    }
  
    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }
  
    handleResize = () => {
      this.setState({
        numCols: this.getNumCols(window.innerWidth),
      });
    };
  
    getNumCols = (width) => {
      if (width >= 1200) {
        return 3;
      } else if (width >= 768) {
        return 2;
      } else {
        return 1;
      }
    };
  
    openModal = (image) => {
      this.setState({
        modalImage: image,
      });
    };
  
    closeModal = () => {
      this.setState({
        modalImage: null,
      });
    };
  
    render() {
      const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
      const { numCols } = this.state;
      const rows = Math.ceil(images.length / numCols);
  
      return (
        <>
          <div className="landing">
            <div className="container">
              {[...Array(rows)].map((_, rowIndex) => (
                <div className="row" key={rowIndex}>
                  {[...Array(numCols)].map((_, colIndex) => {
                    const index = rowIndex * numCols + colIndex;
                    if (index >= images.length) {
                      return null;
                    }
                    return (
                      <div className={`col-md-${Math.floor(12 / numCols)}`} key={index}>
                        <img
                          className="imgCell"
                          src={images[index]}
                          alt={`Macarons ${index}`}
                          onClick={() => this.openModal(images[index])}
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
  
          {/* Modal window */}
          {this.state.modalImage && (
            <div className="modal">
              <span className="close" onClick={this.closeModal}>
                &times;
              </span>
              <img
                className="modal-content"
                src={this.state.modalImage}
                alt="Macaron"
              />
            </div>
          )}
        </>
      );
    }
  }
  
  export default InstagramEmbed;