const phones = [
  {
    name: "Samsung",
    camera: 12,
    storage: "32gb",
    price: 36000,
    color: "silver",
  },
  {
    name: "Walton",
    camera: 12,
    storage: "32gb",
    price: 22000,
    color: "silver",
  },
  {
    name: "iPhone",
    camera: 12,
    storage: "32gb",
    price: 82000,
    color: "silver",
  },
  {
    name: "Xiaomi",
    camera: 12,
    storage: "32gb",
    price: 52000,
    color: "silver",
  },
  {
    name: "Oppo",
    camera: 12,
    storage: "32gb",
    price: 20000,
    color: "silver",
  },
  {
    name: "Nokia",
    camera: 12,
    storage: "32gb",
    price: 44000,
    color: "silver",
  },
  {
    name: "HTC",
    camera: 12,
    storage: "32gb",
    price: 62000,
    color: "silver",
  },
];

function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    const phonePrice = phone.price;
    if (phonePrice < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}

console.log(cheapestPhone(phones));
