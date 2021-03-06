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
      street: '12 Down St',
      area: 'Parkdale',
      city: 'Toronto',
      province: 'ON',
      country: 'CA',
    },
    photoUrl: [
      'https://source.unsplash.com/random/?house,exterior',
      'https://source.unsplash.com/random/?house,interior',
    ],
  },
  {
    mlsNumber: 'M87654321',
    status: 'U',
    class: 'Residential',
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
      street: '88 Hills Blv',
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
      street: '3 Lake Ave W',
      area: 'York',
      city: 'Toronto',
      province: 'ON',
      country: 'CA',
    },
    photoUrl: [
      'https://source.unsplash.com/random/?building',
      'https://source.unsplash.com/random/?building,interior',
    ],
  },
];

export default propertyList;
