const wppconnect = require('@wppconnect-team/wppconnect');

var userStages = [];

wppconnect.create({
    session: 'whatsbot',
    autoClose: false,
    puppeteerOptions: { args: ['--no-sandbox'] }
})
    .then((client) =>
        client.onMessage((message) => {
            console.log('Mensagem digitada pelo usuário: ' + message.body);
            stages(client, message);
        }))
    .catch((error) =>
        console.log(error));


function stages(client, message) {

    if (message.isGroupMsg === false) {

        stage = userStages[message.from];

        stage = userStages[message.from];
        switch (stage) {
            case 'Nome':
                const nome = message.body;
                sendWppMessage(client, message.from, 'Obrigada, ' + nome);
                sendWppMessage(client, message.from, 'Digite seu *CPF*:');
                userStages[message.from] = 'CPF';
                break;
            case 'CPF':
                const cpf = message.body;
                sendWppMessage(client, message.from, 'Obrigada por informar seu CPF: ' + cpf);
                sendWppMessage(client, message.from, 'Fim');
                userStages[message.from] = 'Fim';
                break;
            case 'Fim':
                sendWppMessage(client, message.from, 'Fim');
                break;
            default: // Olá 
                console.log('*Usuário atual* from:' + message.from);
                sendWppMessage(client, message.from, 'Bem vindo ao Robô de Whatsapp Da feira de profissões!');
                sendWppMessage(client, message.from, 'Por Favor, Informe seu *NOME*:');
                userStages[message.from] = 'Nome';
        }



    }

    else {
        console.log('Mensagem recebida de um grupo. Não será processada.');
    }

}


function sendWppMessage(client, sendTo, text) {
    client
        .sendText(sendTo, text)
        .then((result) => {
            // console.log('SUCESSO: ', result); 
        })
        .catch((erro) => {
            console.error('ERRO: ', erro);
        });
}



//mudança