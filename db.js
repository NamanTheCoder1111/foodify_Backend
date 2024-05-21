const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://foodify:naman123@cluster0.14f7hhm.mongodb.net/foodify?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log('Connected to MongoDB');
        
        // Fetch data from the "food_items" collection directly
        const db = mongoose.connection.db;
        const fetchedData = await db.collection("food_items").find({}).toArray();
        global.food_items = fetchedData;
        const foodcategory = await db.collection("food_category").find({}).toArray();
        global.food_category = foodcategory;
        

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = mongoDB;