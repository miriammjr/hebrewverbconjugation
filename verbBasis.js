class verbBasis {
  constructor([a, b, c, gerund, Present, Presentthird, Past, EnglishGerund]) {
    this.root1 = a;
    this.root2 = b;
    this.root3 = c;
    this.gerund = gerund;
    this.Present = Present;
    this.Presentthird = Presentthird;
    this.Past = Past;
    this.verbType = "פעל";
    this.gzera = "שלמים (אפעול)";
    this.EnglishGerund = EnglishGerund;

    this.root1dagesh = getDagesh(this.root1);
    this.root2dagesh = getDagesh(this.root2);
    this.root3dagesh = getDagesh(this.root3);
    this.root1final = getFinal(this.root1);
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
    if (this.Present.includes("be ") && this.Presentthird.includes("is ")) {
      return "They (M) are " + this.Present.slice(3);
    } else {
      return "They (M) " + this.Present;
    }
  }
  PresentPluralFeminineEnglish() {
    if (this.Present.includes("be ") && this.Presentthird.includes("is ")) {
      return "They (F) are " + this.Present.slice(3);
    } else {
      return "They (F) " + this.Present;
    }
  }
  PastFirstSingularEnglish() {
    if (this.Present.includes("be ") && this.Presentthird.includes("is ")) {
      return "I was " + this.Present.slice(3);
    } else {
      return "I " + this.Past;
    }
  }
  PastSecondSingularMasculineEnglish() {
    return "You (M, S) " + this.Past;
  }
  PastSecondSingularFeminineEnglish() {
    return "You (F, S) " + this.Past;
  }
  PastThirdSingularMasculineEnglish() {
    if (this.Present.includes("be ") && this.Presentthird.includes("is ")) {
      return "He was " + this.Present.slice(3);
    } else {
      return "He " + this.Past;
    }
  }
  PastThirdSingularFeminineEnglish() {
    if (this.Present.includes("be ") && this.Presentthird.includes("is ")) {
      return "She was " + this.Present.slice(3);
    } else {
      return "She " + this.Past;
    }
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
    return (
      this.Present.charAt(0).toUpperCase() + this.Present.slice(1) + "! (M, S)"
    );
  }
  ImperativeSingularFeminineEnglish() {
    return (
      this.Present.charAt(0).toUpperCase() + this.Present.slice(1) + "! (F, S)"
    );
  }
  ImperativePluralMasculineEnglish() {
    return (
      this.Present.charAt(0).toUpperCase() +
      this.Present.slice(1) +
      "! (M/N, P)"
    );
  }
  ImperativePluralFeminineEnglish() {
    return (
      this.Present.charAt(0).toUpperCase() + this.Present.slice(1) + "! (F, P)"
    );
  }
}
