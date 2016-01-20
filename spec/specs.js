describe('pigLatin', function() {
  it("will add 'ay' to the end of words that start with a vowel", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });


  it("will move any first consonant from the beginning of a word to the end, and add 'ay'.", function() {
    expect(pigLatin("chair")).to.equal("haircay");
  });
});

describe('beginConsonant', function() {
  it("will determine if the first letter of a word is a consonant", function() {
    expect(beginConsonant("cat")).to.equal(true);
  });
  it("will determine if the first letter of a word is a consonant", function() {
    expect(beginConsonant("at")).to.equal(false);
  });
});
