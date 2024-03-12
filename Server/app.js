
const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {    
        type: String,
        required: true
    }
});
const Product = mongoose.model("Product", productSchema);
const LoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const Login = mongoose.model("Login", LoginSchema);


app.use(cors());
app.use(express.json());

const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://maheshwariesha11:kwRkhC8sfHdWshr0@cluster0.8bg3e5u.mongodb.net/')
        console.log("Connected to the database.")
    } catch (error) {

        console.log(error.message)
    }
}

connectToDB();


app.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const check = await Login.findOne({ email: email })
        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
        }
    }
    catch (e) {
        res.json("notexist")
    }
})



app.get('/', async (req, res) => {
    try {

        let products = await Product.find();
        res.status(200).json({
            message: "success",
            products
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
});
app.get('/product_description/:pro_id', async (req, res) => {
    try {
        let { pro_id } = req.params;
        let pro_des = await Product.findOne({ _id: pro_id });
        res.status(200).json({
            message: "success",
            pro_des
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
});
app.post("/addproducts", async (req, res) => {
    console.log("You requested a product")
    try {
        let newProduct = req.body;
        let product = await Product.create(newProduct);

        res.status(201).json({
            message: "success",
            product
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
});

app.put("/updateproduct/:id", async (req, res) => {

    try {
        let { id } = req.params;

        let product = await Product.findByIdAndUpdate(id, req.body);

        res.status(201).json({
            success: true,
            product
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
})

app.listen(4000, () => {
    console.log("our server is working")
});

