var assert = require('assert');
var ProxyClient = require('../');

p = new ProxyClient({ rootUrl: 'https://domainr.com/api/json' });

var server = p.subapp().listen(3000);

p.get('/search')
  .query({
    client_id: 'example',
    q: 'domai.nr'
  })
  .end()
  .then(function (response) {
    assert(response);
    assert(response.status);

    if (response.status !== 200) {
      return p.rejectResponse(response);
    }

    assert(response.body);

    server.close();
  })
  .then(null, function (err) {
    console.error('Failed with: %s', err.message || err);

    process.exit(1);
  });
