
const uiPort = 3000;
const servicePort = 8080;

const app = {
    uiEndPoint: `http://18.223.24.198:${uiPort}/`
    // uiEndPoint: `http://localhost:${uiPort}/`
    , serviceEndPoint: `http://3.17.204.184:${servicePort}/`
    //, serviceEndPoint: `http://localhost:${servicePort}/`
}

export default app;