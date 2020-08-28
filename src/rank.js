function voyageRisk (voyage) {
  let history = [
    'china',
    'east-indies',
  ];
  let result = 1;

  if (voyage.length > 8) {
    result += voyage.length - 6;
  } else if (voyage.length > 4){
    result += 2;
  }

  if (history.includes(voyage.zone)) {
    result += 4;
  }

  return Math.max(result, 0);
}

function hasChina (history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk (voyage, history) {
  let result = 1;
  if (history.length < 5) {
    result += 4;
  }
  result += history.filter(v => v.profit < 0).length;
  if (voyage.zone === 'china' && hasChina(history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

function plusByLength(length, number) {
  return length > number ? 1 : 0;
}

function voyageProfitFactor (voyage, history) {
  let result = 2;
  let zones = ['china', 'east-indies'];
  if (zones.includes(voyage.zone)){
    result += 1;
  }

  if (voyage.zone === 'china' && hasChina(history)) {
    result += 3;
    result += plusByLength(history.length, 10);
  } else {
    result += plusByLength(history.length, 8);
  }

  if (voyage.zone === 'china' && hasChina(history)) {
    result += voyage.length > 18 ? 0 : plusByLength(voyage.length, 12);
  } else {
    result -= voyage.length > 14 ? 1 : 0;
  }
  return result;
}

function rating (voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > (vr + chr * 2)) {
    return 'A';
  }
  else {
    return 'B';
  }
}

module.exports = {
  voyageRisk,
  captainHistoryRisk,
  voyageProfitFactor,
  rating
};

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
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);
