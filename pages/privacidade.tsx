import Container from '@/components/Container/Container'
import Link from 'next/link'

import styles from '../styles/Privacy.module.css'

export default function Home() {
  return (
    <main className='pb-8'>
      <Container>
        <h1 className={styles.mainTitle}>Política de Privacidade</h1>
        <h2 className={styles.subTitle}>
          Nós nos preocupamos com o tratamento dos seus dados pessoais
        </h2>
        <h2 className={styles.mainTitle}>
          Política de privacidade aplicável à Wiss Telecom
        </h2>
        <p className={styles.paragraph}>
          A Wiss Telecom desenvolveu a presente Política de Privacidade, em
          conformidade com a{' '}
          <a
            className='underline pointer'
            target='_blank'
            rel='noreferrer'
            href='http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm'
          >
            Lei Geral de Proteção de Dados
          </a>{' '}
          (LGPD), a fim de comunicar de forma transparente aos seus clientes, as
          regras gerais de coleta, uso, armazenamento, tratamento, proteção,
          compartilhamento e exclusão de dados praticadas pela empresa.
        </p>
        <p className={styles.paragraph}>
          O Contrato de Prestação de Serviço de Comunicação Multimídia
          encontra-se devidamente registrado no X Cartório de Títulos e
          Documentos de XXXX sob n° XXXXXX, e que se encontra disponível para
          acesso no seguinte link: XXXXXXX, e que faz parte integrante e
          indissociável da presente.
        </p>
        <p className={styles.paragraph}>
          A coleta de dados dos clientes pela Wiss Telecom e inclusive o seu
          compartilhamento, se dará para fins de execução de contrato de
          prestação de serviços, bem como para fins de adequação à regulação dos
          serviços de telecomunicações.
        </p>
        <ol className='list-decimal'>
          <li>
            <h3>NO QUE CONSISTE A LEI GERAL DE PROTEÇÃO DE DADOS (LGPD)?</h3>
            <p>
              É uma lei federal que estabelece regras ao uso de dados pessoais
              por entidades públicas e privadas. A LGPD garante direitos aos
              titulares dos dados e estabelece a regra para coleta,
              armazenamento, processamento e compartilhamento de dados pessoais
              de pessoas físicas.
            </p>
          </li>
          <li>
            <h3>QUAIS SERÃO OS DADOS COLETADOS?</h3>
            <p>
              A Wiss Telecom poderá coletar e utilizar dados dos seus clientes
              para alimentação de seu sistema interno de cadastro de clientes,
              os quais podem ser classificados em duas categorias:
            </p>

            <ol className='list-[lower-roman] ml-4'>
              <li>
                DADOS PESSOAIS (dados que trazem elementos que identificam – ou
                podem identificar – um indivíduo);
              </li>
              <li>
                DADOS FINANCEIROS (trazem informações bancárias e/ou relativas
                ao sistema financeiro nacional);
              </li>
            </ol>
            <p>
              A Wiss Telecom poderá coletar informações tais como: Protocolo de
              Internet (IP, com data e hora e origem), dentre outros.
            </p>
          </li>
          <li>
            <h3>ACEITAÇÃO DA COLETA E DO COMPARTILHAMENTO DE DADOS</h3>
            <p>
              Ao estar ciente da Política de Privacidade praticada pela Wiss
              Telecom, o cliente reitera que está consciente de que os seus
              dados pessoais são usados e tratados com finalidade comercial
              legítima e que foram coletados mediante o seu consentimento livre,
              voluntário, informado e ausente de dúvidas.
            </p>
            <p>
              A Wiss Telecom somente dará acesso aos dados pessoais de seus
              clientes a terceiros
            </p>
            <ol className='list-[lower-roman] ml-4'>
              <li>
                em caso de prestação de serviços e/ou parcerias necessárias para
                o desenvolvimento das atividades escopo da prestação de seus
                serviços; ou, então,{' '}
              </li>
              <li>
                sob a apresentação de mandado judicial em processo de
                investigação de ilícitos.
              </li>
            </ol>
            <p>
              Os clientes declaram-se cientes da possibilidade de violação da
              segurança dos servidores da Wiss Telecom por ataques de hackers
              e/ou outras circunstâncias a que sistemas conectados à internet
              estejam sujeitos, casos em que, apesar dos melhores esforços da
              Wiss Telecom, as informações e dados do Provedor e de seus
              clientes poderão, eventualmente, ser ilegalmente acessadas por
              terceiros, bem como alguma falha operacional da Wiss Telecom sendo
              que, na hipótese da ocorrência de qualquer vazamento de
              informações, a Wiss Telecom envidará seus melhores esforços para
              comunicar aos clientes afetados com a maior antecedência possível.
            </p>
          </li>
          <li>
            <h3>USO E TRATAMENTO DOS DADOS</h3>
            <p>
              A Wiss Telecom poderá utilizar os dados coletados para uma série
              de propósitos, incluindo, mas não se limitando:
            </p>
            <ol className='list-[lower-roman] ml-4'>
              <li>
                Organização e controle de toda a parte de cadastro de cliente,
                financeira e fiscal, para que possa operar com segurança,
                aumentar sua área de atuação e número de clientes;
              </li>
              <li>
                Prestar os serviços de telecomunicações da forma mais adequada e
                eficiente;
              </li>
              <li>Cumprir outras obrigações legais e regulatórias;</li>
            </ol>
            <p>
              A Wiss Telecom poderá compartilhar dados dos seus clientes com:
            </p>
            <ul className='list-disc ml-8'>
              <li>
                Autoridades públicas, autoridades judiciárias e órgãos
                reguladores;
              </li>
              <li>Partes relacionadas, quando aplicável;</li>
              <li>
                Prestadores de serviços que realizam operações para a Wiss
                Telecom (Para trabalhar com a Wiss Telecom, os prestadores de
                serviços devem se comprometer a proteger os dados compartilhados
                com eles);
              </li>
              <li>
                Anunciantes para enviar comunicações que possam ser do interesse
                dos clientes.
              </li>
            </ul>
            <p>
              A Wiss Telecom adota medidas técnicas de proteção dos dados
              pessoais, dentre as quais, destacam-se:
            </p>
            <ol className='list-[lower-alpha] ml-8'>
              <li>
                Estabelecimento de controle restrito sobre o acesso aos dados
                mediante a definição de responsabilidades das pessoas que terão
                possibilidade de acesso e de privilégios mínimos de acesso
                exclusivo para determinados responsáveis;
              </li>
              <li>
                Estabelecimento de mecanismos de autenticação de acesso aos
                registros;
              </li>
              <li>
                Estabelecimento de política de senha que possua uma padronização
                de senha forte, com a obrigação de trocas de senhas
                periodicamente, impedindo a reutilização das senhas anteriores e
                bloqueio por tentativas sem sucesso;
              </li>
              <li>
                Os ambientes onde serão tratados dados são monitorados por meio
                de inventário detalhado dos acessos aos registros de conexão e
                de acesso a aplicações;
              </li>
              <li>
                Uso de soluções de gestão dos registros por meio de técnicas que
                garantam a inviolabilidade dos dados, como encriptação;
              </li>
              <li>
                Utilização de meios para proteção dos dados em
                repouso/armazenado;
              </li>
              <li>
                Estabelecimento de mecanismos de descarte seguro dos dados,
                eliminando a possibilidade de restauração;
              </li>
              <li>
                Manutenção de inventário atualizado de todos os dados
                armazenados, processados ou transmitidos.
              </li>
            </ol>
          </li>
          <li>
            <h3>ARMAZENAMENTO E EXCLUSÃO</h3>
            <p>
              Os dados serão armazenados pelo tempo necessário, principalmente
              visando observar e atender aos requisitos legais e regulatórios. A
              exclusão dos dados se dará de forma definitiva no prazo julgado
              conveniente pela Wiss Telecom, desde que observados os requisitos
              legais e regulatórios.
            </p>
          </li>
          <li>
            <h3>TRATAMENTO E TRANSFERÊNCIA DE INFORMAÇÃO</h3>
            <p>
              A utilização dos dados será limitada aos negócios realizados e seu
              uso restrito às partes interessadas, responsáveis pela entrega dos
              serviços e produtos contratados.
            </p>
          </li>
          <li>
            <h3>DIREITOS E DEVERES DOS CLIENTES</h3>
            <p>
              Quando autorizado pelas leis aplicáveis, o cliente poderá, por
              meio dos canais oficiais de comunicação da Wiss Telecom,
              solicitar:
            </p>
            <ul className='list-disc ml-8'>
              <li>A verificação dos seus dados pessoais;</li>
              <li>
                A revogação/ restrição de um consentimento anterior a qualquer
                momento;
              </li>
              <li>
                A cessão do processamento dos seus dados pessoais para marketing
                direto;
              </li>
              <li>Cópia dos seus dados pessoais;</li>
              <li>
                A correção dos dados pessoais que apresentem qualquer
                imprecisão;
              </li>
              <li>A exclusão dos seus dados pessoais.</li>
            </ul>
          </li>
          <li>
            <h3>LEGISLAÇÃO E FORO COMPETENTE</h3>
            <p>
              Esta Política será regida, interpretada e executada de acordo com
              as leis da República Federativa do Brasil, sendo competente o Foro
              da Comarca de Pirassununga, Estado de São Paulo, para dirimir
              qualquer dúvida decorrente deste instrumento. O Provedor de
              Internet consente com a competência desse juízo, e renúncia, neste
              ato, à competência de qualquer outro foro, por mais privilegiado
              que seja ou venha a ser.
            </p>
          </li>
          <li>
            <h3>FALE CONOSCO</h3>
            <p>
              Em caso de dúvidas, solicitações em relação à Lei Geral de
              Proteção de Dados (LGPD) ou sobre a nossa Política de Privacidade,
              entre em contato pelos canais oficiais de comunicação da Wiss
              Telecom, abaixo:
            </p>
            <ul>
              <li>
                E-mail:{' '}
                <a href='mailto:wiss@wisstelecom.com.br'>
                  wiss@wisstelecom.com.br
                </a>
              </li>
              <li>
                <a
                  className={styles.linkButton}
                  target='_blank'
                  rel='noreferrer'
                  href='https://wa.me/5519999749477'
                >
                  WhatsApp (19) 99974-9477
                </a>
              </li>
              <li>
                <Link href='/#contact'>
                  <a>Nosso formulário de contato</a>
                </Link>
              </li>
            </ul>
          </li>
        </ol>
      </Container>
    </main>
  )
}
