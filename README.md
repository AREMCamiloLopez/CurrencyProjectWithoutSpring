## Currency project AREM
### Johan Camilo López Girón

<a href="http://currencyproject-arem.s3-website-us-west-2.amazonaws.com"><img src="https://icon-icons.com/icons2/844/PNG/128/AWS_icon-icons.com_67084.png" alt="AWS Link" width="75" height="75"></a>
#### Documento arquitectura
#### Introduccion
- Esta documento presenta la arquitectura del proyecto desarrollado que en este caso es una aplicacion web de intercambio de monedas de diferente denominacion las cuales se obtienen desde un api gratuito el cual con una API key valida retorna los valores actualizados de cada una de las monedas. Esta aplicacion se desarrollo con base en ejemplos de paginas en Bootstrap y ademas usando lenguaje javascript y axios, github para manejo de versiones y AWS para el correcto almacenamiento y despliegue de la aplicacion web en un entorno que no necesita servidor, ademas de esto, se utilizo AWS Lambda para obtener los datos desde el API de las monedas y AWS Api gateway para permitir obtener los datos desde nuestro propio api.
Para desplegar la aplicacion en AWS fue necesario seguir un tutorial que ofrece la empresa amazon el cual da el paso a paso para poder implementar y desplegar la aplicacion con su servicio, en este caso aplicacion que no necesita servidor web para ser desplegada, el tutorial se puede en contrar en el siguiente link https://aws.amazon.com/es/serverless/build-a-web-app/.
Para el manejo de versiones y almacenamiento de repositorio se utlizo github, el cual ofrece la facilidad del manejo y almacenamiento con un poco de conocimiento en su funcionamiento y manejo.
#### Conceptos generales
- AWS, github, javascript, cliente, bootstrap, axios, API gateway, AWS Lamda.
#### Implementacion
- Para la implementacion de este proyecto primero se debia conocer cual era el formato en el cual el API que se nos ofrecia retornaba los datos que se solicitaban. Al verificar que los datos retornados eran en formato JSon ya se tenia una idea de como manejarlos y como recorrer sus valores, como en este caso JSon es key - value, se recorrian las keys del retorno de la pagina para obtener cada uno de los datos que se ofrecian. Al tener claro como se iban a estructurar y usar los datos que teniamos a la mano se comenzo a desarrollar la parte grafica de la aplicacion web, teniendo como premisa que debia ser desarrollada con tecnologia bootstrap y ademas debia ser amigable con el ususario y debia ser responsive design, entonces con ayuda de la documentacion de bootstrap y algunos tutoriales sobre CSS para posicionamiento de objetos en HTML se desarrollo la parte grafica. Al tener la posicion definida para cada objeto y la parte grafica definida, se prosiguio a desarrollar el controlador de la pagina, en este caso la conexion a la API y como se iban a mostrar estos datos obtenidos de la API, entonces se utilizo el lenguaje javascript y el lenguaje axios para conexiones HTTP el cual nos sirve para obtener las respuestas que arroja una peticion GET a una pagina determinada, entonces con algunos tutoriales de javascript y de axios se logro obtener y organizar la informacion obtenida, esto para agregar la funcionalidad de intercambio de moneda que quiera el usuario, actualizacion de precios de monedas y creacion de tabla con cada una de las monedas que la aplicacion ofrece.
Al tener practicamente la aplicacion web terminada, se prosiguio a alojar la aplicacion web en AWS, en este caso se siguio el tutorial dado para poder realizar esto y que la aplicacion se pueda mostrar para cualquier usuario que la quiera usar desde cualquier red, ya que AWS ofrece la opcion de dar acceso publico a la aplicacion. Para la implementacion de las funciones AWS Lambda fue necesario seguir la documentacion que nos ofrece amazon y ademas tutoriales sobre como realizar una peticion de tipo get desde node.js. Al realizar esta peticion y obtener los datos correctamente estructurados en formato JSON, se prosiguio a montar el API gateway, tambien basandonos en documentacion y ejemplos de AWS.
#### Pruebas
- Como se puede observar en la siguiente imagen, los archivos de la aplicacion web estan correctamente alojados en S3, el servicio de alojamiento que ofrece AWS y se puede observar en la pestaña de properties que el acceso a la aplicacion es publico:
![AWS S3](https://github.com/AREMCamiloLopez/CurrencyProjectWithoutSpring/blob/master/screenshots/Screenshot%20from%202018-10-26%2011-06-59.png)

- Como se puede observar en la siguiente imagen la aplicacion ya esta cargada en ASW Services y despliega correctamente con el link que genera AWS, se puede observar que es un diseño amigable con el usuario y sus elementos estan correctamente posicionados, ademas, al cargar la pagina, el primer mensaje que se muesta es que los valores de las monedas ya han sido cargados correctamente:
![Currency](https://github.com/AREMCamiloLopez/CurrencyProjectWithoutSpring/blob/master/screenshots/Screenshot%20from%202018-10-26%2011-09-28.png)

- En la siguiente immagen se puede observar que cuando el usuario quiere hacer un cambio de una moneda a otra pero no ha seleccionado la moneda base, se le muestra un mensaje con ambiente de alerta que le hace entender que tiene que seleccionar una moneda base antes de hacer un cambio:
![Currency](https://github.com/AREMCamiloLopez/CurrencyProjectWithoutSpring/blob/master/screenshots/Screenshot%20from%202018-10-26%2011-09-53.png)

- Como se puede observar en esta imagen, cuando el usuario da click en el boton de mostrar o esconder la tabla, la aplicacion coloca los elementos de otra forma pero sn afectar la posicion de estos y dejandolo de una forma amigable:
![Currency](https://github.com/AREMCamiloLopez/CurrencyProjectWithoutSpring/blob/master/screenshots/Screenshot%20from%202018-10-26%2011-10-07.png)

- En esta imagen se puede observar que cuando el usuario ha seleccionado correctamente una moneda base pero no ha ingresado el valor de la moneda a ser calculado, esta muestra un mensaje de alerta el cual hace entender al usuario que debe ingresar un valor:
![Currency](https://github.com/AREMCamiloLopez/CurrencyProjectWithoutSpring/blob/master/screenshots/Screenshot%20from%202018-10-26%2011-10-28.png)

- En esta imagen se puede observar que cuando el usuario ha seleccionado correctamente una moneda y a ingresado un valor correcto, la aplicacion le calcula el valor al que corresponde su moneda base a la moneda del cambio, se muestra en pantalla el valor calculado y ademas se le muestra un mensaje el cual dice que la conversion ha sido completada:
![Currency](https://github.com/AREMCamiloLopez/CurrencyProjectWithoutSpring/blob/master/screenshots/Screenshot%20from%202018-10-26%2011-10-43.png)

- En esta imagen se puede observar como las funciones Lambda estan correctamente creadas en AWS Lambda functions, cada una con su respectivo nombre:
![AWS Functions](https://github.com/AREMCamiloLopez/CurrencyProjectWithoutSpring/blob/master/screenshots/Screenshot%20from%202018-11-05%2000-53-41.png)

- En esta imagen se puede observar como estan creados correctamente los API gateways necesarios para este proyecto, en este caso currencyNames son los nombres de cada una de las monedas que ofrece el API que se utilizo, y currencyPrices son los precios de cada una de las monedas con base en dolar americano USD:
![AWS Api gateway](https://github.com/AREMCamiloLopez/CurrencyProjectWithoutSpring/blob/master/screenshots/Screenshot%20from%202018-11-05%2000-53-07.png)

- En estas imagenes se puede observar cada uno de los API gateways con sus test aprobados, la respuesta es el JSON que ofrece el API principal:
![AWS Api gateway test](https://github.com/AREMCamiloLopez/CurrencyProjectWithoutSpring/blob/master/screenshots/Screenshot%20from%202018-11-05%2000-51-49.png)
![AWS Api gateway test](https://github.com/AREMCamiloLopez/CurrencyProjectWithoutSpring/blob/master/screenshots/Screenshot%20from%202018-11-05%2000-52-09.png)

- En estas dos imagenes se puede observar el JSON que retorna cada uno de los API Gateways pero en el navegador:
![AWS Api gateway navigator](https://github.com/AREMCamiloLopez/CurrencyProjectWithoutSpring/blob/master/screenshots/Screenshot%20from%202018-11-05%2000-52-35.png)
![AWS Api gateway navigator](https://github.com/AREMCamiloLopez/CurrencyProjectWithoutSpring/blob/master/screenshots/Screenshot%20from%202018-11-05%2000-52-45.png)
#### Conclusiones
- En este proyecto se pudo observar que con el conocimiento correcto sobre alojamiento de aplicaciones web en AWS, el correcto manejo de las funciones Lambda de AWS y el manejo de API gatway, conocimiento sobre Bootstrap, javascript y algun lenguaje que permita obtener la respuesta a una peticion a una pagina web se puede desarrollar una aplicacion web de cualquier indole y ademas dejandola publica a cualquier usuario que la quiera utilizar desde cualquier red, ademas, que AWS la mantiene siempre activa, y lo mejor, no es necesario un servidor de alojamiento para la aplicacion.
