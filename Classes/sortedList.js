class List {
  constructor(add, remove, get, size) {
    this.add = add;
    this.remove = remove;
    this.get = get;
    this.size = size;
    this.collection = [];
  }
  add(element) {
      
    return this.collection.push(element);
  }

  remove(index) {
    let theIndex = this.collection.indexOf(index);
    if (theIndex > -1) {
     return this.collection.splice(theIndex, 1);
    }
  }
  get(index) {
    let theIndex = this.collection.indexOf(index);
    if (theIndex > -1) {
      return theIndex;
    }
  }

  size() {
      return this.collection.length;
  }


}

// let list = new List();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1)); 
// list.remove(1);
// console.log(list.get(1));

