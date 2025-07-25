function getDagesh(x) {
  if (dageshkal.includes(x)) {
    return x + "\u{05BC}";
  } else {
    return x;
  }
}

function getFinal(x) {
  console.log(x);

  if (x == "מ") {
    return "ם";
  } else if (x == "כ") {
    return "ך";
  } else if (x == "נ") {
    return "ן";
  } else if (x == "צ") {
    return "ץ";
  } else if (x == "פ") {
    return "ף";
  } else {
    return x;
  }
}
