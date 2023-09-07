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
                if (message.body == 'Sim' || message.body == 'SIM' || message.body == 'sim' || message.body == 'Voltar' || message.body == 'VOLTAR' || message.body == 'voltar' || message.body == '1') {
                    sendWppMessage(client, message.from, 'Digite o numero da opção que deseja saber:');
                    sendWppMessage(client, message.from, `*1* - Empresas convidadas👨🏻‍💼`);
                    sendWppMessage(client, message.from, '*2* - Cursos integrados👨🏻‍🎓');
                    sendWppMessage(client, message.from, '*3* - Cantina/Lanchonete🍱');
                    sendWppMessage(client, message.from, '*4* - Outras exposições📰');
                    sendWppMessage(client, message.from, '*5* - Exposições de Cada Sala e Andar🏢');
                    userStages[message.from] = 'Nome'
                }
                else if(message.body == 'Nao' || message.body == 'NAO' || message.body == 'nao' || message.body == 'Não' || message.body == 'NÃO' || message.body == 'não'){
                    sendWppMessage(client, message.from, `Fim
`);
                }
                break;

                case 'option2':
                    if (message.body == '1') {
                        sendWppMessage(client, message.from, 'Digite o numero da opção que deseja saber:');
                        sendWppMessage(client, message.from, `*1* - Empresas convidadas👨🏻‍💼`);
                        sendWppMessage(client, message.from, '*2* - Cursos integrados👨🏻‍🎓');
                        sendWppMessage(client, message.from, '*3* - Cantina/Lanchonete🍱');
                        sendWppMessage(client, message.from, '*4* - Outras exposições📰');
                        sendWppMessage(client, message.from, '*5* - Exposições de Cada Sala e Andar🏢');
                        userStages[message.from] = 'Nome'
                    }
                    break;






            case 'Nome':
                if(message.body == '1'){
                    sendWppMessage(client, message.from, `•Fios de Berenice: Corte de Mecha de Cabelo
•Universidade Ítalo-Brasileiro
•UNISA
•STB Intercâmbio 
•Instituto ITMídia
•Nutricionista (Daniela Matos)
•São Paulo Open Centre`);
                    sendWppMessage(client, message.from, 'Para ver as outras opções digite *Voltar*');
                    
                        userStages[message.from] = 'option';
                }
              else if(message.body == '2'){
                    sendWppMessage(client, message.from, `•Informática👩‍💻
•Administração👨‍💼
•Eletrotécnica👩‍🏭
•Eletromecânica👨‍🔧
•Comunicação Visual👨🏻‍🎨
•Secretariado✍🏼
•Inglês🇺🇲`);
                    sendWppMessage(client, message.from, 'Para ver as outras opções digite *Voltar*');
                    userStages[message.from] = 'option';
                }

                else if(message.body == '3'){
                    sendWppMessage(client, message.from, 'Digite o número da opção que deseja saber');
                    sendWppMessage(client, message.from, `Cardápio📋:
1.Doces🥯
2.Salgados🍕
3.Bebidas🧃

                    `); 
                    
                    sendWppMessage(client, message.from, 'Para ver as outras opções digite *Voltar*');
                    userStages[message.from] = 'Cardapio';


                }
                

                else if(message.body == '4'){
                    sendWppMessage(client, message.from, `Exposições do CEDESP AVE MARIA
    •Assistente Administrativo
    •Logística
    •Metalmecânica – Ajustador e Torneiro Mecânico
    •Tecnologia de Redes e Manutenção de Computadores
Exposições do Instituto
    •Troca de Livros 
    •Oficina de Eletromecânica de Autos
    •Oficina de Auto Elétrica
    •Oficina Eletrotécnica
    •Livros do Frei
`

                    );
                    sendWppMessage(client, message.from, 'Para ver as outras opções digite *Voltar*');

                    userStages[message.from] = 'option';
                }

                else if(message.body == '5'){
                    sendWppMessage(client, message.from, `Salas:
    •Sala 4: Ótica Brauzo
    •Sala 5: Apresentação de Cursos
    •Sala 6: Bate-papo sobre a escolha de posições

1° ANDAR:
    •Sala 17: Posto Saúde
    •Sala 18: ADM: RH e POC
    •Sala 19: Empreendedorismo e Logística (Acelerados)
    •Sala 20: Inglês: Teste conhencimento

2° ANDAR:
    •Sala 24: Comunicação Visual
    •Sala 25: Informática: Montagem, Configuração e Redes
    •Sala 26: Informática: Programação
    •Sala 27: Elaboração de currículo

3° ANDAR:
    •Auditório: Cate e Simulação de entrevista
    •Auditório: SAS (Cad Único)
    •Sala 33: Linkedin
`

                    );
                    sendWppMessage(client, message.from, 'Para ver as outras opções digite *Voltar*');
                    userStages[message.from] = 'option';
                }

                break;



                case 'C':

                if(message.body == 'Sim' || message.body == 'SIM' || message.body == 'sim'){
                    sendWppMessage(client, message.from, 'Digite o número da opção que deseja saber');
                    sendWppMessage(client, message.from, `Cardápio📋:
1.Doces🥯
2.Salgados🍕
3.Bebidas🧃

                    `); 
                    userStages[message.from] = 'Cardapio'
                }

                    else if(message.body == 'Nao' || message.body == 'NAO' || message.body == 'nao' || message.body == 'Não' || message.body == 'NÃO' || message.body == 'não'){
                        sendWppMessage(client, message.from, `Fim,
            
quer voltar pro inicio? digite *1*`); 
                                
                        userStages[message.from] = 'option2'; 
                    }
                    break;




                    case 'Cardapio':

                    if(message.body == '1'){
                            sendWppMessage(client, message.from, `Doces:
1.Sonho(creme, chocolate e doce de leite)
2.Bolo(chocolate)                                     
                     `);
                     
                     sendWppMessage(client, message.from, `Deseja conferir mais um cardapio? *SIM* *NÃO*`)
                     userStages[message.from] = 'C'
                        }
    
                        else if(message.body == '2'){
                            sendWppMessage(client, message.from, `Salgados:
1.Mini Pizza
2.Croissant
3.Baguete Recheada
4.Hambúrguer
                        `)
                        sendWppMessage(client, message.from, `Deseja conferir mais um cardapio? *SIM* *NÃO*`)
                        userStages[message.from] = 'C'
                    }
    
                        else if(message.body == '3'){
                            sendWppMessage(client, message.from, `Bebidas:
1.Àgua
2.Café
3.Coca-cola
4.Sprite`
                       )
                       sendWppMessage(client, message.from, `Deseja conferir mais um cardapio? *SIM* *NÃO*`)
                        userStages[message.from] = 'C'

                    }
    
                    else if(message.body == 'Voltar' || message.body == 'VOLTAR' || message.body == 'voltar'){
                        sendWppMessage(client, message.from, `Fim,
            
quer voltar pro inicio? digite *1*`); 
                                
                        userStages[message.from] = 'option2'; 
                    }
    
                    break;

            default: 


                console.log('*Usuário atual* from:' + message.from);



                sendWppMessage(client, message.from, `Ola, eu sou o assistente da feira de profissões do Instituo Social Nossa Senhora de Fátima 🤖, estou aqui para fornecer informações sobre a feira de profissões do dia 30 de setembro.

Quer continuar para saber mais informações?
*SIM* ou *NÃO*`);

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