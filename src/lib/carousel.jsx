import React from "react";

function ButtonPrevious(props) {
  return (
    <button className="slider__container--btn-previous" onClick={props.onClick}>
      <i className="fas fa-chevron-left"></i>
    </button>
  );
}
function ButtonNext(props) {
  return (
    <button className="slider__container--btn-next" onClick={props.onClick}>
      <i className="fas fa-chevron-right"></i>
    </button>
  );
}

function IndexPage(props) {
  return (
    <p className="slider__container--indexpage">
      {props.pict}/{props.nbpict}
    </p>
  );
}

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.state = {
      pict: 0,
      nbpict: this.props.nbpict.length,
    };
  }

  handleNextClick() {
    this.setState({ pict: this.state.pict + 1 });
  }

  handlePreviousClick() {
    this.setState({ pict: this.state.pict - 1 });
  }

  render() {
    if (this.state.pict > this.state.nbpict - 1) {
      this.setState({ pict: 0 });
    } else if (this.state.pict < 0) {
      this.setState({ pict: this.state.nbpict - 1 });
    }
    return (
      <div className="slider__container">
        <div className="slider__container--btn">
          <ButtonPrevious onClick={this.handlePreviousClick} />

          <ButtonNext onClick={this.handleNextClick} />
        </div>
        <IndexPage
          pict={this.state.pict + 1}
          nbpict={this.props.nbpict.length}
        />
        <div
          className="slider__container--img"
          style={{
            backgroundImage: `url(${this.props.data[this.state.pict]})`,
          }}
        ></div>
      </div>
    );
  }
}
export { Carousel };
