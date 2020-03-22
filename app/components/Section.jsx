import React from "react";

export default class Section extends React.Component {
  render() {
    const {children, title} = this.props;
    return <div className="section">
      <h2 className="title">{title}</h2>
      <div className="container">{children}</div>
    </div>;
  }
}
