function printOwing (invoice) {
  let outstanding = 0;
  let output = '';
  output += `***********************\n`;
  output += `**** Customer Owes ****\n`;
  output += `***********************\n`;

  // calculate outstanding
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }

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