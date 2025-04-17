const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Transaction = require('../models/transaction');

async function checkout(req, res){
  const { amount } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'USD',
      metadata: { userId: req.user.toString() },
    });
console.log(paymentIntent)
    await Transaction.create({
      userId: req.user._id,
      amount,
      status: 'pending',
      paymentIntentId: paymentIntent.id,
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Payment failed' });
  }
};

module.exports = checkout;