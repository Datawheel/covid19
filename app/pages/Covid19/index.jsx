import React from "react";
import Section from "components/Section";
import axios from "axios";
import ConfirmedCases from "./charts/ConfirmedCases";
import ConfirmedPerCapita from "./charts/ConfirmedPerCapita";
import ConfirmedPerDay from "./charts/ConfirmedPerDay";
import InternationalComparison from "./charts/InternationalComparison";
import Nav from "../../components/Nav";

export default class Covid19 extends React.Component {
  state = {
    data: [],
    source: "",
    updated: ""
  }

  fetchData = () => {
    axios.get("/data.json").then(resp => {
      const results = resp.data;
      const {data, source, updated} = results;
      this.setState({data, source, updated});
    });

  }

  componentDidMount = () => {
    this.fetchData();
  }

  render() {
    const {data, updated} = this.state;
    return <div className="page">
      <Nav />
      <div className="hero">
        <h1 className="title">COVID-19 EN CHILE</h1>
        <h5 className="updated">Última actualización: {updated}</h5>
        <div className="description">
          <p>¿Cómo se está propagando el COVID-19 (también conocido como Coronavirus) en las diferentes regiones de Chile? ¿Qué tan rápido está creciendo? ¿La expansión del virus a nivel nacional presenta un comportamiento similar a otros países afectados?</p>
          <p>En Chilecracia, nuestra misión es informar a la ciudadanía sobre diferentes temas de interés nacional. La preocupación existente hoy en día por el aumento de casos de COVID-19 en nuestro país nos ha motivado ha visualizar y distribuir datos que permitan entender y analizar el comportamiento del virus en Chile.</p>
        </div>
      </div>
      <Section
        title="Casos por Región"
      >
        <ConfirmedCases {...this.state} />
        <ConfirmedPerCapita {...this.state} />
        <ConfirmedPerDay {...this.state} />
        <InternationalComparison {...this.state} />
      </Section>
    </div>;
  }
}
