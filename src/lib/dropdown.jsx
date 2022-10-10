import React from "react";

function TextBanner(props) {
  if (!props.text) {
    return null;
  }
  return (
    <div className={props.classDiv}>
      <p className={props.classP}>{props.description}</p>
    </div>
  );
}

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showText: false };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick() {
    this.setState((state) => ({
      showText: !state.showText,
    }));
  }

  render() {
    return (
      <div className={this.props.classDropdown}>
        <button
          className={`${this.props.classDropdown}__button`}
          onClick={this.handleToggleClick}
        ></button>
        <div className={`${this.props.classDropdown}__title`}>
          <div>
            <h2 className={`${this.props.classDropdown}__h2`}>
              {this.props.title}
            </h2>
          </div>
          {this.state.showText ? (
            <i className="fas fa-chevron-up"></i>
          ) : (
            <i className="fas fa-chevron-down"></i>
          )}
        </div>
        <TextBanner
          text={this.state.showText}
          description={this.props.description}
          classDiv={`${this.props.classDropdown}__text`}
          classP={`${this.props.classDropdown}__text--p`}
        />
      </div>
    );
  }
}
export { Dropdown };
