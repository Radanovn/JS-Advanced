class Stringer {
  constructor(innerString, innerLength) {
    this.innerString = innerString;
    this.innerLength = +innerLength;
  }

  increase(length) {
    this.innerLength += length;
  }

  decrease(length) {
    this.innerLength = Math.max(0, this.innerLength - length);
  }

  toString() {
    if (this.innerString.length > this.innerLength) {
      return this.innerString.substring(0, this.innerLength) + "...";
    } else if (this.innerString.length <= this.innerLength) {
      return this.innerString;
    }
  }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

