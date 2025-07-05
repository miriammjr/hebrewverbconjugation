// PAAL SHLEMIM EFOL

class PaalShlemimEfol {
  constructor(a, b, c, gerund, Present, Presentthird, Past) {
    this.root1 = a;
    this.root2 = b;
    this.root3 = c;
    this.gerund = gerund;
    this.Present = Present;
    this.Presentthird = Presentthird;
    this.Past = Past;
    this.verbType = "פעל";
    this.gzera = "שלמים (אפעול)";

    if (dageshkal.includes(this.root1)) {
      this.root1dagesh = this.root1 + "\u{05BC}";
    } else {
      this.root1dagesh = this.root1;
    }
    if (dageshkal.includes(this.root2)) {
      this.root2dagesh = this.root2 + "\u{05BC}";
    } else {
      this.root2dagesh = this.root2;
    }
    if (dageshkal.includes(this.root3)) {
      this.root3dagesh = this.root3 + "\u{05BC}";
    } else {
      this.root3dagesh = this.root3;
    }
  }

  // לִ +
  // root 1 + shva
  // root 2 + holam + dagesh
  // root 3
  infinitive() {
    return (
      "לִ" +
      this.root3 +
      "\u{05B0}" +
      this.root2dagesh +
      "\u{05B9}" +
      this.root1
    );
  }

  // should return the Present masculine singular
  // root 1: no vowel, dagesh
  // add vav
  // root 2: צירי, no dagesh
  // root 3: no vowel, no dagesh
  PresentSingularMasculine() {
    return this.root3dagesh + "וֹ" + this.root2 + "\u{05B5}" + this.root1;
  }

  // root 1: no vowel, dagesh
  // add vav
  // root 2: סגול
  // root 3: סגול
  // add tet
  PresentSingularFeminine() {
    return (
      this.root3dagesh +
      "וֹ" +
      this.root2 +
      "\u{05B6}" +
      this.root1 +
      "\u{05B6}" +
      "ת"
    );
  }

  // root 1: no vowel, dagesh
  // add vav
  // root 2: shva
  // root 3: khirik
  // add ים
  PresentPluralMasculine() {
    return (
      this.root3dagesh +
      "וֹ" +
      this.root2 +
      "\u{05B0}" +
      this.root1 +
      "\u{05B4}" +
      "ים"
    );
  }

  // root 1: no vowel, dagesh
  // add vav
  // root 2: shva
  // root 3: no vowel
  // add ot
  PresentPluralFeminine() {
    return (
      this.root3dagesh + "וֹ" + this.root2 + "\u{05B0}" + this.root1 + "וֹת"
    );
  }

  // root 1: kamatz, dagesh
  // root 2: patakh
  // root 3: shva
  // add תִּי
  PastFirstSingular() {
    return (
      this.root3dagesh +
      "\u{05B8}" +
      this.root2 +
      "\u{05B7}" +
      this.root1 +
      "\u{05B0}" +
      "תִּי"
    );
  }

  // root 1: kamatz, dagesh
  // root 2: patakh
  // root 3: shva
  // add תָּ
  PastSecondSingularMasculine() {
    return (
      this.root3dagesh +
      "\u{05B8}" +
      this.root2 +
      "\u{05B7}" +
      this.root1 +
      "\u{05B0}" +
      "תָּ"
    );
  }

  // root 1: kamatz, dagesh
  // root 2: patakh
  // root 3: shva
  // add תְּ
  PastSecondSingularFeminine() {
    return (
      this.root3dagesh +
      "\u{05B8}" +
      this.root2 +
      "\u{05B7}" +
      this.root1 +
      "\u{05B0}" +
      "תְּ"
    );
  }

  // root 1: kamatz, dagesh
  // root 2: patakh
  // root 3: none
  PastThirdSingularMasculine() {
    return this.root3dagesh + "\u{05B8}" + this.root2 + "\u{05B7}" + this.root1;
  }

  // root 1: kamatz, dagesh
  // root 2: shva
  // root 3: kamatz
  // add ה
  PastThirdSingularFeminine() {
    return (
      this.root3dagesh +
      "\u{05B8}" +
      this.root2 +
      "\u{05B0}" +
      this.root1 +
      "\u{05B8}" +
      "ה"
    );
  }

