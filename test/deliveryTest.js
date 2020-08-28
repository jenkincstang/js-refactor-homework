const deliveryDateTest = require('ava');
const { deliveryDate } = require('../src/delivery');

deliveryDateTest("deliveryDateTest: test deliveryState=MA and isRush is true",t => {
  let anOrder = {deliveryState:'MA', placedOn:{plusDays:function (deliveryTime) {
        return deliveryTime;
      }}};
  t.is(deliveryDate(anOrder,true),2)
})
