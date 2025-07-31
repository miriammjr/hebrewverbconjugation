class PaalShlemimRoot1AlefEfol extends PaalShlemimEfol {
  // differs in past tense plural second person,
  // future,
  // infinitive,
  // imperative
  // root 1 is always alef

  // לֶאֱ +
  // root 2 + holam +
  // root 3
  infinitive() {
    return "לֶאֱ" + root2 + "\u{05B9}" + root1final;
  }

  // root 1 +
  PastSecondPluralMasculine() {}
}
