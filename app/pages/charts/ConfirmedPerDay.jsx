import React from "react";
import Visualization from "../../components/Visualization";
import ButtonGroupV2 from "../../components/ButtonGroupV2";
import {Slider} from "@blueprintjs/core";
import {LinePlot} from "d3plus-react";

export default class ConfirmedPerDay extends React.Component {
  state = {
    scale: "Lineal",
    value: 10,
    valueReleased: 10
  };
  render() {
    const {scale} = this.state;
    const {data, dataChile, source} = this.props;

    let r = [...data, ...dataChile];
    r.sort((a, b) => a.region_id - b.region_id || a.fecha > b.fecha);
    let days = 0;
    let comparison = "";
    r.forEach(d => {
      if (d.region !== comparison) {
        comparison = d.region;
        days = 0;
      }
      if (d.casos_acum >= this.state.valueReleased) {
        days += 1;
      }
      d.days = days;
    });

    r = r.filter(d => d.days > 0);

    return (
      <Visualization
        buttons={
          <div>
            <ButtonGroupV2
              items={["Lineal", "Logarítmica"]}
              selected={scale}
              callback={scale => this.setState({scale})}
            />
            <div>
              <Slider
                labelStepSize={10}
                max={100}
                value={this.state.value}
                onRelease={valueReleased => this.setState({valueReleased})}
                onChange={value => this.setState({value})}
              />
            </div>
          </div>
        }
        paragraph={[
          "Este gráfico muestra los casos confirmados por región desde que se confirmaron 10 contagiados. Ello pues la propagación de COVID-19 no comenzó al mismo tiempo en todas las regiones y, por ende, es importante   analizar si el comportamiento del virus sigue tendencias similares desde el día que se confirman los primeros casos en cada región.",
          "La curva en rojo muestra el comportamiento del virus a nivel nacional.",
          "Mueva el slider para ajustar este umbral."
        ]}
        source={<p className="source">
          Datos entregados por el Ministerio de Salud, y almacenados
        diariamente por Ignacio Toledo en <a href={source}>{source}</a>
        </p>}
        title={`TOTAL CASOS DETECTADOS DESDE LOS ${this.state.valueReleased} CONFIRMADOS`}
      >
        <LinePlot
          config={{
            data: r,
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
        />
      </Visualization>
    );
  }
}
