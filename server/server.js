const app = require("express")();
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

app.use(require("body-parser").text());

app.post("/charge", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: req.body.amount,
      currency: "usd",
      source: req.body.token
    });

    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});

app.listen(9000, () => console.log("Listening on port 9000"));