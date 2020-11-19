/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}';

  config.redis = {
    client: {
      host: '127.0.0.1',
      port: 6379,
      password: 'auth',
      db: 0,
    },
  };

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    connectionUri: `mysql://root:example@127.0.0.1:3306/${appInfo.name}`,
    benchmark: true,
    logging(...args) {
      // if benchmark enabled, log used
      const used = typeof args[1] === 'number' ? args[1] : undefined;
      if (!used) { appInfo.logger.info(`[egg-sequelize] ${args[0]}`); } else if (used > 60000) { appInfo.logger.warn(`[egg-sequelize]${used}ms ${args[0]}`); } else { appInfo.logger.info(`[egg-sequelize]${used}ms ${args[0]}`); }

    },
    // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
    // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
    // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
    // more sequelize options
  };

  return {
    ...config,
  };
};
