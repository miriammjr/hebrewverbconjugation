// TESTS פעל שלמים אפעול for dageshim etc.
// will alert if any fails
const test1 = new PaalShlemimEfol([
  "ב",
  "ת",
  "כ",
  "כְּתִיבָה",
  "write",
  "writes",
  "wrote",
  "writing",
]);

if (test1.infinitive() != "לִכְתֹּב") {
  alert("Failed at infinitive");
}
if (test1.PresentSingularMasculine() != "כּוֹתֵב") {
  alert("Failed at Present masculine singular");
}
if (test1.PresentSingularFeminine() != "כּוֹתֶבֶת") {
  alert("Failed at Present feminine singular");
}
if (test1.PresentPluralMasculine() != "כּוֹתְבִים") {
  alert("Failed at Present masculine plural");
}
if (test1.PresentPluralFeminine() != "כּוֹתְבוֹת") {
  alert("Failed at Present feminine plural");
}
if (test1.PastFirstSingular() != "כָּתַבְתִּי") {
  alert("Failed at Past first person singular");
}
if (test1.PastSecondSingularMasculine() != "כָּתַבְתָּ") {
  alert("Failed at second person singular masculine Past");
}
if (test1.PastSecondSingularFeminine() != "כָּתַבְתְּ") {
  alert("FAiled at second person singular feminine Past");
}
if (test1.PastThirdSingularMasculine() != "כָּתַב") {
  alert("Failed at third person singular masculine Past");
}
if (test1.PastThirdSingularFeminine() != "כָּתְבָה") {
  alert("Failed at third person singular feminine Past");
}
if (test1.PastFirstPlural() != "כָּתַבְנוּ") {
  alert("Failed at first person plural Past");
}
if (test1.PastSecondPluralMasculine() != "כְּתַבְתֶּם") {
  alert("Failed at second person plural masculine Past");
}
if (test1.PastSecondPluralFeminine() != "כְּתַבְתֶּן") {
  alert("Failed at second person plural feminine Past");
}
if (test1.PastThirdPlural() != "כָּתְבוּ") {
  alert("Failed at third person plural Past");
}
if (test1.FutureFirstSingular() != "אֶכְתֹּב") {
  alert("Failed at first person singular Future");
}
if (test1.FutureSecondSingularMasculine() != "תִּכְתֹּב") {
  alert("Failed at second person singular masculine Future");
}
if (test1.FutureSecondSingularFeminine() != "תִּכְתְּבִי") {
  alert("FAiled at second person singular feminine Future");
}
if (test1.FutureThirdSingularMasculine() != "יִכְתֹּב") {
  alert("Failed at third person singular masculine Future");
}
if (test1.FutureThirdSingularFeminine() != "תִּכְתֹּב") {
  alert("Failed at third person singular feminine Future");
}
if (test1.FutureFirstPlural() != "נִכְתֹּב") {
  alert("Failed at first person plural Future");
}
if (test1.FutureSecondPluralMasculine() != "תִּכְתְּבוּ") {
  alert("Failed at second person plural masculine Future");
}
if (test1.FutureSecondPluralFeminine() != "תִּכְתֹּבְנָה") {
  alert("FAiled at second person plural feminine Future");
}
if (test1.FutureThirdPluralMasculine() != "יִכְתְּבוּ") {
  alert("Failed at third person plural Future");
}
if (test1.FutureThirdPluralFeminine() != "תִּכְתֹּבְנָה") {
  alert("Failed at third person plural feminine Future");
}
if (test1.ImperativeSingularMasculine() != "כְּתֹב") {
  alert("Failed at singular masculine Imperative");
}
if (test1.ImperativeSingularFeminine() != "כִּתְבִי") {
  alert("Failed at singular feminine Imperative");
}
if (test1.ImperativePluralMasculine() != "כִּתְבוּ") {
  alert("FAiled at plural Imperative");
}
if (test1.ImperativePluralFeminine() != "כְּתֹבְנָה") {
  alert("Failed at plural feminine Imperative");
}
if (test1.infinitiveEnglish() != "to write") {
  alert("Failed at English infinitive");
}
if (test1.PresentSingularMasculineEnglish() != "He writes") {
  alert("Failed at Present masc singular English");
}
if (test1.PresentSingularFeminineEnglish() != "She writes") {
  alert("Failed at Present feminine singular English");
}
if (test1.PresentPluralMasculineEnglish() != "They (M) write") {
  alert("Failed at Present masculine plural English");
}
if (test1.PresentPluralFeminineEnglish() != "They (F) write") {
  alert("Failed at Present feminine plural English");
}
if (test1.PastFirstSingularEnglish() != "I wrote") {
  alert("Failed at first person Past English");
}
if (test1.PastSecondSingularMasculineEnglish() != "You (M, S) wrote") {
  alert("FAiled at Past singular second person English");
}
if (test1.PastSecondSingularFeminineEnglish() != "You (F, S) wrote") {
  alert("Failed at Past singular feminine second person English");
}
if (test1.PastThirdSingularMasculineEnglish() != "He wrote") {
  alert("Failed at Past third singular male English");
}
if (test1.PastThirdSingularFeminineEnglish() != "She wrote") {
  alert("FAiled at Past third person singular feminine English");
}
if (test1.PastFirstPluralEnglish() != "We wrote") {
  alert("Failed at Past first person plural English");
}
if (test1.PastSecondPluralMasculineEnglish() != "You (M, P) wrote") {
  alert(
    "Failed at Past second person plural masculine Past English (" +
      test1.PastSecondPluralMasculine() +
      ")"
  );
}
if (test1.PastSecondPluralFeminineEnglish() != "You (F, P) wrote") {
  alert("failed at Past second person plural feminine English");
}
if (test1.PastThirdPluralEnglish() != "They wrote") {
  alert("failed at Past third person plural English");
}
if (test1.FutureFirstSingularEnglish() != "I will write") {
  alert("FAiled at Future first person singular English");
}
if (test1.FutureSecondSingularMasculineEnglish() != "You (M, S) will write") {
  alert("failed at second person masculine singular Future English");
}
if (test1.FutureSecondSingularFeminineEnglish() != "You (F, S) will write") {
  alert("failed at second person feminine singular Future English");
}
if (test1.FutureThirdSingularMasculineEnglish() != "He will write") {
  alert("failed at third person singular masculine Future English");
}
if (test1.FutureThirdSingularFeminineEnglish() != "She will write") {
  alert("failed at third person singular feminine Future english");
}
if (test1.FutureFirstPluralEnglish() != "We will write") {
  alert("failed at first person plural Future English");
}
if (test1.FutureSecondPluralMasculineEnglish() != "You (M/N, P) will write") {
  alert("failed at second person plural masculine Future english");
}
if (test1.FutureSecondPluralFeminineEnglish() != "You (F, P) will write") {
  alert("failed at second person plural feminine Future english");
}
if (test1.FutureThirdPluralMasculineEnglish() != "They (M/N) will write") {
  alert("failed at third person plural Future masculine english");
}
if (test1.FutureThirdPluralFeminineEnglish() != "They (F) will write") {
  alert("failed at third person plural Future feminine english");
}
if (test1.ImperativeSingularMasculineEnglish() != "Write! (M, S)") {
  alert("failed at Imperative masculine english");
}
if (test1.ImperativeSingularFeminineEnglish() != "Write! (F, S)") {
  alert("failed at Imperative feminine english");
}
if (test1.ImperativePluralMasculineEnglish() != "Write! (M/N, P)") {
  alert("failed at Imperative plural masculine english");
}
if (test1.ImperativePluralFeminineEnglish() != "Write! (F, P)") {
  alert(
    "failed at Imperative plural feminine english: " +
      test1.ImperativePluralFeminineEnglish()
  );
}
