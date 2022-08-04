import mongoose from 'mongoose';

const Connection = async (username, password) => {
        //const URL = `mongodb+srv://${username}:${password}@cluster0.jjowu.mongodb.net/flipkart?retryWrites=true&w=majority`;
        const URL = `mongodb+srv://Rachel:Yv2dZvSLYhcVkNX@cluster0.qedkz.mongodb.net/flipcart?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;