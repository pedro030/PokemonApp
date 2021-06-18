//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const {conn} = require('./src/db.js');
const {apiTypes} = require('./src/controllers/types');
const {asyncgetPokemon} = require('./src/controllers/pokemon');
const PORT = process.env.PORT || 3001;

// Syncing all the models at once.
conn
	.sync({force: true})
	.then(() => {
		console.log('db conection success');
		server.listen(PORT, () => {
			console.log(`%s listening at port ${PORT}`); // eslint-disable-line no-console
		});
	})
	.then(() => {
		apiTypes();
		asyncgetPokemon();
	})
	.catch((err) => {
		console.log(err);
	});
