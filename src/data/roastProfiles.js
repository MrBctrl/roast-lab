const roastStops = [
  {
    value: 0,
    color: "#7a5a43",
  },
  {
    value: 50,
    color: "#4d3023",
  },
  {
    value: 100,
    color: "#24140d",
  },
];

function hexToRgb(hex) {
  const cleanHex = hex.replace("#", "");

  return {
    r: parseInt(cleanHex.slice(0, 2), 16),
    g: parseInt(cleanHex.slice(2, 4), 16),
    b: parseInt(cleanHex.slice(4, 6), 16),
  };
}

function rgbToHex({ r, g, b }) {
  return (
    "#" +
    [r, g, b]
      .map((value) => Math.round(value).toString(16).padStart(2, "0"))
      .join("")
  );
}

function interpolateColor(startColor, endColor, amount) {
  const start = hexToRgb(startColor);
  const end = hexToRgb(endColor);

  return rgbToHex({
    r: start.r + (end.r - start.r) * amount,
    g: start.g + (end.g - start.g) * amount,
    b: start.b + (end.b - start.b) * amount,
  });
}

export function getBeanColor(roast) {
  let start = roastStops[0];
  let end = roastStops[1];

  if (roast > 50) {
    start = roastStops[1];
    end = roastStops[2];
  }

  const range = end.value - start.value;

  const amount = (roast - start.value) / range;

  return interpolateColor(start.color, end.color, amount);
}

export function getRoastProfile(roast) {
  if (roast < 33) {
    return {
      level: "LIGHT ROAST",
      description:
        "Bright, expressive and delicate. Expect a cleaner cup with a lively finish.",
      notes: ["CITRUS", "FLORAL", "TEA"],
      product: "ORIGIN 01",
    };
  }

  if (roast < 67) {
    return {
      level: "MEDIUM ROAST",
      description:
        "Balanced and familiar, with enough depth to keep the cup interesting.",
      notes: ["CARAMEL", "CHOCOLATE", "ALMOND"],
      product: "DAILY 02",
    };
  }

  return {
    level: "DARK ROAST",
    description:
      "Deep, heavy and intense, with a darker finish built around roasted sweetness.",
    notes: ["CACAO", "MOLASSES", "NUTTY"],
    product: "NIGHT SHIFT 03",
  };
}
export function getRoastMetrics(roast) {
  return {
    brightness: 100 - roast,
    depth: roast,
    intensity: Math.round(30 + roast * 0.7),
  };
}