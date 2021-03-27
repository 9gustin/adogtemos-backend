import mongoose from 'mongoose';
require('dotenv').config();
import Pet from '../components/pet/models';

class Db {
  constructor () {}
  connect () {
    mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  }
}

export default Db;
