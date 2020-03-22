import React from "react";
import {AnchorLink} from "@datawheel/canon-core";

export default class Visualization extends React.Component {
  render() {
    const {buttons, children, paragraph, source, title} = this.props;
    return (
      <div className="viz-wrapper columns">
        <div className="column aside">
          <h3 className="title">{title}</h3>
          {buttons}
          <div className="more-info-wrapper">
            <AnchorLink
              className="more-info"
              to="faq-escalas"
            >
            Para obtener más información sobre la diferencia entre la escala lineal y logarítmica, haga clic aquí.
            </AnchorLink>
          </div>

          {paragraph.map((d, i) =>
            <p key={i}>{d}</p>
          )}
          <p className="source">
            <b>Fuente:</b> Datos entregados por el Ministerio de Salud, y almacenados
            diariamente por Ignacio Toledo en <a href={source}>{source}</a>
          </p>
        </div>
        <div className="column">{children}</div>
      </div>
    );
  }
}

Visualization.defaultProps = {
  paragraph: []
};
