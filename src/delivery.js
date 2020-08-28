function getDeliveryStateMapWithIsRushTrue() {
  let deliveryStateMapWithIsRushTrue = new Map();
  deliveryStateMapWithIsRushTrue.set('MA', 1);
  deliveryStateMapWithIsRushTrue.set('CT', 1);
  deliveryStateMapWithIsRushTrue.set('NY', 2);
  deliveryStateMapWithIsRushTrue.set('NH', 2);
  return deliveryStateMapWithIsRushTrue;
}

function getDeliveryStateMapWithIsRushFalse() {
  let deliveryStateMapWithIsRushFalse = new Map();
  deliveryStateMapWithIsRushFalse.set('MA', 2);
  deliveryStateMapWithIsRushFalse.set('CT', 2);
  deliveryStateMapWithIsRushFalse.set('NY', 2);
  deliveryStateMapWithIsRushFalse.set('NH', 3);
  deliveryStateMapWithIsRushFalse.set('ME', 3);
  return deliveryStateMapWithIsRushFalse;
}

function getDeliveryTimeWithIsRushTrue(deliveryStateMapWithIsRushTrue, anOrder) {
  if (deliveryStateMapWithIsRushTrue.has(anOrder.deliveryState)) {
    return deliveryStateMapWithIsRushTrue.get(anOrder.deliveryState);
  } else {
    return 3;
  }
}

function getDeliveryTimeWithIsRushFalse(deliveryStateMapWithIsRushFalse, anOrder) {
  if (deliveryStateMapWithIsRushFalse.has(anOrder.deliveryState)) {
    return deliveryStateMapWithIsRushFalse.get(anOrder.deliveryState);
  } else {
    return 4;
  }
}

function deliveryDate (anOrder, isRush) {
  let deliveryStateMapWithIsRushTrue = getDeliveryStateMapWithIsRushTrue();
  let deliveryStateMapWithIsRushFalse = getDeliveryStateMapWithIsRushFalse();
  if (isRush) {
    let deliveryTime = getDeliveryTimeWithIsRushTrue(deliveryStateMapWithIsRushTrue, anOrder);
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  }
  else {
    let deliveryTime = getDeliveryTimeWithIsRushFalse(deliveryStateMapWithIsRushFalse, anOrder);
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

module.exports = {
  deliveryDate
};
