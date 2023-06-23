# Verificar a versão do node instalada:
node -v

# Gerar arquivo package.json na pasta SegundoCodigoTS (mudar para ela através do cd):
npm init -y

# Instalar o typescript
npm i -g typescript

# Comando para transpilar o código TS (repetir comando quando atualizar o arquivo original)
npx tsc index.ts

# Visualizar o arquivo no terminal
node index.js

# criar arquivo  de configuração do ts
npx tsc --init

# configurações no arquivo tsconfig.json criado
mudar target para "target": "ES6"
"module": "commonjs"
descomentar "sourceMap": true
descomentar outDir e mudar para "outDir": "./build"
descomentar rootDir e mudar para "rootDir": "./src"
descomentar "removeComments": true
descomentar "noImplicitAny": true

# para corrigir o erro após as configurações
criar pasta build dentro da pasta PrimeiroCodigoTS e mandar o arquivo index.js
criar pasta src dentro da pasta PrimeiroCodigoTS e mandar o arquivo index.ts

# adicionar script no arquivo package.json
na linha test (dentro de scripts) mudar para:
"start": "npx tsc &&  node ./build/index.js"

# no terminal dentro da pasta SegundoCodigoTS
npm start (novo comando para atualizar o arquivo js conforme atualizações do arquivo ts)

