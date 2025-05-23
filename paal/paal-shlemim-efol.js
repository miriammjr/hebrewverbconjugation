// PAAL SHLEMIM EFOL

class PaalShlemimEfol {
  constructor(a, b, c) {
    this.root1 = a;
    this.root2 = b;
    this.root3 = c;
  }
  // should return the present masculine singular
  // root 1: no vowel (except dagesh, which should be inputted automatically)
  // add vav
  // root 2: צירי
  // root 3: no vowel
  presentMascSing() {
    return this.root3 + "וֹ" + this.root2 + "\u{05B5}" + this.root1;
  }

  // root 1: no vowel
  // add vav
  // root 2: סגול
  // root 3: סגול
  // add tet
  presetFemSing() {
    return (
      this.root3 +
      "וֹ" +
      this.root2 +
      "\u{05B6}" +
      this.root1 +
      "\u{05B6}" +
      "ת"
    );
  }

  // root 1: no vowel
  // add vav
  // root 2: shva
  // root 3: khirik
  // add ים
  presentMascPlural() {
    return (
      this.root3 +
      "וֹ" +
      this.root2 +
      "\u{05B0}" +
      this.root1 +
      "\u{05B4}" +
      "ים"
    );
  }

  // root 1: no vowel
  // add vav
  // root 2: shva
  // root 3: no vowel
  // add ot
  presentFemPlural() {
    return this.root3 + "וֹ" + this.root2 + "\u{05B0}" + this.root1 + "וֹת";
  }
}

module.exports = PaalShlemimEfol;
