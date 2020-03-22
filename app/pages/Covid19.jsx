import React from "react";
import Section from "../components/Section";
import axios from "axios";
import ConfirmedCases from "./charts/ConfirmedCases";
import ConfirmedPerCapita from "./charts/ConfirmedPerCapita";
import ConfirmedPerDay from "./charts/ConfirmedPerDay";
import InternationalComparison from "./charts/InternationalComparison";


export default class Covid19 extends React.Component {
  state = {
    data: [],
    dataChile: [],
    source: "",
    updated: ""
  };

  fetchData = () => {
    axios.all([axios.get("/data.json"), axios.get("/data_country.json")]).then(
      axios.spread((...resp) => {
        const results = resp[0].data;
        const {data, source, updated} = results;
        const dates = data
          .map(d => d.fecha)
          .sort((a, b) => b > a ? 1 : -1);
        const latest = new Date(dates[0]);

        latest.setDate(latest.getDate() + 3);
        const dataChile = resp[1].data.data;
        this.setState({data, dataChile, source, updated, latest});
      })
    );
  };

  componentDidMount = () => {
    this.fetchData();
  };

  render() {
    return (
      <div className="page covid19">
        <Section title="Casos por Región">
          <ConfirmedCases {...this.state} />
          <ConfirmedPerCapita {...this.state} />
          <ConfirmedPerDay {...this.state} />
          <InternationalComparison {...this.state} />
        </Section>
        <Section title="PREGUNTAS FRECUENTES">
          <div id="faq-escalas" className="faq-item">
            <p>
              Crecimiento exponencial y escalas logarítmicas ¿Qué es el
              crecimiento exponencial? ¿Cómo se relaciona con el uso de escalas
              logarítmicas?
            </p>

            <p>
              Al comienzo de una epidemia, esta presenta un crecimiento
              exponencial, es decir, el número de contagiados se multiplica
              según un factor determinado, en lugar de sumar.
            </p>
            <p>
              Comparemos el crecimiento lineal que agrega 10 en cada paso de
              tiempo con el crecimiento exponencial que se multiplica por 2.
            </p>
            <p>
              Una secuencia de crecimiento lineal que agrega 10 en cada paso de
              tiempo se ve así:
            </p>
            <pre>
              0, 10, 20, 30, 40, 50, 60, 70, 80, 100 ...
            </pre>
            <p>
              Mientras que la secuencia exponencial que se multiplica por 2 en
              cada paso de tiempo se ve así:
            </p>
            <pre>
              1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 ...
            </pre>
            <p>
              Al principio, el crecimiento lineal parece más rápido (20 es mucho
              mayor que 4), pero el crecimiento lineal no se acelera. Agrega la
              misma cantidad cada vez.
            </p>
            <p>
              {" "}
              El crecimiento exponencial se acelera, agregando más en cada paso
              de tiempo, por lo que puede "explotar" en cualquier momento.
            </p>
          </div>
        </Section>
      </div>
    );
  }
}
