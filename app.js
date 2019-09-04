/**
 * 插件启动入口
 */

'use strict';

// const loader = require('./lib/grpc_loader');
const loader = require('./lib/grpc_loader');

module.exports = app => {
  // grpc.setLogger(app.coreLogger);
  // const GrpcLoader = app.loader.GrpcLoader = loader(app);
  // new GrpcLoader({}).load();
  const loaders = loader(app);
  for (let i = 0; i < loaders.length; i++) {
    const GrpcLoader = loaders[i];
    // const GrpcLoader = app.loader.GrpcLoader = loader(app);
    // const GrpcLoader = loader(app);
    new GrpcLoader({}).load();
  }
};
