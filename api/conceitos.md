# md = markdown

# O que é API e como funciona?
```
Um conjunto de especificações que define de que forma as aplicações irão se comunicar. Interface para que um sistema se comunique com outro sistema. 

A API é o 'garçom' que faz a comunicação/meio de campo entre o cliente e a cozinha.

A sigla API deriva da expressão inglesa Application Programming Interface que, traduzida para o português, pode ser compreendida como uma Interface de Programação de Aplicativos. Ou seja, API é um conjunto de normas que possibilita a comunicação entre plataformas por meio de uma série de padrões e protocolos.

Por meio de APIs, desenvolvedores podem criar novos softwares e aplicativos capazes de se comunicar com outras plataformas. Por exemplo: caso um desenvolvedor queira criar um aplicativo de fotos para Android, ele poderá ter acesso à câmera do celular através da API do sistema operacional, sem ter a necessidade de criar uma nova interface de câmera do zero.

O mesmo acontece com aplicativos que utilizam os serviços de mapas por meio da API do Google Maps ou, ainda, nas integrações entre apps, como o Spotify e o Instagram, que possibilita compartilhar faixas nos Stories.

A função de uma API é, basicamente, facilitar e simplificar o trabalho de desenvolvedores, além de oferecer um padrão para a criação de novas plataformas. Com o uso das APIs, não é necessário criar códigos personalizados para cada função que um programa for executar, o que simplifica a criação de novos aplicativos, softwares e plataformas em geral.

Além disso, as APIs também possuem papel fundamental quando o assunto é segurança, já que também são capazes de bloquear acesso e permissões a dados de software e hardware que algumas aplicações não podem usar.
```

# O que é um Endpoint de API?
As APIs e endpoints sempre foram um assunto bastante discutido entre desenvolvedores frontend e backend. Para desenvolver aplicativos e serviços úteis e sustentáveis, as APIs têm sido meios e facilitadores poderosos.

As APIs facilitam a transmissão de dados entre vários artefatos de software para resolver os problemas dos clientes. Quase todos os produtos modernos baseados na web oferecem suas próprias APIs para interagir e integrar seus serviços diretamente em qualquer projeto.

Um endpoint de API é uma localização digital exposta pela API a partir da API que recebe e responde as consultas. Cada endpoint é uma URL (Uniform Resource Locator) que fornece a localização de um recurso no servidor da API.

# O que é REST?
REST é o 'meio de campo' entre o front-end e o back-end.
O  REST trouxe a separação entre o back-end e o front-end. Informações são disponibilizadas através de um 
REST(Representational State Transfer, que significa Transferência Representacional de Estado) é um modelo de arquitetura e não uma linguagem ou tecnologia de programação, que fornece diretrizes para que os sistemas distribuídos se comuniquem diretamente usando os princípios e protocolos existentes da Web sem a necessidade de SOAP ou outro protocolo sofisticado.

É um conjunto de regras e convenções que permite que dois sistemas se comuniquem pela internet.

# O Que é uma API RESTful e Porque Isso Importa?
Quando uma API atende aos padrões propostos pelo estilo de arquitetura REST, ela pode ser caracterizada como uma API RESTful. Uma API deste tipo é especialmente útil para aplicações em nuvem. O RESTful é quando todas as regras/normas REST são aplicadas em uma API (exemplo: usa get,post, put, delete);

# Métodos HTTP
Em aplicação REST, os métodos mais utilizados são:

- O método GET é o método mais comum, geralmente é usado para solicitar que um servidor envie um recurso;-
- O método POST foi projetado para enviar dados de entrada para o servidor. Na prática, é frequentemente usado para suportar formulários HTML;
- O método PUT edita e atualiza documentos em um servidor;
- O método DELETE que como o próprio nome já diz, deleta certo dado ou coleção do servidor.

# Maturidade de modelo RESTful
Nível 0:
- A API precisa utilizar o protocolo HTTP para a comunicação.

Nível 1:
- A API deve possuir mapeamento de recursos bem definidos. Representando substantivos que fazem a correta utilização das URIs para os recursos respectivos. 

Nível 2:
- A API deve utilizar o protocolo HTTP de forma semântica com seus verbos (get, post, put, delete) de acordo com a requisição. 
Ex: enviando dados de entrada com o post.

Nível 3:
- A API deve mostrar o seu estado atual de relacionamento com os demais recursos da API.


