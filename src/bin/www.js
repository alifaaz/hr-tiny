import app from '../config/app';
import { port } from '../config/conf';
import conDb from '../config/DB';
import chalks from '../config/chalking';

const log = console.log;

conDb().then(() => {
  app.listen(port || 3030, () => log(chalks.yelo(`connect succssfully to host http://localhost:${port}`)));

  log(chalks.success(`sucssessfully connected to database ${chalks.emojies.coffee}`));
}).catch((err) => {
  console.log(chalks.error(err));
  throw err;
});
