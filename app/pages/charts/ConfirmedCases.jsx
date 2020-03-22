import React from "react";
import Visualization from "../../components/Visualization";
import ButtonGroupV2 from "../../components/ButtonGroupV2";
import {LinePlot} from "d3plus-react";

export default class ConfirmedCases extends React.Component {
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
          "Esta visualización muestra el número de casos confirmados de COVID-19 en cada región de Chile desde que se confirmó el primer caso en el país. Es el gráfico más simple pues no incluye variables como el número de habitantes o fecha de primer contagiado en cada región."
        ]}
        source={<p className="source">
          Datos entregados por el Ministerio de Salud, y almacenados
        diariamente por Ignacio Toledo en <a href={source}>{source}</a>
        </p>}
        title="TOTAL CASOS CONFIRMADOS POR FECHA"
      >
        <LinePlot
          config={{
            data,
            x: "fecha",
            discrete: "x",
            groupBy: ["region"],
            time: "fecha",
            legend: false,
            timeline: false,
            xConfig: {
              tickFormat: d => {
                const date = new Date(d);
                const month = date.getMonth();
                const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
                const day = date.getDate();
                return date <= new Date() ? `${months[month]} ${day}` : "";
              },
              domain: [new Date("2020/03/03"), this.props.latest]
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