# O que é JSON? (Notação de Objeto JavaScript)
O formato JSON (JavaScript Object Notation) é, como o nome sugere, uma forma de notação de objetos JavaScript, de modo que eles possam ser representados de uma forma comum a diversas linguagens.

Além disso, uma ideia que está fortemente enraizada neste formato é que ele seja facilmente trafegado entre aplicações em quaisquer protocolos, inclusive o HTTP. Portanto, a principal diferença entre um objeto JavaScript padrão e um JSON é o fato do JSON ser na realidade: um texto.~

# Para que serve o JSON?
O JSON é um formato de dados leve e de fácil leitura utilizado para troca de informações entre sistemas computacionais. Ele é frequentemente usado para transmitir dados entre um servidor e um cliente em aplicações web e móveis, embora também seja utilizado em diversos outros contextos.

Ele é amplamente utilizado na web para representar dados estruturados de forma legível tanto para humanos quanto para máquinas. Em resumo, o JSON é uma forma popular de representar dados estruturados e transferi-los entre diferentes sistemas.

Serve para transferir dados entre o servidor e o cliente (banco de dados e usuário).

ex modelo json:
{
   "cliente": {
       "id": 2020,
       "nome": "Maria Aparecida"
   },
   "pagamentos": [
       {
           "id": 123,
           "descricacao": "Compra do livro Cangaceiro JavaScript",
           "valor": 50.5
       },
       {
           "id": 124,
           "descricacao": "Mensalidade escolar",
           "valor": 1500
       }
   ]
}

# requisições HTTP
O protocolo HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso. GET, PUSH, DELETE, PUT, PATCH.

O PUT, é usado para alteração de um dado completo

O PATCH é usado para atualização parcial.

# Headers HTTP
Headers: campo para envio de informações adicionais (normalmente formatação ou autorização) que não tem relação com os dados em si: Authorization, Content Type, Accept, etc.

# HTTP Codes
100 - 199: Dados informativos;
200 - 299: Dados de sucesso;
300 - 399: Dados de redirecionamento;
400 - 499: Dados de erros de cliente;
500 - 599: Dados de erros de servidor.

# O que é um framework?
Framework é um conjunto de bibliotecas, que abordam funcionalidades, e estruturas, para o desenvolvimento de aplicações, a fim de fornecer soluções para um mesmo domínio de problema, permitindo a reutilização do seu código. Assim, através das diversas linguagens de programação, os Frameworks são criados e identificados pelas metodologias, propósitos, e implementações, aos quais os diversos tipos de aplicações, na maioria orientadas a objetos, poderão reutilizar suas estruturas e códigos.

# Express.js
O Express.js é um Framework rápido e um dos mais utilizados em conjunto com o Node.js, facilitando no desenvolvimento de aplicações back-end e até, em conjunto com sistemas de templates, aplicações full-stack.

Escrito em JavaScript, o Express.js é utilizado por diversas empresas ao redor do mundo, dentre elas a Fox Sports, PayPal, IBM, Uber, entre outras.

Muito popular tanto em grandes empresas quanto na comunidade, o Express facilita a criação de aplicações utilizando o Node em conjunto com o JavaScript, tornando este ecossistema ainda mais poderoso.
Fornece requisitos mínimos para construção de servidores web.


# Modelo MVC (Model-View-Controller)
Afinal, o que é MVC?
O MVC é um padrão de arquitetura de software. O MVC sugere uma maneira para você pensar na divisão de responsabilidades, principalmente dentro de um software web.

O princípio básico do MVC é a divisão da aplicação em três camadas: a camada de interação do usuário (view), a camada de manipulação dos dados (model) e a camada de controle (controller).

Com o MVC, é possível separar o código relativo à interface do usuário das regras de negócio, o que sem dúvida traz muitas vantagens que veremos mais à frente.

Quais os papéis de cada camada?
Quando falamos sobre o MVC, cada uma das camadas apresenta geralmente as seguintes responsabilidades:

● Model A responsabilidade dos models é representar o negócio. Também é responsável pelo acesso e manipulação dos dados na sua aplicação.

● View A view é responsável pela interface que será apresentada, mostrando as informações do model para o usuário.

● Controller É a camada de controle, responsável por ligar o model e a view, fazendo com que os models possam ser repassados para as views e vice-versa.

