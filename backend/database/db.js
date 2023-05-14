import mongoose from 'mongoose';

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-5bb9hjq-shard-00-00.whqv6e4.mongodb.net:27017,ac-5bb9hjq-shard-00-01.whqv6e4.mongodb.net:27017,ac-5bb9hjq-shard-00-02.whqv6e4.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-cjh2cw-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Error while connecting with the database ', error);
  }
};

export default Connection;
