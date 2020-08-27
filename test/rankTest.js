const rankTest = require('ava');
const { voyageRisk, captainHistoryRisk, voyageProfitFactor, rating } = require('../src/rank');

rankTest('foo', t => {
  t.pass();
});

rankTest('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});
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