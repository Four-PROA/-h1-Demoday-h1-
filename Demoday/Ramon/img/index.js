const express = require("express");
const app = express();
const path = require("path");
const stripe = require("stripe")('sk_test_51K1N1mH9jcRWsQoNFO9AHJnZK0yEe4Sp2gH697ybGlDZYUq0toHgNS8l01NRl6wcbFfnbJCe0zjGD0XVIJFIeUvz00PUmI6P4L');

const YOUR_DOMAIN = "http://localhost:8080";

// static files
app.use(express.static(path.join(__dirname, "views")));

// middleware
app.use(express.json());

// routes
app.post("/payment", async (req, res) => {
    const { product } = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency: "brl",
                    product_data: {
                        name: product.name,
                        images: [product.image],
                    },
                    unit_amount: product.amount * 100,
                },
                quantity: product.quantity,
            },
        ],
        mode: "payment",
        success_url: `${YOUR_DOMAIN}/success.html`,
        cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });

    res.json({ id: session.id });
});

// listening...
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
