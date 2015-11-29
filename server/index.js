
var path = require('path');
var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.register(require('inert'), throwOnNodeCallbackError);
server.register(require('vision'), throwOnNodeCallbackError);
server.register(require('h2o2'), throwOnNodeCallbackError);
server.register({
  register: require('good'),
  options: {
    reporters: [
      {
        reporter: require('good-console'),
        events: {
          response: '*',
          log: '*'
        }
      }
    ]
  }
}, throwOnNodeCallbackError);

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply.file(fromPublicDir('index.html'));
  }
});



server.start(function (err) {
  if (err) throw err;

  console.log('Server running at:', server.info.uri);
});

////////////////////

function throwOnNodeCallbackError(err) {
  if (err) throw err;
}

function fromPublicDir(filepath) {
  return path.resolve(__dirname, '../public', filepath);
}