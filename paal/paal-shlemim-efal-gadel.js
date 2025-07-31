class PaalShlemimEfalGadel extends PaalShlemimEfal {
  // differs from PaalShlemimEfal in the present tense

  // root 1: add kamatz, dagesh
  // root 2: add tsere
  // root 3: no vowel or dagesh
  PresentSingularMasculine() {
    return (
      this.root3dagesh + "\u{05B8}" + this.root2 + "\u{05B5}" + this.root1final
    );
  }

  // root 1: add dagesh, shva
  // root 2: add tsere
  // root 3: add kamatz
  // add ה
  PresentSingularFeminine() {
    return (
      this.root3dagesh +
      "\u{05B0}" +
      this.root2 +
      "\u{05B5}" +
      this.root1 +
      "\u{05B8}" +
      "ה"
    );
  }

  // ROOT 1: add dagesh, shva
  // root 2: add tsere
  // root 3: add hirik
  // add "ים"

  PresentPluralMasculine() {
    return (
      this.root3dagesh +
      "\u{05B0}" +
      this.root2 +
      "\u{05B5}" +
      this.root1 +
      "\u{05B4}" +
      "ים"
    );
  }

  // root 1: add dagesh, shva
  // root 2: add tsere
  // root 3: no vowel
  // add "וֹת
  PresentPluralFeminine() {
    return (
      this.root3dagesh +
      "\u{05B0}" +
      this.root2 +
      "\u{05B5}" +
      this.root1 +
      "וֹת"
    );
  }
}
