/* eslint valid-jsdoc: "off" */

/**
 * @fileOverview 正式配置
 * @name config.prod.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

module.exports = app => {

  const exports = {};

  const {
    hostname, port, username
    , password, pathname,
  } = new URL(process.env.REDIS_DSN);
  exports.redis = {
    client: {
      host: hostname,
      port,
      username,
      password,
      db: parseInt(pathname.substr(1)),
    },
  };

  exports.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    connectionUri: process.env.MYSQL_URL,
    benchmark: true,
    logging(...args) {

      // if benchmark enabled, log used
      if (typeof args[1] === 'number' && args[1] > 60000) { app.logger.warn(`[egg-sequelize]${args[1]}ms ${args[0]}`); }
    },
    // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
    // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
    // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
    // more sequelize options
  };

  return exports;

};
