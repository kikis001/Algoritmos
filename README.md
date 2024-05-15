# ¿Qué son las estructuras de datos y algoritmos?


# Estructuras de datos
Las estructuras de datos nos sirven para almacenar y manejar la información. Existen varias estructuras de datos y dependiendo de la necesidad de nuestro proyecto o algoritmo podemos aplicar la correspondiente.

# Tipos de estructuras de datos
# Líneales: 
Los datos están organizados de forma secuencial uno detrás de otro. Ejemplos:
Arrays, strings, listas enlazadas, las pilas, colas, etc.
# No líneales:
No están organizadas secuencialmente, sino más bien de una forma jerárquica en la que los datos están conectados unos con otros o relaciones. Ejemplos:
Grafos, arboles

#  Importancia de las estructuras de datos y algoritmos 
Sirven para resolver problemas de programación, ya que, sin importar la tecnología que usamos, hay millones de formas que se puede resolver un problema, pero hay ciertas soluciones que son más elegantes y que priorizan el producto de calidad

# Estructuras de datos y algoritmos a estudiar 
Para resolver un problema no solo se usa una estructura, un algoritmo y un patrón, sino que tenemos que aprender a combinar estos conceptos de tal forma que consigamos la mejor complejidad, la solución más eficiente, la que consuma menos espacio(depende del producto de calidad)

# Estructuras
Arreglos
Strings
Listas encadenadas
Tablas de Hash y conjuntos de hash
Pilas
Colas
Árboles
Grafos
Tries

# Conceptos y algoritmos 
Notación Big O
Algoritmos de ordenamiento 
Algoritmos de búsqueda 
DFS y BFS
Manipulación de bits
Recursión
Programación dinámica

# Patrones
Dos punteros 
Ventana deslizante
Apuntador rápido y lento
Entre otros...

# ¿Cómo es comúnmente una entrevista de problemas de programación?
Prepara una introdución donde menciones 
qué proyectos, qué experiencias quieres compartir, lo que quieres dejar, la imagen que quieras dejar

recomendación:
El problema será ambiguó de forma intencional, por lo cual, aclara tus dudas, haz preguntas

Planea las preguntas que tengas antes de iniciar la entrevista, muestra interés

# Criterios de evaluación en empresas grandes de tecnología 
1- Comunicación -> que el entrevistador entienda tu forma de pensar, que puedas trabajar en equipo
2- Conocimiento técnico -> qué tan bien concoes las estructuras de datos y algoritmicas? qué tan bien las aplicas? qué tan bien programas?
3- Pruebas -> La solución del problema es importante, pero cómo probamos que está bien?, que es coherente
4- Capacidad de resolución de problemas -> cómo llegas de una solución sucia (no eficiente) a una elegante (rápida)

# ¿Cómo resolver un problema de programación? 
Antes de nada, preguntarnos qué tenemos que hacer?
Pasos:
1. Hacer preguntas -> preguntarle a tu entrevistador
2. Identificar casos de uso (incluso los extraños)
Qué pasa si hay una situación externa, que solo pasa con ciertas entradass
3. Diseñar la solución (aún no implementarla) ¿Qué tan escalabre es tu solución?
Puede ser una solución un poco sucia, la más fácil y de ahí partir optimizar un poco hasta llegar a algo límpio y elegente (partir el problema grande en unos pequeños -> cosas simples para después combinar esas soluciones)
4. Implementar (ahora sí) al implementar mantener la comunicación 
5. Probar el código (en algunos casos no hay un botón para correr el código, sino que esperan es cómo lo haríamos manualmente, línea por línea evaluando nuestro código). Elegir un ejemplo que aborde varios casos o uno significante y empezar a probar paso a paso 

# Tips para entrevistas: preparación y ejecución
Tenemos que aprender a comunicar el problema, partir de algo difícil a algo más sencillo, es aprender la teoría y practicar constantemente
Junta el 
Preparación: 
Crear tu plan de estudio. Donde se combinen el conocimiento técnico, hacer problemas de programación y exponerlo a los demás (con tiempos)
2. 20 minutos a intentr resolver un problema, después de ello busca una o diferentes soluciones
3. Recursos
4. Guía de patrones. Cuando haces muchos problemas, muchos se parecen, encuentras patrones, agrupar esos problemas y identificar la solución y la forma de abordarlo 

Ejecución:
1. No empezar a programar de inmediato
2. No escribir pseudocódigo 
3. Escoger un lenguaje con el que se sientan cómodos
4. Entender el problema
5. Ponerse metas. No sé cuál es la respuesta, pero sé que está clase de algoritmos se puede resolver con cierta complejidad espacial, etc...
6. Practicas, resuelvan muchos problemas
7. Escribir código elegante, limpio y bonito

# Notación Big O
Nos permite describir la cantidad de recursos que ocupará nuestro algoritmo
Cuando tenemos está notación se refieren al peor caso y se escribe con la siguiente notación_
O(f(x)) recibe una función y esa función describe el cómo aumenta la cantidad de recursos utilizados
x -> cantidad de datos que recibamos como entrada
y -> lo que queremos medir (tiempo, la memoria que ocupa, etc)
Complejidad constante -> no importa la cantidad de datos, no aumenta el tiempo, etc; notación: O(1)
Complejidad logaritmica -> son para tipos de algoritmos como busqueda binaria, etc; notación: O(logn) (n es la cantidad de datos)
complejidad líneal -> iteración de una lista, notación O(n)
Complejidad O(nlogn) -> algoritmos de ordenamiento (es como la grafica de una exponencial)
(evitar) Cuadratica O(n^k) K -> constante
(evitar) Factorial O(n!)

Cuando llamamos una función, ya sea de una librería o del lenguaje, está complejidad será O(nlogn)
Cuando tenemos muchas complejidades, estás se suman y se ve cuál es la complejidad del más grande y las demás se desechan