  // root 1: add kamatz, dagesh
  // root 2: add patakh
  // root 3: add shva
  // add נוּ
  PastFirstPlural() {
    return (
      this.root3dagesh +
      "\u{05B8}" +
      this.root2 +
      "\u{05B7}" +
      this.root1 +
      "\u{05B0}" +
      "נוּ"
    );
  }

  // root 1: add shva, dagesh
  // root 2: add patakh
  // root 3: add shva
  // add תֶּם
  PastSecondPluralMasculine() {
    return (
      this.root3dagesh +
      "\u{05B0}" +
      this.root2 +
      "\u{05B7}" +
      this.root1 +
      "\u{05B0}" +
      "תֶּם"
    );
  }

  // root 1: add shva,dagesh
  // root 2: add patakh
  // root 3: add shva
  // add תֶּן
  PastSecondPluralFeminine() {
    return (
      this.root3dagesh +
      "\u{05B0}" +
      this.root2 +
      "\u{05B7}" +
      this.root1 +
      "\u{05B0}" +
      "תֶּן"
    );
  }

  // root 1: add kamatz, dagesh
  // root 2: add shva
  // root 3: none
  // add וּ
  PastThirdPlural() {
    return (
      this.root3dagesh +
      "\u{05B8}" +
      this.root2 +
      "\u{05B0}" +
      this.root1 +
      "וּ"
    );
  }

  // add אֶ
  // root 1: add shva
  // root 2: add dagesh and kholam
  // root 3: none
  FutureFirstSingular() {
    return (
      "אֶ" +
      this.root3 +
      "\u{05B0}" +
      this.root2dagesh +
      "\u{05B9}" +
      this.root1
    );
  }

  // add תִּ
  // root 1: add shva
  // root 2: add dagesh and kholam
  // root 3: none
  FutureSecondSingularMasculine() {
    return (
      "תִּ" +
      this.root3 +
      "\u{05B0}" +
      this.root2dagesh +
      "\u{05B9}" +
      this.root1
    );
  }

  // add תִּ
  // root 1: add shva
  // root 2: add dagesh and shva
  // root 3: add khirik
  // add י
  FutureSecondSingularFeminine() {
    return (
      "תִּ" +
      this.root3 +
      "\u{05B0}" +
      this.root2dagesh +
      "\u{05B0}" +
      this.root1 +
      "\u{05B4}" +
      "י"
    );
  }

  // add יִ
  // root 1: add shva
  // root 2: add dagesh and kholam
  // root 3: none
  FutureThirdSingularMasculine() {
    return (
      "יִ" +
      this.root3 +
      "\u{05B0}" +
      this.root2dagesh +
      "\u{05B9}" +
      this.root1
    );
  }

  // same as second person singular masc
  FutureThirdSingularFeminine() {
    return (
      "תִּ" +
      this.root3 +
      "\u{05B0}" +
      this.root2dagesh +
      "\u{05B9}" +
      this.root1
    );
  }

  // add נִ
  // root 1: add shva
  // root 2: add dagesh and kholam
  // root 3: none
  FutureFirstPlural() {
    return (
      "נִ" +
      this.root3 +
      "\u{05B0}" +
      this.root2dagesh +
      "\u{05B9}" +
      this.root1
    );
  }

  // add "תִּ"
  // root 1: add shva
  // root 2: add shva + dagesh
  // root 3: none
  // add וּ
  FutureSecondPluralMasculine() {
    return (
      "תִּ" +
      this.root3 +
      "\u{05B0}" +
      this.root2dagesh +
      "\u{05B0}" +
      this.root1 +
      "וּ"
    );
  }

  // add תִּ
  // root 1 + shva
  // root 2 + kholam + dagesh
  // root 3 + shva
  // add "נָה"
  FutureSecondPluralFeminine() {
    return (
      "תִּ" +
      this.root3 +
      "\u{05B0}" +
      this.root2dagesh +
      "\u{05B9}" +
      this.root1 +
      "\u{05B0}" +
      "נָה"
    );
  }

  // add יִ
  // root 1: add shva
  // root 2: add shva + dagesh
  // root 3: none
  // add וּ
  FutureThirdPluralMasculine() {
    return (
      "יִ" +
      this.root3 +
      "\u{05B0}" +
      this.root2dagesh +
      "\u{05B0}" +
      this.root1 +
      "וּ"
    );
  }

