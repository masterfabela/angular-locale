# Migracion de TSLint a Eslint
Desde el 2019 TsLint estara depreciado para la inspaccion de codigo y no se seguira su mantenimiento, por eso debemos migrar a Eslint que seguira manteniendo su soporte actual e incluira las funcionalidades extra de TsLint

La siguiente guia esta basada en la [Guia de migracion de Angular 8 con tslint de Babette Landmesser](https://medium.com/create-code/migrate-angular-8-from-tslint-to-eslint-4b0c44c8ae38)

## Instalar paquetes necesarios para migracion
Debemos instalar eslint mediante el NPM  
```npm i -D eslint```

Ademas deberemos instalar el paquete de configuracion de typeScript para eslint  
```npm i -D @typescript-eslint/{eslint-plugin,parser,eslint-plugin-tslint,tslint}```

## Configuracion Basica
En el siguiente paso debes tener una version de tslint superior a 5.18.0 de lo contrario no funcionara  

Con el siguiente comando se migraran las configuraciones del linter tslint a un linter eslint de la mejor manera posible  
```npx tslint-to-eslint-config```

Esto habra creado un archivo basico ``eslintrc.js`` con las reglas automaticamente detectadas desde tslint`

## Ejecutar ESLint
Como siguiente paso debemos colocar el comando de ejecucion de eslint en los script de ``package.json`` para facilitarnos su uso en todo momento  
```"eslint": "eslint 'src/**/*.ts'"```

Ahora podremos ejecutar el comando para analizar nuestros archivos  
```npm run eslint```

