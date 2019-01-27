import mongoose from 'mongoose';
import { env, mongo } from './conf';
import chk from './chalking';


// Check Errors On Problems
mongoose.connection.on('error', (err) => { console.error(err); });
mongoose.connection.on('open', () => { console.log(chk.yelo('connecton opened hahh')); });
mongoose.connection.on('connected', () => { console.log(chk.error(`connecton con hahh ${chk.emojies.cheart}`)); });
mongoose.connection.on('disconnected', () => {
  console.log(chk.success('Mongoose default connection disconnected'));
});
mongoose.connection.on('close', () => { console.log(chk.error('connecton closes hahh')); });
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection is disconnected due to application termination');
    process.exit(0);
  });
});


// debug mode
if (env === 'development') {
  mongoose.set('debug', true);
}


/**
 * connect to db
 *
 * @return {object} - connection object
 * @public
 */


export default () => {
  mongoose.connect(mongo.uri, {
    /**
 * @keepAlive - to send packet every 120ms to checkk conectivity
 * @poolSize - number of socket to run operation on dbs
 * @reconntTries - number of tried connection after its drop
 * @reconnctInterval - time by ms of try to connect when its drop
 */
    useNewUrlParser: true,
    // keepAlive: 120,
    poolSize: 10,
    // reconnectTries: Number.MAX_VALUE,
    // reconnectInterval: 500,

  });
  return mongoose.connection;
};
