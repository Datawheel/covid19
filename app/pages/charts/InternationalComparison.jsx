import React from "react";
import Visualization from "../../components/Visualization";
import ButtonGroupV2 from "../../components/ButtonGroupV2";
import {LinePlot} from "d3plus-react";
import axios from "axios";

export default class InternationalComparison extends React.Component {
  state = {
    data: [],
    domain: [1, 10],
    scale: "Logarítmica"
  };

  componentDidMount() {
    axios.all([
      axios.get("/api/coronavirus"),
      axios.get("/data_country.json"),
      axios.get("/data.json")
    ]).then(axios.spread((...resp) => {
      const dataApi = resp[0].data;
      const dataChile = resp[1].data;
      const dataRegion = resp[2].data.data;
      const {countries} = dataApi;
      let {data} = dataChile;
      data = [...data, ...dataRegion];

      let days = 0;
      let comparison = "";
      data.forEach(d => {
        if (d.region !== comparison) {
          comparison = d.region;
          days = 0;
        }
        if (d.casos_acum >= 100) {
          days += 1;
        }
        d.Days = days;
        d.Geography = d.region;
        d.Confirmed = d.casos_acum;
        d.Rate = d.total_cada_100mil;
      });

      const max = Math.max(...data.map(d => d.Days));

      this.setState({
        data: [...countries, ...data].filter(d => d.Days > 0 && d.Days <= max + 21),
        domain: [1, max + 28]
      });
    }));

  }
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
          "Una manera de tomar medidas frente al COVID-19 es analizar el comportamiento del virus en otros países, estudiar las medidas que estos han implementados y analizar sus efectos en las respectivas curvas de contagiados. Para ello, esta visualización compara el número de contagiados cada 100.000 habitantes en Chile con otros países que han presentado un alto número de personas contagiadas.",
          "Cambiamos todos los puntos de partida al día en que cada lugar informó un total de 100 casos o más."
        ]}
        source={source}
        title="Comparación Internacional"
      >
        <LinePlot
          config={{
            data: this.state.data,
            x: "Days",
            discrete: "x",
            groupBy: ["Geography"],
            legend: false,
            xDomain: this.state.domain,
            xConfig: {
              tickFormat: d => d % 2 ? `Día ${d}` : ""
            },
            y: "Rate",
            yConfig: {
              scale: scale === "Lineal" ? "linear" : "log",
              title: `Casos Confirmados cada 100.000\n(${scale})`
            }
          }}
        />
      </Visualization>
    );
  }
}
