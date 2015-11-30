
var Path = require('path');
var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080),
  routes: {
    files: {
      relativeTo: Path.join(__dirname, 'public')
    }
  }
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

server.route([
  {
    method: 'GET',
    path: '/',
    handler: {
      file: 'index.html'
    }
  }, {
    method: 'GET',
    path: '/{file*}',
    handler: {
      directory: {
        path: '.'
      }
    }
  }
]);



server.start(function (err) {
  if (err) throw err;

  console.log('Server running at:', server.info.uri);
});

////////////////////

function throwOnNodeCallbackError(err) {
  if (err) throw err;
}

