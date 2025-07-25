class PaalShlemimEfal extends PaalShlemimEfol {
  // same as paal shlemim efol
  // except future tense uses patakh instead of  kholam

  FutureFirstSingular() {
    return (
      "אֶ" +
      this.root3 +
      "\u{05B0}" +
      this.root2dagesh +
      "\u{05B7}" +
      this.root1
    );
  }

  FutureSecondSingularMasculine() {
    return (
      "תִּ" +
      this.root3 +
      "\u{05B0}" +
      this.root2dagesh +
      "\u{05B7}" +
      this.root1
    );
  }

  FutureThirdSingularMasculine() {
    return (
      "יִ" +
      this.root3 +
      "\u{05B0}" +
      this.root2dagesh +
      "\u{05B7}" +
      this.root1
    );
  }

  FutureThirdSingularFeminine() {
    return (
      "תִּ" +
      this.root3 +
      "\u{05B0}" +
      this.root2dagesh +
      "\u{05B7}" +
      this.root1
    );
  }

  FutureFirstPlural() {
    return (
      "נִ" +
      this.root3 +
      "\u{05B0}" +
      this.root2dagesh +
      "\u{05B7}" +
      this.root1
    );
  }

  FutureSecondPluralFeminine() {
    return (
      "תִּ" +
      this.root3 +
      "\u{05B0}" +
      this.root2dagesh +
      "\u{05B7}" +
      this.root1 +
      "\u{05B0}" +
      "נָה"
    );
  }

  FutureThirdPluralFeminine() {
    return (
      "תִּ" +
      this.root3 +
      "\u{05B0}" +
      this.root2dagesh +
      "\u{05B7}" +
      this.root1 +
      "\u{05B0}" +
      "נָה"
    );
  }

  ImperativeSingularMasculine() {
    return (
      this.root3dagesh + "\u{05B0}" + this.root2 + "\u{05B7}" + this.root1final
    );
  }

  ImperativePluralFeminine() {
    return (
      this.root3dagesh +
      "\u{05B0}" +
      this.root2 +
      "\u{05B7}" +
      this.root1 +
      "\u{05B0}" +
      "נָה"
    );
  }

  // EXCEPTION FOR לשכב
  infinitive() {
    if (this.FutureFirstSingular() == "אֶשְׁכַּב") {
      return "לִשְׁכַּב";
    } else {
      return super.infinitive();
    }
  }
}
