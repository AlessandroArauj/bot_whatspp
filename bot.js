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


async function stages(client, message) {

    if (message.isGroupMsg === false) {

        stage = userStages[message.from];

        stage = userStages[message.from];


        switch (stage) {

            case 'option':
                if (message.body == 'Sim' || message.body == 'SIM' || message.body == 'sim' || message.body == 'Voltar' || message.body == 'VOLTAR' || message.body == 'voltar') {
                    sendWppMessage(client, message.from, 'Digite o numero da opção que deseja saber:');
                    sendWppMessage(client, message.from, `*1* - Empresas convidadas`);
                    sendWppMessage(client, message.from, '*2* - Cursos integrados');
                    sendWppMessage(client, message.from, '*3* - Cantina/Lanchonete');
                    userStages[message.from] = 'Nome'
                }
                else if(message.body == 'Nao' || message.body == 'NAO' || message.body == 'nao' || message.body == 'Não' || message.body == 'NÃO' || message.body == 'não'){
                    sendWppMessage(client, message.from, 'Fim');
                }
                break;

            case 'Nome':
                if(message.body == '1'){
                    sendWppMessage(client, message.from, 'o evento...');
                        userStages[message.from] = 'option';
                }
              else if(message.body == '2'){
                    sendWppMessage(client, message.from, 'Para ver as outras opções digite *Voltar*');
                    sendWppMessage(client, message.from, 'informatica,...');
                    userStages[message.from] = 'option';
                }
                else if(message.body == '3'){
                    sendWppMessage(client, message.from, 'o cardapio...'); 
                    userStages[message.from] = 'option';
                }
                break;






            case 'Fim':
                    sendWppMessage(client, message.from, 'Fim');
                break;





            default: 


                console.log('*Usuário atual* from:' + message.from);



                sendWppMessage(client, message.from, `Ola, seja bem vindo ao assistente da feira de profissões do curso, estou aqui para fornecer informações sobre a feira.
                    Quer continuar? *SIM* ou *NÃO*`);

                userStages[message.from] = 'option'



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