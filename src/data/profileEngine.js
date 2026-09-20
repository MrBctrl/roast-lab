export function getRoastCategory(roast) {
  if (roast < 33) {
    return "LIGHT ROAST";
  }

  if (roast < 67) {
    return "MEDIUM ROAST";
  }

  return "DARK ROAST";
}

export function getBodyCategory(body) {
  if (body < 33) {
    return "LIGHT BODY";
  }

  if (body < 67) {
    return "MEDIUM BODY";
  }

  return "HEAVY BODY";
}

export function getAcidityCategory(acidity) {
  if (acidity < 33) {
    return "LOW ACIDITY";
  }

  if (acidity < 67) {
    return "BALANCED ACIDITY";
  }

  return "BRIGHT ACIDITY";
}

export function getSweetnessCategory(sweetness) {
  if (sweetness < 33) {
    return "DRY";
  }

  if (sweetness < 67) {
    return "BALANCED";
  }

  return "SWEET";
}

export function getAromaCategory(aroma) {
  if (aroma < 33) {
    return "FLORAL";
  }

  if (aroma < 67) {
    return "FRUITY";
  }

  return "NUTTY";
}

export function getCoffeeProfile(calibration) {
  const {
    roast,
    body,
    acidity,
    sweetness,
    aroma,
  } = calibration;

  return {
    roast: getRoastCategory(roast),
    body: getBodyCategory(body),
    acidity: getAcidityCategory(acidity),
    sweetness: getSweetnessCategory(sweetness),
    aroma: getAromaCategory(aroma),
  };
}

export function getFlavorNotes(calibration) {
  const {
    roast,
    body,
    acidity,
    sweetness,
    aroma,
  } = calibration;

  const notes = [];

  if (roast >= 67) {
    notes.push("CACAO");
  } else if (roast >= 33) {
    notes.push("CHOCOLATE");
  } else {
    notes.push("CITRUS");
  }

  if (body >= 67) {
    notes.push("ALMOND");
  } else if (body >= 33) {
    notes.push("CARAMEL");
  } else {
    notes.push("TEA");
  }

  if (acidity >= 67) {
    notes.push("BERRIES");
  } else if (acidity >= 33) {
    notes.push("STONE FRUIT");
  } else {
    notes.push("MOLASSES");
  }

  if (sweetness >= 67) {
    notes.push("HONEY");
  } else if (sweetness >= 33) {
    notes.push("TOFFEE");
  } else {
    notes.push("DARK CACAO");
  }

  if (aroma >= 67) {
    notes.push("NUTTY");
  } else if (aroma >= 33) {
    notes.push("FRUITY");
  } else {
    notes.push("FLORAL");
  }

  return notes.slice(0, 5);
}

export function getRecommendedProduct(calibration) {
  const {
    roast,
    body,
    acidity,
    sweetness,
    aroma,
  } = calibration;

  /*
    Each product gets a score.

    We are not trying to simulate real
    coffee science here. This is the fictional
    Roast Lab product-matching system.
  */

  const products = [
    {
      name: "ORIGIN 01",
      description:
        "Bright, delicate and expressive.",
      score:
        (100 - roast) +
        (100 - body) +
        acidity +
        aroma,
    },

    {
      name: "DAILY 02",
      description:
        "Balanced, familiar and easy to return to.",
      score:
        100 -
        Math.abs(roast - 50) +
        100 -
        Math.abs(body - 50) +
        100 -
        Math.abs(acidity - 50),
    },

    {
      name: "NIGHT SHIFT 03",
      description:
        "Deep, heavy and unapologetically dark.",
      score:
        roast +
        body +
        sweetness +
        (100 - acidity),
    },

    {
      name: "RESERVE 04",
      description:
        "Complex, aromatic and deliberately unusual.",
      score:
        acidity +
        sweetness +
        aroma +
        Math.abs(roast - 50),
    },
  ];

  return products.reduce((best, current) =>
    current.score > best.score
      ? current
      : best,
  );
}

export function getProfileDescription(calibration) {
  const {
    roast,
    body,
    acidity,
    sweetness,
    aroma,
  } = calibration;

  const roastText =
    roast >= 67
      ? "deep and roasted"
      : roast >= 33
        ? "balanced and rounded"
        : "bright and delicate";

  const bodyText =
    body >= 67
      ? "with plenty of weight"
      : body >= 33
        ? "with a balanced mouthfeel"
        : "with a lighter structure";

  const acidityText =
    acidity >= 67
      ? "Bright acidity keeps the cup energetic."
      : acidity >= 33
        ? "Balanced acidity keeps the profile composed."
        : "Low acidity gives the cup a softer finish.";

  const sweetnessText =
    sweetness >= 67
      ? "A pronounced sweetness keeps the finish lingering."
      : sweetness >= 33
        ? "Moderate sweetness gives it a rounded finish."
        : "A drier finish keeps the profile restrained.";

  const aromaText =
    aroma >= 67
      ? "A strong aromatic character leads the experience."
      : aroma >= 33
        ? "A layered aroma sits comfortably behind the cup."
        : "A quieter aroma keeps attention on the core flavors.";

  return `${roastText}, ${bodyText}. ${acidityText} ${sweetnessText} ${aromaText}`;
}