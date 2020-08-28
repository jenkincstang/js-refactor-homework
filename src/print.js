function getTotalAmountOfInvoice(invoice) {
  let outstanding = 0;
  invoice.borderSpacing.every(item => outstanding += item.amount);
  return outstanding;
}

function generateHeaderInfoOfCustomerOweInvoice() {
  let output = '';
  output += `***********************\n`;
  output += `**** Customer Owes ****\n`;
  output += `***********************\n`;
  return output;
}

function printOwing (invoice) {

  let output = generateHeaderInfoOfCustomerOweInvoice();

  let outstanding = getTotalAmountOfInvoice(invoice);
  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // print details
  output += `name: ${invoice.customer}\n`;
  output += `amount: ${outstanding}\n`;
  output += `amount: ${invoice.dueDate.toLocaleDateString()}`;
  return output;
}
module.exports = {
  printOwing
};