settings = {
  scheme: 'http',
  port: process.env.PORT || 5000,
  host: '',
  resource: '/socket.io',
  serviceKey: '8383cn83un4d83un4d83',
  backend: {
    host: 'http://new.kedem-auctions.com',
    port: 80,
    scheme: 'http',
    messagePath: '/nodejs/message'
  },
  transports: ['xhr-polling'],
  debug: true
};

