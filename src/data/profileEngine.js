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