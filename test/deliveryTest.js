const deliveryDateTest = require('ava');
const { deliveryDate } = require('../src/delivery');

deliveryDateTest("deliveryDateTest: test deliveryState=MA and isRush is true",t => {
  let anOrder = {deliveryState:'MA', placedOn:{plusDays:function (deliveryTime) {
        return deliveryTime;
      }}};
  t.is(deliveryDate(anOrder,true),2)
})


deliveryDateTest("deliveryDateTest: test deliveryState=CT and isRush is true",t => {
  let anOrder = {deliveryState:'CT', placedOn:{plusDays:function (deliveryTime) {
        return deliveryTime;
      }}};
  t.is(deliveryDate(anOrder,true),2)
})

deliveryDateTest("deliveryDateTest: test deliveryState=NY and isRush is true",t => {
  let anOrder = {deliveryState:'NY', placedOn:{plusDays:function (deliveryTime) {
        return deliveryTime;
      }}};
  t.is(deliveryDate(anOrder,true),3)
})

deliveryDateTest("deliveryDateTest: test deliveryState=NH and isRush is true",t => {
  let anOrder = {deliveryState:'NH', placedOn:{plusDays:function (deliveryTime) {
        return deliveryTime;
      }}};
  t.is(deliveryDate(anOrder,true),3)
})


deliveryDateTest("deliveryDateTest: test deliveryState=TEST and isRush is true",t => {
  let anOrder = {deliveryState:'TEST', placedOn:{plusDays:function (deliveryTime) {
        return deliveryTime;
      }}};
  t.is(deliveryDate(anOrder,true),4)
})

deliveryDateTest("deliveryDateTest: test deliveryState=MA and isRush is false",t => {
  let anOrder = {deliveryState:'MA', placedOn:{plusDays:function (deliveryTime) {
        return deliveryTime;
      }}};
  t.is(deliveryDate(anOrder,false),4)
})

deliveryDateTest("deliveryDateTest: test deliveryState=ME and isRush is false",t => {
  let anOrder = {deliveryState:'ME', placedOn:{plusDays:function (deliveryTime) {
        return deliveryTime;
      }}};
  t.is(deliveryDate(anOrder,false),5)
})

deliveryDateTest("deliveryDateTest: test deliveryState=TEST and isRush is false",t => {
  let anOrder = {deliveryState:'TEST', placedOn:{plusDays:function (deliveryTime) {
        return deliveryTime;
      }}};
  t.is(deliveryDate(anOrder,false),6)
})