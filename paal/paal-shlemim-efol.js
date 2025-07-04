// PAAL SHLEMIM EFOL

// DAGESH HAS NOT BEEN ADDED TO ROOTS!!! THIS ONLY WORKS FOR לסגור!!!!
class PaalShlemimEfol {
  constructor(a, b, c, gerund, present, presentthird, past) {
    this.root1 = a;
    this.root2 = b;
    this.root3 = c;
    this.gerund = gerund;
    this.present = present;
    this.presentthird = presentthird;
    this.past = past;
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

  // should return the present masculine singular
  // root 1: no vowel, dagesh
  // add vav
  // root 2: צירי, no dagesh
  // root 3: no vowel, no dagesh
  presentMascSing() {
    return this.root3dagesh + "וֹ" + this.root2 + "\u{05B5}" + this.root1;
  }

  // root 1: no vowel, dagesh
  // add vav
  // root 2: סגול
  // root 3: סגול
  // add tet
  presentFemSing() {
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
  presentMascPlural() {
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
  presentFemPlural() {
    return (
      this.root3dagesh + "וֹ" + this.root2 + "\u{05B0}" + this.root1 + "וֹת"
    );
  }

  // root 1: kamatz, dagesh
  // root 2: patakh
  // root 3: shva
  // add תִּי
  pastFirstSingular() {
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
  pastSecondSingularMale() {
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
  pastSecondSingularFemale() {
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
  pastThirdSingularMale() {
    return this.root3dagesh + "\u{05B8}" + this.root2 + "\u{05B7}" + this.root1;
  }

  // root 1: kamatz, dagesh
  // root 2: shva
  // root 3: kamatz
  // add ה
  pastThirdSingularFemale() {
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
  pastFirstPersonPlural() {
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
  pastSecondPluralMale() {
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
  pastSecondPluralFemale() {
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
  pastThirdPlural() {
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
  futureFirstSing() {
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
  futureSecondMasculineSing() {
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
  futureSecondFeminineSing() {
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
  futureThirdMasculineSing() {
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
  futureThirdFeminineSing() {
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
  futureFirstPlural() {
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
  futureSecondMascPlural() {
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
  futureSecondFemininePlural() {
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
  futureThirdPlural() {
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
  futureThirdFemininePlural() {
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
  imperativeMasculine() {
    return this.root3dagesh + "\u{05B0}" + this.root2 + "\u{05B9}" + this.root1;
  }

  // root 1: add khirik, dagesh
  // root 2: add shva
  // root 3: add khirik
  // add yod
  imperativeFeminine() {
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
  imperativePlural() {
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
  imperativeFemininePlural() {
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
}
