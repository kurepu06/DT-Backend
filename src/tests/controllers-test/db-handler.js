
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

//const mongod = new MongoMemoryServer();
const mongod = await MongoMemoryServer.create();

const uri = mongo.getUri();

//connect to db
module.exports.connect = async () => {

    const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopololy: true,
        poolSize: 10
    };
    await mongoose.connect(uri, mongooseOpts);
};

//disconnect and close connection
module.exports.closeDatabase = async () => {
    if (mongod) {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongod.stop();
    }
};

//clear and remove data
module.exports.clearDatabase = async () => {
    if (mongod) {
        const collections = mongoose.connection.collections;
        for (const key in collections) {
            const collection = collections[key];
            await collection.deleteMany();
        }
    }
};