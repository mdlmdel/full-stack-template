import mongoose from 'mongoose';

import config from '../config/config';

mongoose.Promise = global.Promise;

mongoose.connect(config.DATABASE_URL);
mongoose.connection
  .once('open', () => console.log('MongoDB running'))
  .on('error', err => console.error(err));