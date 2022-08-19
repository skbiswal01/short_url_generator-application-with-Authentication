const mongoose = require("mongoose");
module.exports = () => {
    mongoose.connect("mongodb+srv://sunil:sunil@cluster0.xohiizo.mongodb.net/?retryWrites=true&w=majority");
}