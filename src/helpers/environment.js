let APIURL = '';
console.log(window.location.hostname)

switch(window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;

    case 'freya-alex-kinsey-client.herokuapp.com':
        APIURL = 'freya-alex-kinsey-server.herokuapp.com'
        break;
}
    // case 'characterclient.herokuapp.com':
    //     APIURL = 'https://characterserver.herokuapp.com'
    //     break;

export default APIURL;