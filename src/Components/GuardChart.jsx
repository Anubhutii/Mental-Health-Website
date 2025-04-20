import React, { useEffect, useState } from "react";

const GaugeChart = ({ score }) => {
  const size = 210;
  const radius = size / 2 - 30; // reduced to make space for labels
  const center = (size + 40) / 2;


  const segmentColors = ["#4DB59F", "#E02574", "#339DFF", "#4B0082"];
  const labels = [
    { text: "All Good", color: "green" },
    { text: "Mild Stress", color: "deeppink" },
    { text: "Anxiety", color: "dodgerblue" },
    { text: "High Risk", color: "purple" },
  ];

  const polarToCartesian = (angle, r = radius) => {
    const rad = (Math.PI * angle) / 180;
    return {
      x: center + r * Math.cos(rad),
      y: center + r * Math.sin(rad),
    };
  };

  const describeArc = (startAngle, endAngle) => {
    const start = polarToCartesian(startAngle);
    const end = polarToCartesian(endAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      1,
      end.x,
      end.y,
    ].join(" ");
  };

  // Needle Angle (0 to 360)
  const scoreClamped = Math.min(Math.max(score, 0), 45);
  const anglePerPoint = 360 / 45;
  const targetAngle = anglePerPoint * scoreClamped;

  // Needle color based on score range
  const getNeedleColor = () => {
    if (scoreClamped <= 14) return "#90EE90"; // green
    if (scoreClamped <= 24) return "#00B7B7"; // teal
    if (scoreClamped <= 34) return "#339DFF"; // blue
    return "#4B0082"; // purple
  };

  const [angle, setAngle] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAngle(targetAngle);
    }, 100);
    return () => clearTimeout(timeout);
  }, [targetAngle]);

  const needleLength = radius - 10;
  const { x: needleX, y: needleY } = polarToCartesian(angle, needleLength);

  return (
    <svg width={size + 40} height={size + 40}>
      {/* Circular segments */}
      {[0, 1, 2, 3].map((i) => {
        const start = i * 90;
        const end = start + 90;
        return (
          <path
            key={i}
            d={describeArc(start, end)}
            fill="none"
            stroke={segmentColors[i]}
            strokeWidth={30}
          />
        );
      })}
      {/* Labels */}
      {labels.map((label, i) => {
        const midAngle = i * 90 + 45;
        const { x, y } = polarToCartesian(midAngle, radius + 45); // push labels out
        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="11"
            fontWeight="bold"
            fill={label.color}
          >
            {label.text}
          </text>
        );
      })}

      {/* Needle */}
      <line
        x1={center}
        y1={center}
        x2={needleX}
        y2={needleY}
        stroke={getNeedleColor()}
        strokeWidth={2}
        style={{
          transition: "all 1s ease-out",
        }}
      />
      <circle cx={center} cy={center} r={6} fill="black" />
    </svg>
  );
};

export default GaugeChart;