  // add תִּ
  // root 1 + shva
  // root 2 + kholam + dagesh
  // root 3 + shva
  // add "נָה"
  FutureThirdPluralFeminine() {
    return (
      "תִּ" +
      this.root3 +
      "\u{05B0}" +
      this.root2dagesh +
      "\u{05B9}" +
      this.root1 +
      "\u{05B0}" +
      "נָה"
    );
  }

  // root 1: add shva, dagesh
  // root 2: add  holam
  // root 3: none
  ImperativeSingularMasculine() {
    return this.root3dagesh + "\u{05B0}" + this.root2 + "\u{05B9}" + this.root1;
  }

  // root 1: add khirik, dagesh
  // root 2: add shva
  // root 3: add khirik
  // add yod
  ImperativeSingularFeminine() {
    return (
      this.root3dagesh +
      "\u{05B4}" +
      this.root2 +
      "\u{05B0}" +
      this.root1 +
      "\u{05B4}" +
      "י"
    );
  }

  // root 1: add khirik, dagesh
  // root 2: add shva
  // root 3: none
  // add vav + dagesh
  ImperativePluralMasculine() {
    return (
      this.root3dagesh +
      "\u{05B4}" +
      this.root2 +
      "\u{05B0}" +
      this.root1 +
      "וּ"
    );
  }

  // root 1: add shva, dagesh
  // root 2: add kholam
  // root 3: add shva
  // add נָה
  ImperativePluralFeminine() {
    return (
      this.root3dagesh +
      "\u{05B0}" +
      this.root2 +
      "\u{05B9}" +
      this.root1 +
      "\u{05B0}" +
      "נָה"
    );
  }

  // ENGLISH
  // SHOULD BE THE SAME FOR ALL VERBS (EXCEPT "TO BE")

  infinitiveEnglish() {
    return "to " + this.Present;
  }

  PresentSingularMasculineEnglish() {
    return "He " + this.Presentthird;
  }

  PresentSingularFeminineEnglish() {
    return "She " + this.Presentthird;
  }
  PresentPluralMasculineEnglish() {
    return "They (M) " + this.Present;
  }
  PresentPluralFeminineEnglish() {
    return "They (F) " + this.Present;
  }
  PastFirstSingularEnglish() {
    return "I " + this.Past;
  }
  PastSecondSingularMasculineEnglish() {
    return "You (M, S) " + this.Past;
  }
  PastSecondSingularFeminineEnglish() {
    return "You (F, S) " + this.Past;
  }
  PastThirdSingularMasculineEnglish() {
    return "He " + this.Past;
  }
  PastThirdSingularFeminineEnglish() {
    return "She " + this.Past;
  }
  PastFirstPluralEnglish() {
    return "We " + this.Past;
  }
  PastSecondPluralMasculineEnglish() {
    return "You (M, P) " + this.Past;
  }
  PastSecondPluralFeminineEnglish() {
    return "You (F, P) " + this.Past;
  }
  PastThirdPluralEnglish() {
    return "They " + this.Past;
  }
  FutureFirstSingularEnglish() {
    return "I will " + this.Present;
  }
  FutureSecondSingularMasculineEnglish() {
    return "You (M, S) will " + this.Present;
  }
  FutureSecondSingularFeminineEnglish() {
    return "You (F, S) will " + this.Present;
  }
  FutureThirdSingularMasculineEnglish() {
    return "He will " + this.Present;
  }
  FutureThirdSingularFeminineEnglish() {
    return "She will " + this.Present;
  }
  FutureFirstPluralEnglish() {
    return "We will " + this.Present;
  }
  FutureSecondPluralMasculineEnglish() {
    return "You (M/N, P) will " + this.Present;
  }
  FutureSecondPluralFeminineEnglish() {
    return "You (F, P) will " + this.Present;
  }
  FutureThirdPluralMasculineEnglish() {
    return "They (M/N) will " + this.Present;
  }
  FutureThirdPluralFeminineEnglish() {
    return "They (F) will " + this.Present;
  }
  ImperativeSingularMasculineEnglish() {
    return this.Present + "! (M, S)";
  }
  ImperativeSingularFeminineEnglish() {
    return this.Present + "! (F, S)";
  }
  ImperativePluralMasculineEnglish() {
    return this.Present + "! (M/N, P)";
  }
  ImperativePluralFeminineEnglish() {
    return this.Present + "! (F, P)";
  }
}
