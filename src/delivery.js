function deliveryDate (anOrder, isRush) {
  let deliveryStateMapWithIsRushTrue = new Map();
  deliveryStateMapWithIsRushTrue.set('MA',1);
  deliveryStateMapWithIsRushTrue.set('CT',1);
  deliveryStateMapWithIsRushTrue.set('NY',2);
  deliveryStateMapWithIsRushTrue.set('NH',2);
  if (isRush) {
    let deliveryTime;
    if (deliveryStateMapWithIsRushTrue.has(anOrder.deliveryState)){
      deliveryTime = deliveryStateMapWithIsRushTrue.get(anOrder.deliveryState);
    }else {
      deliveryTime = 3;
    }
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  }
  else {
    let deliveryTime;
    if ([
      'MA',
      'CT',
      'NY',
    ].includes(anOrder.deliveryState)) {
      deliveryTime = 2;
    }
    else if ([
      'ME',
      'NH',
    ].includes(anOrder.deliveryState)) {
      deliveryTime = 3;
    }
    else {
      deliveryTime = 4;
    }
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

module.exports = {
  deliveryDate
};
