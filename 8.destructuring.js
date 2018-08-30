// destructuring

// es5
var config = {
  host: 'lvh.me',
  port: 9000,
  protocol: 'http'
};

var host = config.host;
var port = config.port;
var protocol = config.protocol;
console.log('host: ', host);
console.log('port: ', port);
console.log('protocol: ', protocol);

// es6
const _config = {
  _host: 'lvh.me',
  _port: 9000,
  _protocol: 'http'
};
const { _host, _port, _protocol } = _config;
console.log('_host: ', _host);
console.log('_port: ', _port);
console.log('_protocol: ', _protocol);
