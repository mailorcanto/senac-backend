# rodar o node: 
node -v 

# criar arquivo package.json: 
npm init -y

# instalar servidor para api: 
npm i express //servidor
 
# instalar o pacote do mysql: 
npm i mysql2 //instância para se conectar com o banco de dados

# instalar o nodemon: 
npm i nodemon -D //-D para 'em desenvolvimento'. nodemon é como o live server, atualiza alterações automaticamente 

# instalar o dotenv: 
npm i dotenv //para configurações de variáveis de ambiente

# criar arquivo gitignore: (arquivo para listar pastas/arquivos que não serão enviados para o github)
.gitignore

# criar pasta backend (dentro de api-backend), transferir pasta node_modules para dentro dela

# dentro do arquivo .gitignore: 
backend/node_modules //para não enviar essa pasta para o github

# instalar eslint: npx eslint --init 
pressionar y para confirmar (se for primeira instalação)

(√ How would you like to use ESLint? · marcar: TO check sintax, find problems, and enforce code style
√ What type of modules does your project use? · --> commonjs
√ Which framework does your project use? · --> none
√ Does your project use TypeScript? · No / Yes  --> NO
√ Where does your code run? · -- > browser
√ How would you like to define a style for your project? · --> guide
√ Which style guide do you want to follow? · --> standard
√ What format do you want your config file to be in? · --> JavaScript
Checking peerDependencies of eslint-config-standard@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-config-standard@latest eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 || ^16.0.0  eslint-plugin-promise@^6.0.0
√ Would you like to install them now? · No / Yes --> YES
√ Which package manager do you want to use? · --> npm
Installing eslint-config-standard@latest, eslint@^8.0.1, eslint-plugin-import@^2.25.2, eslint-plugin-n@^15.0.0 || ^16.0.0 , eslint-plugin-promise@^6.0.0)

# criar pasta src dentro de backend;

# dentro da pasta src: criar server.js;

# dentro do arquivo server.js:
const express = require('express'); 
const app = express(); 
app.listen(3333, () => console.log('Running on port 3333'));

# no arquivo package.json abaixo de test: 
"start": "node ./backend/src/server.js" 

# na pasta ANTERIOR à pasta backend (... talentos23 pt 2/api-backend): 
npm start

# para sair da tela 'Running on post 3333': 
ctrl + c

# no package.json abaixo de start
"dev": "nodemon ./backend/src/server.js"

# no terminal: 
npm run dev

# estruturando o projeto:
#dentro de src: 
criar app.js

# dentro de app.js:
const express = require('express'); 
const app = express(); 

app.get('/',(request,response) =>{
    response.status(200).send('Dale Grêmio')
});

module.exports = app;

# dentro de server.js:
const app = require('./app');

app.listen(3333, () => console.log('Running on port 3333'));

# criar arquivo router.js dentro da pasta src

# dentro de router.js
const express = require('express');
const router = express.Router();

# no arquivo app.js:
const express = require('express'); 
const router = require('./router');
const app = express(); 

app.use(router); //disponibilizando as configurações de rotas para todo o app

app.get('/',(request,response) =>{
    response.status(200).send('Dale Grêmio')
});

module.exports = app;

# recortar de app e colar em router:
app.get('/',(request,response) =>{
    response.status(200).send('Router está funcionando')
}); 

# modificar router.get para:
const express = require('express');
const router = express.Router();

router.get('/',(request,response) =>{
    response.status(200).send('Router está funcionando')
});

module.exports = router; //comando exportar apenas ao final do código, para não perder possíveis alterações

# modificar server.js para:
const app = require('./app');

app.listen(3333, () => console.log('Running on port 3333'));
