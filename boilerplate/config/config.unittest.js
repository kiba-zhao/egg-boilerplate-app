/* eslint valid-jsdoc: "off" */

/**
 * @fileOverview 测试配置
 * @name config.unittest.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

module.exports = () => {

  const exports = {};

  exports.sequelize = {
    benchmark: false,
    logging: undefined,
  };

  return exports;

};
