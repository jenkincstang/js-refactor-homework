const printTest = require('ava');
const { printOwing } = require('../src/print');

printTest('printTest test output: ', t => {
    const res = printOwing(invoice);
    t.is(
        res,
        `***********************
**** Customer Owes ****
***********************
name: Jenkin
amount: 3
amount: 9/27/2020`
    );
});

const invoice = {
    customer: 'Jenkin',
    borderSpacing: [{
        amount: 1,
    },
        {
            amount: 2,
        },
    ],
};