function getDeliveryStateMapWithIsRushTrue() {
  let deliveryStateMapWithIsRushTrue = new Map();
  deliveryStateMapWithIsRushTrue.set('MA', 1);
  deliveryStateMapWithIsRushTrue.set('CT', 1);
  deliveryStateMapWithIsRushTrue.set('NY', 2);
  deliveryStateMapWithIsRushTrue.set('NH', 2);
  return deliveryStateMapWithIsRushTrue;
}

function getDeliveryTimeWithIsRushTrue(deliveryStateMapWithIsRushTrue, anOrder) {
  if (deliveryStateMapWithIsRushTrue.has(anOrder.deliveryState)) {
    return deliveryStateMapWithIsRushTrue.get(anOrder.deliveryState);
  } else {
    return 3;
  }
}

function deliveryDate (anOrder, isRush) {
  let deliveryStateMapWithIsRushTrue = getDeliveryStateMapWithIsRushTrue();
  if (isRush) {
    let deliveryTime = getDeliveryTimeWithIsRushTrue(deliveryStateMapWithIsRushTrue, anOrder);
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
