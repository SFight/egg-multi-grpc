'use strict';

const mock = require('egg-mock');

describe('test/multi-grpc.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/multi-grpc-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, mutlGrpc')
      .expect(200);
  });
});
