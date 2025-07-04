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
if (test1.infinitiveEnglish() != "to write") {
  alert("Failed at English infinitive");
}
if (test1.presentMascSingEnglish() != "He writes") {
  alert("Failed at present masc singular English");
}
if (test1.presentFemSingEnglish() != "She writes") {
  alert("Failed at present feminine singular English");
}
if (test1.presentMascPluralEnglish() != "They (M) write") {
  alert("Failed at present masculine plural English");
}
if (test1.presentFemPluralEnglish() != "They (F) write") {
  alert("Failed at present feminine plural English");
}
if (test1.pastFirstSingularEnglish() != "I wrote") {
  alert("Failed at first person past English");
}
if (test1.pastSecondSingularMaleEnglish() != "You (M, S) wrote") {
  alert("FAiled at past singular second person English");
}
if (test1.pastSecondSingularFemaleEnglish() != "You (F, S) wrote") {
  alert("Failed at past singular feminine second person English");
}
if (test1.pastThirdSingularMaleEnglish() != "He wrote") {
  alert("Failed at past third singular male English");
}
if (test1.pastThirdSingularFemaleEnglish() != "She wrote") {
  alert("FAiled at past third person singular feminine English");
}
if (test1.pastFirstPersonPluralEnglish() != "We wrote") {
  alert("Failed at past first person plural English");
}
if (test1.pastSecondPluralMale() != "You (M, P) wrote") {
  alert("Failed at past second person plural masculine past English");
}
if (test1.pastSecondPluralFemaleEnglish() != "You (F, P) wrote") {
  alert("failed at past second person plural feminine English");
}
if (test1.pastThirdPluralEnglish() != "They wrote") {
  alert("failed at past third person plural English");
}
if (test1.futureFirstSingEnglish() != "I will write") {
  alert("FAiled at future first person singular English");
}
if (test1.futureSecondMasculineSingEnglish() != "You (M, S) will write") {
  alert("failed at second person masculine singular future English");
}
if (test1.futureSecondFeminineSingEnglish() != "You (F, S) will write") {
  alert("failed at second person feminine singular future English");
}
if (test1.futureThirdMasculineSingEnglish() != "He will write") {
  alert("failed at third person singular masculine future English");
}
if (test1.futureThirdFeminineSingEnglish() != "She will write") {
  alert("failed at third person singular feminine future english");
}
if (test1.futureFirstPluralEnglish() != "We will write") {
  alert("failed at first person plural future English");
}
if (test1.futureSecondMascPluralEnglish() != "You (M, P) will write") {
  alert("failed at second person plural masculine future english");
}
if (test1.futureSecondFemininePluralEnglish() != "You (F, P) will write") {
  alert("failed at second person plural feminine future english");
}
if (test1.futureThirdPluralEnglish() != "They (M) will write") {
  alert("failed at third person plural future masculine english");
}
if (test1.futureThirdFemininePluralEnglish() != "They (F) will write") {
  alert("failed at third person plural future feminine english");
}
if (test1.imperativeMasculineEnglish() != "write! (M, S") {
  alert("failed at imperative masculine english");
}
if (test1.imperativeFeminineEnglish() != "write! (F, S)") {
  alert("failed at imperative feminine english");
}
if (test1.imperativePluralEnglish() != "write! (M, P") {
  alert("failed at imperative plural masculine english");
}
if (test1.imperativeFemininePluralEnglish() != "write! (F, P") {
  alert("failed at imperative plural feminine english");
}
