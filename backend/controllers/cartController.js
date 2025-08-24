import userModel from "../models/userModel.js";


//add products to cart
const addToCart = async (req, res) => {

    try {
        const { userId, itemId, size } = req.body;
        const userData = await userModel.findById(userId);
        // console.log(userData)
        let cartData = await userData.cart;

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } 
            else {
                cartData[itemId][size] = 1;
            }
        } 
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        await userModel.findByIdAndUpdate(userId, { "cart":cartData });

        res.json({ success: true, message: "Added To Cart" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }

}


//Update user cart
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body;
        const userData = await userModel.findById(userId);
        let cart = await userData.cart;

        cart[itemId][size] = quantity;

        await userModel.findByIdAndUpdate(itemId, { cart });

        res.json({ success: true, message: "Cart Updated" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}

//get user cart data
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body;
        const userData = await userModel.findById(userId);
        const cart = await userData.cart;

        res.json({ success: true, cart: cart })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export { addToCart, updateCart, getUserCart }