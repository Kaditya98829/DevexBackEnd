const mongoose = require('mongoose');

const connectDb = () => mongoose.connect('mongodb+srv://Aman:BqHJwylZIYXg7B0E@cluster0.de36q5f.mongodb.net/test')
.then(() => console.log('db connected'))
.catch((err) => console.log(err.message));

module.exports = connectDb