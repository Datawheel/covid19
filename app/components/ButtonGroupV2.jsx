import React from "react";
import classnames from "classnames";
import {Alignment, AnchorButton, Button, ButtonGroup, H5, Switch} from "@blueprintjs/core";

export default class ButtonGroupV2 extends React.Component {
  render() {
    const {items, selected} = this.props;
    return <div>
      <ButtonGroup style={{minWidth: 200}}>
        {items.map((d, i) => <Button
          key={`button_${d}_${i}`}
          minimal={true}
          className={classnames({selected: selected === d})}
          onClick={() => this.props.callback(d)}
        >
          {d}
        </Button>)}
      </ButtonGroup>
    </div>;
  }
}

ButtonGroupV2.defaultProps = {
  items: []
};
