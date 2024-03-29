
function solve(input, prop) {
    class Ticket {
      constructor(destination, price, status) {
        this.destination = destination;
        this.price = +price;
        this.status = status;
      }
    }
  return input
    .reduce((prev, line) => {
    let [destination, price, status] = line.split("|");

    let ticket = new Ticket(destination, price, status);

    prev.push(ticket);

    return prev;
  }, [])
  .sort((a, b) => {
      if ( typeof a[prop] === 'string'){
          return a[prop].localeCompare(b[prop]);

      } else {
          return a[prop] - b[prop];
      }
  });
}

console.log(
  solve([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed"
  ],
  "destination")
);
