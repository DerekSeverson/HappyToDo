
var path = require('path');
var Hapi = require('hapi');
var Inert = require('inert');
var Vision = require('vision');
var H2o2 = require('h2o2');

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.register(Inert,throwOnNodeCallbackError);
server.register(Vision, throwOnNodeCallbackError);
server.register(H2o2, throwOnNodeCallbackError);

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply.file(fromPublic('index.html'));
  }
});



server.start(function (err) {
  if (err) throw err;

  console.log('Server running at:', server.info.uri);
});


function throwOnNodeCallbackError(err) {
  if (err) throw err;
}

function fromPublic(filepath) {
  return path.resolve(__dirname, '../public', filepath);
}