const gravatar = require('gravatar');

const email = 'nareshinfo30';

const url = gravatar.url({email}, {
        s: '200'
    }
);

console.log(url);