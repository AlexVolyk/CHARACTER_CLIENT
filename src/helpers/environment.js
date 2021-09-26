let APIURL;
console.log(window.location.hostname)

switch(window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;
    case 'f-k-a-client-character-app.herokuapp.com':
        APIURL = 'https://f-k-a-server-character-app.herokuapp.com';
        break;
}


export default APIURL;