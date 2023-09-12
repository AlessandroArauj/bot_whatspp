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
                    sendWppMessage(client, message.from, `*1* - Sobre a Escola do frei`);
                    sendWppMessage(client, message.from, `*2* - Cursos oferecidos pela instituição`);
                    sendWppMessage(client, message.from, `*3* - Inscrições / Processo Seletivo`);
                    sendWppMessage(client, message.from, `*4* - Matricula / Documentação`);
                    sendWppMessage(client, message.from, `*5* - Padaria do frei`);
                    sendWppMessage(client, message.from, `*6* - Sobre a feira de profissões`);
                    sendWppMessage(client, message.from, `*7* - Encerrar Atendimento`);
                    userStages[message.from] = 'Nome'; 

                }
                else if(message.body == 'Nao' || message.body == 'NAO' || message.body == 'nao' || message.body == 'Não' || message.body == 'NÃO' || message.body == 'não'){
                        sendWppMessage(client, message.from, `Fim,
            
quer voltar pro inicio? digite *1*`); 
                                
                    userStages[message.from] = 'option2'; 
                }
                break;

                case 'option2':
                    if (message.body == '1') {
                        sendWppMessage(client, message.from, 'Digite o numero da opção que deseja saber:');
                        sendWppMessage(client, message.from, `*1* - Sobre a Escola do frei`);
                        sendWppMessage(client, message.from, `*2* - Cursos oferecidos pela instituição`);
                        sendWppMessage(client, message.from, `*3* - Inscrições / Processo Seletivo`);
                        sendWppMessage(client, message.from, `*4* - Matricula / Documentação`);
                        sendWppMessage(client, message.from, `*5* - Padaria do frei`);
                        sendWppMessage(client, message.from, `*6* - Sobre a feira de profissões`);
                        sendWppMessage(client, message.from, `*7* - Encerrar Atendimento`);
                        userStages[message.from] = 'nome:'; 
                    }
                    break;

                    case 'feira': 
                        sendWppMessage(client, message.from, 'Digite o numero da opção que deseja saber:');
                        sendWppMessage(client, message.from, `*1* - Empresas convidadas👨🏻‍💼`);
                        sendWppMessage(client, message.from, '*2* - Outras exposições📰');
                        sendWppMessage(client, message.from, '*3* - Exposições de Cada Sala e Andar🏢');
                        userStages[message.from] = 'Nome'
                    break;    

            case 'Nome':
                if(message.body == '1'){
                    sendWppMessage(client, message.from, `Conheça um pouco mais da nossa história, cursos e eventos, acesse nosso site:
acaonsfatima.org.br

Acesse também nossas normas de convivência:
https://acaonsfatima.org.br/2022/01/22/normas-2023/`);

                    sendWppMessage(client, message.from, `Contato:
Instituto Social Nossa Senhora de Fátima

Av. Coronel Octaviano de Freitas Costa, 463 – Veleiros – São Paulo
https://goo.gl/maps/pwAU32ZfvSMSYqMZA

secretaria@acaonsfatima.org.br
acaonsfatima.org.br

(11)   5687-8876
(11) 96398-6252`);
                }

                else if(message.body == '2'){
                    sendWppMessage(client, message.from, `O Instituto Social Nossa Senhora de Fátima disponibiliza 03 modalidades de cursos; são eles: Cursos Técnicos, Cursos de Qualificação e Cursos Livres, cada um com sua própria carga horária e jornada de aprendizado voltado a área de atuação.`);
                    sendWppMessage(client, message.from, `No termino de todos os cursos, o aluno receberá o certificado ou diploma de conclusão.`);
                    sendWppMessage(client, message.from, `Veja abaixo todos os cursos que o instituto disponibiliza:`);
                    sendWppMessage(client, message.from, `Cursos Técnicos: 
- Administração: Gerenciamento empresarial e conhecimento em diversas áreas administrativas, 12 meses, carga horária total: 1000 horas. 
- Informática: Linguagem de programação, bancos de dados e redes, 12 meses, carga horária total: 1200 horas. 
- Comunicação Visual: Design e produção gráfica, 12 meses, carga horária total: 1000 horas.`);

                    sendWppMessage(client, message.from, `Cursos de Qualificação:
- Eletrotécnica: Eletricidade e sistemas eletrônicos, 12 meses, carga horária total: 1000 horas. 
- Eletromecânica: Manutenção de sistemas mecânicos e elétricos, 12 meses, carga horária total: 1000 horas.`);

sendWppMessage(client, message.from, `Cursos Livres:
- Inglês: Com diversos níveis e horários disponíveis (tens, básico, médio, pré-avançado e avançado), consultar os horários disponíveis para cada curso, 12 meses, carga horária total: 500 horas. 
- Eletricista Instalador: Instalação e manutenção elétrica, 06 meses, noturno, carga horária total: 120 horas
- Informática Básica – Excel: Conhecimentos básicos de informática e pacote office, 06 meses, noturno, carga horária total: 120 horas`);
                }

                else if(message.body == '3'){
                    sendWppMessage(client, message.from, `As inscrições para 2024 começaram em 17 de outubro de 2023, o candidato deve se inscrever pelo aplicativo e agendar o dia e a hora para finalizar a inscrição no instituto.`); 
                    sendWppMessage(client, message.from, `Após finalizar a sua inscrição, você receberá o manual do candidato, onde terá o número de sua inscrição, o local, a data e a hora da prova do processo seletivo. No manual também haverá informações do procedimento de matrícula caso seja aprovado(a).`);
                    sendWppMessage(client, message.from, `Acompanhe nossas redes sociais e fique por dentro de tudo que acontece no instituto, através de nossas redes informaremos, o link para baixar o aplicativo das inscrições, a data de início, data da prova, resultado da prova.
acaonsfatima.org.br, instagram, facebook e linkedin`);
                }

                else if(message.body == '4'){
                    sendWppMessage(client, message.from, `Só poderão efetuar a matrícula, os alunos aprovados no processo seletivo.`);
                    sendWppMessage(client, message.from, `O resultado do processo seletivo ficará disponível em nosso site, caso seu nome esteja na lista de aprovados, você deverá comparecer no instituto para efetuar sua matrícula.`);
                    sendWppMessage(client, message.from, `Acompanhe nossas redes sociais e fique por dentro de tudo que acontece no instituto 
acaonsfatima.org.br, instagram, facebook e linkedin`);
                }

                else if(message.body == '5'){
                    sendWppMessage(client, message.from, `Nossa padaria oferece uma variedade de produtos que vão além de simples pães, mas sim, do tradicional pão fresquinho, pães salgados, croissants, bolos, pães doces, torradas e muito mais. Os produtos são preparados diariamente, com muito carinho e qualidade.`);
                }

                else if(message.body == '6'){
                    sendWppMessage(client, message.from, 'Digite o numero da opção que deseja saber:');
                    sendWppMessage(client, message.from, `*1* - Empresas convidadas👨🏻‍💼`);
                    sendWppMessage(client, message.from, '*2* - Outras exposições📰');
                    sendWppMessage(client, message.from, '*3* - Exposições de Cada Sala e Andar🏢');
                    userStages[message.from] = 'Nome'
                }


                else if(message.body == '7'){
                    sendWppMessage(client, message.from, `Esperamos que as informações tenham sido úteis! Caso tenha mais alguma dúvida ou precisar de informações adicional, entre em contato conosco.
                    
Para iniciar o programa novamente digite *Voltar*`);
                    userStages[message.from] = 'option'
                }
            break;


            case 'optionfeira':
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

                else if(message.body == '3'){
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




            default: 


                console.log('*Usuário atual* from:' + message.from);



                sendWppMessage(client, message.from, `Olá! eu sou o assistente Virtual do Instituo Social Nossa Senhora de Fátima! 🤖

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