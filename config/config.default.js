'use strict';

/**
 * egg-mutl-grpc default config
 * @member Config#mutlGrpc
 * @property {String} SOME_KEY - some description
 */
exports.multiGrpc = {
  /**
   * grpc config
   * @member Config#grpc
   * @property {String} dir - proto files dir, relative path
   * @property {String} property - default attach to `ctx.grpc.**`
   * @property {Object} loadOpts - options pass to `grpc.load(file, type, opts)`
   * @property {Boolean} loadOpts.convertFieldsToCamelCase - default to true, `string user_name` -> `userName`
   * @property {Object} clientOpts - options pass to `new Client(host, credentials, opts)`
   * @property {String} endpoint - default andress to connect, for debug or showcase purpose
   * @property {Number} timeout - default 5000ms
   */
  // grpc: {
  //   dir: 'app/proto',
  //   property: 'grpc',
  //   loadOpts: {
  //     convertFieldsToCamelCase: true,
  //   },
  //   clientOpts: {},
  //   endpoint: 'localhost:50051',
  //   timeout: 5000,
  // },
};
