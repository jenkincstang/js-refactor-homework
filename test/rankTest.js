const rankTest = require('ava');
const { voyageRisk, captainHistoryRisk, voyageProfitFactor, rating } = require('../src/rank');
/*
* const voyage = {
  zone: 'west-indies',
  length: 10,
};
const history = [
  {
    zone: 'east-indies',
    profit: 5,
  },{
    zone: 'west-indies',
    profit: 15,
  },{
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
];*/
rankTest('voyageRisk test voyage length =5 and zone = china', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 5,
  };
  //when
  const result = voyageRisk(voyage)
  //then
  t.is(result, 7);
})

rankTest('voyageRisk test voyage length =5 and zone = test', t => {
  //given
  const voyage = {
    zone: 'test',
    length: 5,
  };
  //when
  const result = voyageRisk(voyage)
  //then
  t.is(result, 3);
})

rankTest('voyageRisk test voyage length =4 and zone = china', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 4,
  };
  //when
  const result = voyageRisk(voyage)
  //then
  t.is(result, 5);
})

rankTest('voyageRisk test voyage length =4 and zone = test', t => {
  //given
  const voyage = {
    zone: 'test',
    length: 4,
  };
  //when
  const result = voyageRisk(voyage)
  //then
  t.is(result, 1);
})

rankTest('voyageRisk test voyage length =9 and zone = china', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 9,
  };
  //when
  const result = voyageRisk(voyage)
  //then
  t.is(result, 8);
})

rankTest('voyageRisk test voyage length =9 and zone = test', t => {
  //given
  const voyage = {
    zone: 'test',
    length: 9,
  };
  //when
  const result = voyageRisk(voyage)
  //then
  t.is(result, 4);
})

rankTest('captainHistoryRisk test voyage.zone = west-indies and history.length = 4 history has china', t => {
  //given
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  //when
  const result = captainHistoryRisk (voyage, history)
  //then
  t.is(result, 6);
})

rankTest('captainHistoryRisk test voyage.zone = west-indies and history.length = 4 history has not china', t => {
  //given
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china1',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  //when
  const result = captainHistoryRisk (voyage, history)
  //then
  t.is(result, 6);
})

rankTest('captainHistoryRisk test voyage.zone = china and history.length = 4 history has china', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  //when
  const result = captainHistoryRisk (voyage, history)
  //then
  t.is(result, 4);
})

rankTest('captainHistoryRisk test voyage.zone = china and history.length = 4 history has not china', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china1',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  //when
  const result = captainHistoryRisk (voyage, history)
  //then
  t.is(result, 6);
})

rankTest('captainHistoryRisk test voyage.zone = china and history.length = 6 history has china', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa1',
      profit: 7,
    },{
      zone: 'west-africa2',
      profit: 7,
    },
  ];
  //when
  const result = captainHistoryRisk (voyage, history)
  //then
  t.is(result, 0);
})

rankTest('captainHistoryRisk test voyage.zone = china and history.length = 6 history has not china', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china1',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa1',
      profit: 7,
    },{
      zone: 'west-africa2',
      profit: 7,
    },
  ];
  //when
  const result = captainHistoryRisk (voyage, history)
  //then
  t.is(result, 2);
})

rankTest('captainHistoryRisk test voyage.zone = east-indies and history.length = 6 history has china', t => {
  //given
  const voyage = {
    zone: 'east-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa1',
      profit: 7,
    },{
      zone: 'west-africa2',
      profit: 7,
    },
  ];
  //when
  const result = captainHistoryRisk (voyage, history)
  //then
  t.is(result, 2);
})

rankTest('captainHistoryRisk test voyage.zone = east-indies and history.length = 6 history has not china', t => {
  //given
  const voyage = {
    zone: 'east-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china1',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa1',
      profit: 7,
    },{
      zone: 'west-africa2',
      profit: 7,
    },
  ];
  //when
  const result = captainHistoryRisk (voyage, history)
  //then
  t.is(result, 2);
})