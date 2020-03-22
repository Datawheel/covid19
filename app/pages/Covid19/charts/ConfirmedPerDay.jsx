import React from "react";
import Visualization from "../../../components/Visualization";
import ButtonGroupV2 from "../../../components/ButtonGroupV2";
import {LinePlot} from "d3plus-react";

export default class ConfirmedPerDay extends React.Component {
  state = {
    scale: "Lineal"
  };
  render() {
    const {scale} = this.state;
    const {data, source} = this.props;

    return (
      <Visualization
        buttons={
          <ButtonGroupV2
            items={["Lineal", "Logarítmica"]}
            selected={scale}
            callback={scale => this.setState({scale})}
          />
        }
        paragraph={[
          "Dado que la propagación de COVID-19 no comenzó al mismo tiempo en todas las regiones, es importante analizar si el comportamiento del virus sigue tendencias similares desde el día que se confirma el primer caso en cada región.",
          "La curva en gris muestra el comportamiento del virus a nivel nacional."
        ]}
        source={source}
        title="TOTAL CASOS CONFIRMADOS CADA 100.000 HABITANTES POR DÍA DE CONTAGIO"
      >
        <LinePlot
          config={{
            data,
            x: "days",
            discrete: "x",
            groupBy: ["region"],
            legend: false,
            xConfig: {
              tickFormat: d => d % 2 ? `Día ${d}` : ""
            },
            y: "casos_acum",
            yConfig: {
              scale: scale === "Lineal" ? "linear" : "log",
              title: `Casos Confirmados\n(${scale})`
            }
          }}
          dataFormat={resp => resp.filter(d => d.days > 0)}
        />
      </Visualization>
    );
  }
}
