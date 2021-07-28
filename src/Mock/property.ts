const propertyList = [
  {
    mlsNumber: 'M12345678',
    status: 'U',
    class: 'Residential',
    type: 'Sale',
    daysOnMarket: 3,
    askingPrice: 100000000,
    occupancy: 'Flexible',
    listDate: new Date(
      Date.now() - Math.floor(Math.random() * 2629743833)
    ).toISOString(),
    updatedOn: new Date(
      Date.now() - Math.floor(Math.random() * 2629743833)
    ).toISOString(),
    address: {
      street: '123 Test Street',
      area: 'Parkdale',
      city: 'Toronto',
      province: 'ON',
      country: 'CA',
    },
    photoUrl: [
      'https://source.unsplash.com/random/?house',
      'https://source.unsplash.com/random/?house,interior',
    ],
  },
  {
    mlsNumber: 'M87654321',
    status: 'U',
    class: 'Commercial',
    type: 'Rent',
    daysOnMarket: 10,
    occupancy: 'Flexible',
    askingPrice: 250000,
    listDate: new Date(
      Date.now() - Math.floor(Math.random() * 2629743833)
    ).toISOString(),
    updatedOn: new Date(
      Date.now() - Math.floor(Math.random() * 2629743833)
    ).toISOString(),
    address: {
      street: '321 Test Street',
      area: 'Spadina',
      city: 'Toronto',
      province: 'ON',
      country: 'CA',
    },
    photoUrl: [
      'https://source.unsplash.com/random/?house',
      'https://source.unsplash.com/random/?house,interior',
    ],
  },
  {
    mlsNumber: 'M21463334',
    status: 'U',
    class: 'Commercial',
    type: 'Lease',
    daysOnMarket: 15,
    occupancy: 'Flexible',
    askingPrice: 900000,
    listDate: new Date(
      Date.now() - Math.floor(Math.random() * 2629743833)
    ).toISOString(),
    updatedOn: new Date(
      Date.now() - Math.floor(Math.random() * 2629743833)
    ).toISOString(),
    address: {
      street: '321 Test Street',
      area: 'Spadina',
      city: 'Toronto',
      province: 'ON',
      country: 'CA',
    },
    photoUrl: [
      'https://source.unsplash.com/random/?house',
      'https://source.unsplash.com/random/?house,interior',
    ],
  },
];

export default propertyList;
