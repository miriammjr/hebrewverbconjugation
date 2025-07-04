// TESTS פעל שלמים אפעול for dageshim etc.
// will alert if any fails
const test1 = new PaalShlemimEfol(
  "ב",
  "ת",
  "כ",
  "כְּתִיבָה",
  "write",
  "writes",
  "wrote"
);

if (test1.infinitive() != "לִכְתֹּב") {
  alert("Failed at infinitive");
}
if (test1.presentMascSing() != "כּוֹתֵב") {
  alert("Failed at present masculine singular");
}
if (test1.presentFemSing() != "כּוֹתֶבֶת") {
  alert("Failed at present feminine singular");
}
if (test1.presentMascPlural() != "כּוֹתְבִים") {
  alert("Failed at present masculine plural");
}
if (test1.presentFemPlural() != "כּוֹתְבוֹת") {
  alert("Failed at present feminine plural");
}
if (test1.pastFirstSingular() != "כָּתַבְתִּי") {
  alert("Failed at past first person singular");
}
if (test1.pastSecondSingularMale() != "כָּתַבְתָּ") {
  alert("Failed at second person singular masculine past");
}
if (test1.pastSecondSingularFemale() != "כָּתַבְתְּ") {
  alert("FAiled at second person singular feminine past");
}
if (test1.pastThirdSingularMale() != "כָּתַב") {
  alert("Failed at third person singular masculine past");
}
if (test1.pastThirdSingularFemale() != "כָּתְבָה") {
  alert("Failed at third person singular feminine past");
}
if (test1.pastFirstPersonPlural() != "כָּתַבְנוּ") {
  alert("Failed at first person plural past");
}
if (test1.pastSecondPluralMale() != "כְּתַבְתֶּם") {
  alert("Failed at second person plural masculine past");
}
if (test1.pastSecondPluralFemale() != "כְּתַבְתֶּן") {
  alert("Failed at second person plural feminine past");
}
if (test1.pastThirdPlural() != "כָּתְבוּ") {
  alert("Failed at third person plural past");
}
if (test1.futureFirstSing() != "אֶכְתֹּב") {
  alert("Failed at first person singular future");
}
if (test1.futureSecondMasculineSing() != "תִּכְתֹּב") {
  alert("Failed at second person singular masculine future");
}
if (test1.futureSecondFeminineSing() != "תִּכְתְּבִי") {
  alert("FAiled at second person singular feminine future");
}
if (test1.futureThirdMasculineSing() != "יִכְתֹּב") {
  alert("Failed at third person singular masculine future");
}
if (test1.futureThirdFeminineSing() != "תִּכְתֹּב") {
  alert("Failed at third person singular feminine future");
}
if (test1.futureFirstPlural() != "נִכְתֹּב") {
  alert("Failed at first person plural future");
}
if (test1.futureSecondMascPlural() != "תִּכְתְּבוּ") {
  alert("Failed at second person plural masculine future");
}
if (test1.futureSecondFemininePlural() != "תִּכְתֹּבְנָה") {
  alert("FAiled at second person plural feminine future");
}
if (test1.futureThirdPlural() != "יִכְתְּבוּ") {
  alert("Failed at third person plural future");
}
if (test1.futureThirdFemininePlural() != "תִּכְתֹּבְנָה") {
  alert("Failed at third person plural feminine future");
}
if (test1.imperativeMasculine() != "כְּתֹב") {
  alert("Failed at singular masculine imperative");
}
if (test1.imperativeFeminine() != "כִּתְבִי") {
  alert("Failed at singular feminine imperative");
}
if (test1.imperativePlural() != "כִּתְבוּ") {
  alert("FAiled at plural imperative");
}
if (test1.imperativeFemininePlural() != "כְּתֹבְנָה") {
  alert("Failed at plural feminine imperative");
}
