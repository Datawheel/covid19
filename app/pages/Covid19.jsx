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
        const dates = data.map(d => d.fecha).sort((a, b) => b > a ? 1 : -1);
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
            <pre>0, 10, 20, 30, 40, 50, 60, 70, 80, 100 ...</pre>
            <p>
              Mientras que la secuencia exponencial que se multiplica por 2 en
              cada paso de tiempo se ve así:
            </p>
            <pre>1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 ...</pre>
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
            <p>
              Después de 10 pasos, el crecimiento lineal (+10) nos lleva a 100.
              El crecimiento exponencial (x2) nos lleva a (1,024). Después de 20
              pasos, el crecimiento lineal solo nos lleva a 200 y el crecimiento
              exponencial supera el millón.
            </p>
            <p>
              El crecimiento exponencial es tan rápido que para apreciarlo mejor
              es necesario usar escalas logarítmicas. Estas son escalas que
              también crecen por múltiplos. Por ejemplo, una escala logarítmica
              entre 1 y 1.000.000 va de 1 a 10, de 10 a 100, de 100 a 1.000, de
              1.000 a 10.000, de 10.000 a 100.000, y de 100.000 a 1.000.000.
              Esta es una escala logarítmica en base 10, porque se multiplica
              por diez cada vez. Lo que muestra esta escala es que, en el
              crecimiento exponencial, 1.000 está a medio camino de 1.000.000.
              Por eso es importante detener el crecimiento exponencial incluso
              si los números parecen pequeños. El mismo número de pasos que te
              llevan de 1 a 1.000 te lleva de 1.000 a 1.000.000.
            </p>
            <p>
              Estrictamente hablando, los procesos epidémicos son solo
              exponenciales desde el principio, cuando el número de casos es
              pequeño en comparación con el tamaño de la población u otros
              factores limitantes. Luego, el crecimiento se desvanece, ya sea
              porque la propagación se generalizó o porque otros factores, como
              el distanciamiento físico o la inmunización, reducen la velocidad
              de propagación. Para obtener más información sobre las formas
              funcionales básicas de propagación de epidemias, puedes ver{" "}
              <a href="https://www.youtube.com/watch?v=Kas0tIxDvrg">este</a>
              video preparado por el CDC (Centros para el Control y la
              Prevención de Enfermedades​ en EE.UU).
            </p>
          </div>
        </Section>
      </div>
    );
  }
}
