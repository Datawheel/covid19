/**
  The object exported by this file will be used as a base config for any
  d3plus-react visualization rendered on the page.
*/
import {extent, max, mean, merge, min} from "d3-array";

const colors = {
  0: "#BF3C25",
  15: "#845EC2",
  1: "#D65DB1",
  2: "#FF6F91",
  3: "#FF9671",
  4: "#E57B89",
  5: "#D26F9D",
  13: "#5379D0",
  6: "#007FC9",
  7: "#007DA4",
  16: "#674A65",
  8: "#6074B5",
  9: "#B97562",
  14: "#65CE90",
  10: "#39BC99",
  11: "#02A99D",
  12: "#009CB6"
};

const axisStyles = {
  barConfig: {
    stroke: "#ccc"
  },
  gridConfig: {
    stroke: "#ccc"
  },
  shapeConfig: {
    labelConfig: {
      fontColor: () => "#211f1a",
      fontFamily: () => "Open Sans, sans-serif",
      fontSize: () => 14,
      fontWeight: () => 400
    },
    stroke: "#ccc"
  },
  tickSize: 5,
  titleConfig: {
    fontColor: () => "#211f1a",
    fontFamily: () => "Open Sans, sans-serif",
    fontSize: () => 16,
    fontWeight: () => 400
  }
};
export default {
  xConfig: {...axisStyles},
  yConfig: {
    ...axisStyles,
    tickFormat: d => d
  },
  shapeConfig: {
    Line: {
      curve: "monotoneX",
      label: d => d.region || d.Geography,
      labelConfig: {
        fontColor: d => colors[d.region_id] || "#1b1b1b",
        fontFamily: () => ["Pathway Gothic One", "Arial Narrow", "sans-serif"],
        fontSize: () => 14,
        fontWeight: () => 700,
        padding: 0,
        verticalAlign: "middle"
      },
      labelBounds: (d, i, s) => {
        const yExtent = extent(s.points.map(p => p[1]));
        if (yExtent[1] - yExtent[0] > 5) {
          const [firstX, firstY] = s.points[0];
          const [lastX, lastY] = s.points[s.points.length - 1];
          const height = 30;
          return   {
            x: lastX - firstX + 5,
            y: lastY - firstY - height / 2 + 1,
            width: 200,
            height
          };
        }
        return false;
      },
      stroke: d => colors[d.region_id] || "#cccccc",
      strokeLinecap: "round",
      strokeWidth: 3
    },
    labelConfig: {
      fontFamily: "Open Sans"
    }
  },
  tooltipConfig: {
    tbody: d => {
      const output = [];
      if (d.confirmados) output.push(["Casos Confirmados", d.confirmados]);
      if (d.casos_acum) output.push(["Casos a la fecha", d.casos_acum]);
      if (d.fecha) output.push(["Fecha", d.fecha]);
      return output;
    }
  }
};
