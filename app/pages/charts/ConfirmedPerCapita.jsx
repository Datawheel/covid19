import React from "react";
import Visualization from "../../../components/Visualization";
import ButtonGroupV2 from "../../../components/ButtonGroupV2";
import {LinePlot} from "d3plus-react";

export default class ConfirmedPerCapita extends React.Component {
  state = {
    scale: "Lineal"
  };
  render() {
    const {scale} = this.state;
    const {data, dataChile, source} = this.props;
    const values = data.map(d => d.total_cada_100mil);
    values.sort((a, b) => a - b);

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
          "Esta visualización normaliza el número de casos confirmados de COVID-19 por cada 100.000 habitantes de una región. Da una idea de la \"densidad\" de las infecciones por COVID-19 en cada región.",
          "La curva en rojo  entrega esta información a nivel nacional."
        ]}
        source={source}
        title="TOTAL CASOS CONFIRMADOS CADA 100.000 HABITANTES POR FECHA"
      >
        <LinePlot
          config={{
            data: [...data, ...dataChile],
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
            y: "total_cada_100mil",
            yConfig: {
              // domain: [min, max],
              scale: scale === "Lineal" ? "linear" : "log",
              title: `Casos Confirmados cada 100.000\n(${scale})`
            }
          }}
          dataFormat={resp => resp.filter(d => d.total_cada_100mil > 0)}
        />
      </Visualization>
    );
  }
}
