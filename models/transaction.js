const mongoose = require('mongoose');


const transactionSchema = new mongoose.Schema(
{
  userId:
   {
    type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
   },
amount: {
    type: Number
},
status: {
    type: String
},
paymentIntentId: {
    type: String
},
  
}, 
{ timestamps: true }
);

const Transaction = mongoose.model('Transaction',transactionSchema);
module.exports = Transaction;

