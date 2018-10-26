## Currency project AREM
### Johan Camilo López Girón

<a href="http://currencyproject-arem.s3-website-us-west-2.amazonaws.com"><img src="https://icon-icons.com/icons2/844/PNG/128/AWS_icon-icons.com_67084.png" alt="AWS Link" width="75" height="75"></a>

#### Documento arquitectura
#### Introduccion
- Esta documento presenta la arquitectura del proyecto desarrollado que en este caso es una aplicacion web de intercambio de monedas de diferente denominacion las cuales se obtienen desde un api gratuito el cual con una API key valida retorna los valores actualizados de cada una de las monedas. Esta aplicacion se desarrollo con base en ejemplos de paginas en Bootstrap y ademas usando lenguaje javascript y axios, github para manejo de versiones y AWS para el correcto almacenamiento y despliegue de la aplicacion web en un entorno que no necesita servidor.
Para desplegar la aplicacion en AWS fue necesario seguir un tutorial que ofrece la empresa amazon el cual da el paso a paso para poder implementar y desplegar la aplicacion con su servicio, en este caso aplicacion que no necesita servidor web para ser desplegada, el tutorial se puede en contrar en el siguiente link https://aws.amazon.com/es/serverless/build-a-web-app/.
Para el manejo de versiones y almacenamiento de repositorio se utlizo github, el cual ofrece la facilidad del manejo y almacenamiento con un poco de conocimiento en su funcionamiento y manejo.
#### Conceptos generales
- AWS, github, javascript, cliente, bootstrap, axios.
#### Implementacion
Para la implementacion de este proyecto primero se debia conocer cual era el formato en el cual el API que se nos ofrecia retornaba los datos que se solicitaban. Al verificar que los datos retornados eran en formato JSon ya se tenia una idea de como manejarlos y como recorrer sus valores, como en este caso JSon es key - value, se recorrian las keys del retorno de la pagina para obtener cada uno de los datos que se ofrecian. Al tener claro como se iban a estructurar y usar los datos que teniamos a la mano se comenzo a desarrollar la parte grafica de la aplicacion web, teniendo como premisa que debia ser desarrollada con tecnologia bootstrap y ademas debia ser amigable con el ususario y debia ser responsive design, entonces con ayuda de la documentacion de bootstrap y algunos tutoriales sobre CSS para posicionamiento de objetos en HTML se desarrollo la parte grafica. Al tener la posicion definida para cada objeto y la parte grafica definida, se prosiguio a desarrollar el controlador de la pagina, en este caso la conexion a la API y como se iban a mostrar estos datos obtenidos de la API, entonces se utilizo el lenguaje javascript y el lenguaje axios para conexiones HTTP el cual nos sirve para obtener las respuestas que arroja una peticion GET a una pagina determinada, entonces con algunos tutoriales de javascript y de axios se logro obtener y organizar la informacion obtenida, esto para agregar la funcionalidad de intercambio de moneda que quiera el usuario, actualizacion de precios de monedas y creacion de tabla con cada una de las monedas que la aplicacion ofrece.
Al tener practicamente la aplicacion web terminada, se prosiguio a alojar la aplicacion web en AWS, en este caso se siguio el tutorial dado para poder realizar esto y que la aplicacion se pueda mostrar para cualquier usuario que la quiera usar desde cualquier red, ya que AWS ofrece la opcion de dar acceso publico a la aplicacion.
#### Pruebas

#### Graficas
#### Conclusiones
