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
                if (message.body == 'SIM') {
                    sendWppMessage(client, message.from, 'Digite o numero da opção que deseja saber:');
                    sendWppMessage(client, message.from, `*1* - Sobre o evento`);
                    sendWppMessage(client, message.from, '*2* - Cursos integrados');
                    sendWppMessage(client, message.from, '*3* - Canrtina/Lanchonete');
                    userStages[message.from] = 'Nome'
                }
                else if(message.body == 'Nao'){
                    sendWppMessage(client, message.from, 'Fim');
                }
                break;


            case 'Nome':
                sendWppMessage(client, message.from, 'Obrigada,');
                sendWppMessage(client, message.from, 'Digite seu *CPF*:');
                userStages[message.from] = 'CPF';
                break;

            case 'CPF':
                sendWppMessage(client, message.from, 'Obrigada por informar seu CPF: ');
                sendWppMessage(client, message.from, 'Fim');
                userStages[message.from] = 'Fim';
                break;



            case 'Fim':
                    sendWppMessage(client, message.from, 'Fim');
                break;





            default: // Olá 


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