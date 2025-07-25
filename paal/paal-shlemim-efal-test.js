const test2 = new PaalShlemimEfal([
  "ב",
  "כ",
  "שׁ",
  "כְּתִיבָה",
  "write",
  "writes",
  "wrote",
  "writing",
]);
const test3 = new PaalShlemimEfal([
  "ד",
  "מ",
  "ל",
  "כְּתִיבָה",
  "write",
  "writes",
  "wrote",
  "writing",
]);

if (test2.infinitive() != "לִשְׁכַּב") {
  alert("Paal Shlemim Efal - failed at infinitive for לִשְׁכַּב");
  console.log(test2.infinitive());
}

if (test3.infinitive() != "לִלְמֹד") {
  alert("Paal Shlemim Efal - failed at infinitive");
  console.log(test3.infinitive());
}

if (test3.FutureFirstSingular() != "אֶלְמַד") {
  alert("Paal Shlemim Efal - failed at future first singular");
}

if (test3.FutureSecondSingularMasculine() != "תִּלְמַד") {
  alert("Paal Shlemim Efal - failed at future second singular masc");
}

if (test3.FutureSecondSingularFeminine() != "תִּלְמְדִי") {
  alert("Paal Shlemim Efal - failed at future second singular fem");
}

if (test3.FutureThirdSingularMasculine() != "יִלְמַד") {
  alert("Paal Shlemim Efal - failed at future third singular masc");
}

if (test3.FutureThirdSingularFeminine() != "תִּלְמַד") {
  alert("Paal Shlemim Efal - failed at future third singular fem");
}

if (test3.FutureFirstPlural() != "נִלְמַד") {
  alert("Paal Shlemim Efal - failed at future first plural");
}

if (test3.FutureSecondPluralMasculine() != "תִּלְמְדוּ") {
  alert("Paal Shlemim Efal - failed at future second plural masc");
}

if (test3.FutureSecondPluralFeminine() != "תִּלְמַדְנָה") {
  alert("Paal Shlemim Efal - failed at future second plural fem");
}

if (test3.FutureThirdPluralMasculine() != "יִלְמְדוּ") {
  alert("Paal Shlemim Efal - failed at future third plural masc");
}

if (test3.FutureThirdPluralFeminine() != "תִּלְמַדְנָה") {
  alert("Paal Shlemim Efal - failed at future third plural fem");
}

if (test3.ImperativeSingularMasculine() != "לְמַד") {
  alert("Paal Shlemim Efal - failed at imperative singular masc");
}
if (test3.ImperativeSingularFeminine() != "לִמְדִי") {
  alert("Paal Shlemim Efal - failed at imperative singular fem");
}
if (test3.ImperativePluralMasculine() != "לִמְדוּ") {
  alert("Paal Shlemim Efal - failed at imperative plural masc");
}

if (test3.ImperativePluralFeminine() != "לְמַדְנָה") {
  alert("Paal Shlemim Efal - failed at imperative plural fem");
}

// ENGLISH TESTS
const test4 = new PaalShlemimEfal([
  "ק",
  "ד",
  "צ",
  1,
  "be right",
  "is right",
  "were right",
  1,
]);

if (test4.PresentPluralMasculineEnglish() != "They (M) are right") {
  alert("Paal Shlemim Efal - failed at english plural pres");
}

if (test4.PastFirstSingularEnglish() != "I was right") {
  alert("Paal Shlemim Efal - failed at english past sing");
  console.log(test4.PastFirstSingularEnglish());
}

if (test4.PastThirdSingularMasculineEnglish() != "He was right") {
  alert("Paal Shlemim Efal - failed at english past sing");
  console.log(test4.PastThirdSingularMasculine());
}
if (test4.PastThirdSingularFeminineEnglish() != "She was right") {
  alert("Paal Shlemim Efal - failed at english past sing");
  console.log(test4.PastThirdSingularFeminineEnglish());
}
