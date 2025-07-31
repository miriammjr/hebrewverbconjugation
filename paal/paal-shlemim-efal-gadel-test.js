const test5 = new PaalShlemimEfalGadel(["ל", "ד", "ג", 1, 1, 1, 1, 1]);
if (test5.PresentSingularMasculine() != "גָּדֵל") {
  alert("Paal shlemim efal gadel - failed at psm");
  console.log(test5.PresentSingularMasculine());
}
if (test5.PresentSingularFeminine() != "גְּדֵלָה") {
  alert("gadel - failed at psf");
  console.log(test5.PresentSingularFeminine());
}
if (test5.PresentPluralFeminine() != "גְּדֵלוֹת") {
  alert("gadel - failed at ppf");
  console.log(test5.PresentPluralFeminine());
}
if (test5.PresentPluralMasculine() != "גְּדֵלִים") {
  alert("gadel - failed at ppm");
  console.log(test5.PresentPluralMasculine());
}
