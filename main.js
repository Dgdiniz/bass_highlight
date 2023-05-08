const {
    createAndStartLanguageClient,
    getServerOptions,
    getClientOptions,
} = require('./client/client');
const { registerEventListeners } = require('./client/eventListeners');
const { createErrorDecorationType } = require('./client/errorDecorations');

let client;
let errorDecorationType;

function activate(context) {
    const serverOptions = getServerOptions(context);
    const clientOptions = getClientOptions();

    client = createAndStartLanguageClient(context, serverOptions, clientOptions);
    errorDecorationType = createErrorDecorationType();
    registerEventListeners(context, client, errorDecorationType);
}

function deactivate() {
    return client ? client.stop() : undefined;
}

module.exports = {
    activate,
    deactivate,
};