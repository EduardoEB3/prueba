# Documentación TAPLE

## Docusaurus
La documentación se distribuye como un site generado con [Docusaurus](https://docusaurus.io/). Como parte de este proyecto se incluye un breve [tutorial](tutorial_docusaurus.md).

## Creación de documentos
A continuación se exponen una serie de cuestiones a tener en cuenta en la creación de documentos. 

### TOC
Automáticamente ...

### Generación de figuras y diagramas
Las figuras a incluir en la documentación deben generarse, a ser posible, de una de estas 2 formas:
- Utilizando [mermaid](https://docusaurus.io/docs/markdown-features/diagrams) empotrado en los ficheros markdown
- Utilizando [draw.io](https://www.diagrams.net). En este caso debe generarse un fichero .drawio por cada fichero markdown donde se vayan a incluir las figuras, utilizando el mismo nombre de fichero y guardándolo en el mismo directorio. En esta [web](https://www.diagrams.net/example-diagrams) se pueden ver y descargar diversos ejemplos de diagramas. Visual Studio Code dispone de una [extensión](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio) que permite empotrar draw.io para trabajar de forma cómoda con estos ficheros. Una vez se tiene lista la figura debe ser exportada **en formato PNG** y almacenada en **static/img**. Siempre que la figura permite una visualización correcta tanto con fondo oscuro como claro se exportará con el fondo transparente. En caso contrario deberá ser exportada con fondo blanco. **IMPORTANTE**, en este último caso es importante dejar un borde en la imagen, por ejemplo de 10px, para evitar que los límites de la figura coincidan con los límites de la imagen. Hacer referencia a estas imágenes desde los ficheros markdown utilizando su ruta relativa. Aunque esto puede ser un problema si movemos un documento de carpeta, permite que funcione la previsualización en vcode, facilitando el desarrollo. Por ejemplo: 
```
![Event Lifecycle](../../static/img/single_ledger.png)
```

## Generación documentación código
De momento la documentación está empotrada. Posteriormente haremos uso d eun servicio externo.
Para generar la documentación usar: 
```bash
  cargo doc --no-deps --open --package core
```

## Gestión de versiones
Docusaurus permite diferentes métodos para la gestión de las versiones de la documentación. En este caso se utilizará la versión de desarrollo **current** para la preparación de la futura versión a publicar. Una vez se finaliza esta versión **current** debe ser etiquetada con su versión correspondiente, pasando la **current** a ser la preparación de la siguiente versión. 

Por ejemplo, para generar la versión 1.9.3 a partir de la actual **current** ejecutar lo siguiente: 

```bash
npm run docusaurus docs:version 1.9.3
```
A partir de este momento se generará un nuevo directorio con la versión etiquetada. Cualquier corrección sobre esta versión debe ser realizada sobre los ficheros almacenados en esta nueva carpeta. 

**IMPORTANTE**
La generación de la documentación del API REST es independiente. Ver el [tutorial](tutorial_docusaurus.md#openapi). También hay que tener en cuenta la documentación de Rust. Esta la tenemos que generar a mano y ponerla en su carpeta de static asociada a su versión. Y hay que actualizar el sidebar.js versionado, ya que la ruta de la documentación rust apuntará a next, y debemos dejarla apuntado al sitio correcto. 

## Construcción
Todo el contenido adicional para la construcción de las imágenes docker se encuentra en la carpeta **docker**. 

Se generan 2 imágenes docker distintas, una por entorno: 
- **PRE-PRODUCCIÓN**
  - Incluye la versión actualmente en desarrollo
  - Destinada a ser desplegada en un entorno protegido sin acceso público
  - En el fichero *docusaurus.config.js* debe estar habilitada la propiedad **includeCurrentVersion**
  - Se corresponde con la rama **development**
- **PRODUCCIÓN**
  - Incluye únicamente versiones estables
  - Destinada a ser desplegada bajo el dominio oficial del proyecto
  - En el fichero *docusaurus.config.js* debe estar deshabilitada la propiedad **includeCurrentVersion**
  - Se corresponde con la rama **main**


## Barra de anuncios del top de la web
- Se incluye en el fichero "**docusaurus.config.js**". Para modificar su estilo se hace utilizando el lenguje CSS y en nuestro proyecto se encuentra en el fichero "**custom.css**" con ruta `src/css/custom.css`. Para visualizar la documentación de Docusuarus sobre la barra de anuncios, visite el siguiente **[enlace](https://docusaurus.io/docs/api/themes/configuration#announcement-bar)**.