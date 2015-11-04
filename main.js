var fs = require('fs');
var ursa = require('ursa');

var keypair = ursa.generatePrivateKey(4096, 65537);
fs.writeFileSync('public.pem', keypair.toPublicPem(), 'utf8');
fs.writeFileSync('private.pem', keypair.toPrivatePem(), 'utf8');
