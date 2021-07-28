const propertyList = [
  {
    mlsNumber: 'M12345678',
    status: 'U',
    class: 'Residential',
    type: 'Sale',
    daysOnMarket: 3,
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
      'https://du9bj9c2s4nh.cloudfront.net/wp-content/uploads/2020/09/TorontoRealEstateAugust.jpg',
      'https://www.chicagotribune.com/resizer/2KEw8M19fOz8SX5oy8rUo2f5yto=/fit-in/800x533/smart/filters:fill(black)/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/ZCJ77ZAR7FE2VBDQOTEC24ESSI.jpg',
    ],
  },
  {
    mlsNumber: 'M87654321',
    status: 'U',
    class: 'Commercial',
    type: 'Rent',
    daysOnMarket: 10,
    occupancy: 'Flexible',
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
      'https://du9bj9c2s4nh.cloudfront.net/wp-content/uploads/2020/09/TorontoRealEstateAugust.jpg',
      'https://www.chicagotribune.com/resizer/2KEw8M19fOz8SX5oy8rUo2f5yto=/fit-in/800x533/smart/filters:fill(black)/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/ZCJ77ZAR7FE2VBDQOTEC24ESSI.jpg',
    ],
  },
];

export default propertyList;
