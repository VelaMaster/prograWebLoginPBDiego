# Ejercicio Login
# Perez Barrios Diego

Lo primero que realice fue crear el proyecto nuevo
ng new prograWebLoginPBDiego

y enseguida el servicio para manejar las solicitudes
![image](https://github.com/user-attachments/assets/ede1f7be-5206-463b-b9df-a2e5fe8cd7e9)

Los componentes que cree fueron el de login que es un formulario donde se ingresa el usuario y la contrasena
![image](https://github.com/user-attachments/assets/382df62b-739a-4bae-b347-4c07048a814d)

Y otro para que cuando diriga a la pantalla de Inicio de un mensaje de Bienvenida el componente de inicio
![image](https://github.com/user-attachments/assets/650ff8e1-ffd3-4f84-b61e-d298a9f6e512)

Para verificar si es correcto las contrasenas modifique el login.component.ts
![image](https://github.com/user-attachments/assets/284d1967-94e9-42b3-8ac2-b330073124a3)
Le pasamos las variables de user y password y el servicio de autenticacion verifican si es falsa o verdadera si es verdadera envia a la ruta de /inicio si es false aparece el showErrorMessage

Ya en funcionamiento se ve de la siguiente forma:
![image](https://github.com/user-attachments/assets/75fafbfe-62ad-4519-a627-5d9d1c4facc3)

Le ingresamos datos incorrectos:
![image](https://github.com/user-attachments/assets/d4b6a5d0-fa74-4f17-99f0-42069c2a3fd4)
Y nos da un mensaje de error

Con datos correctos:
![image](https://github.com/user-attachments/assets/6f461295-d74c-49b7-ac61-346e6cf3326a)
Y ya nos dirige a /inicio
![image](https://github.com/user-attachments/assets/87950dac-7f9f-4c58-bd8e-c3548e36b6a3)

Para consultar datos de diferentes personajes dentro del incio ocupamos la siguinete API de Rick y Morty:
https://rickandmortyapi.com/api/character

Creamos un servicio que manejara los datos de nuestra API primero obtiene los personajes.
![image](https://github.com/user-attachments/assets/5a747f74-0dab-4997-9f6a-4b5afc340418)

Y anadimos los componentes creados en nuestro HTML de inicio que es la pantalla principal.
![image](https://github.com/user-attachments/assets/ae844ece-ce19-4c68-9d2b-386a55ccc804)

Los componentes que realice fueron el de buscar:
![image](https://github.com/user-attachments/assets/a95adce9-5de6-4fa9-894f-b5833e9d82c1)

El de filtro:
![image](https://github.com/user-attachments/assets/dbe31404-92c9-4be3-91b1-d311002f2efc)

Y los anadimos en el html de inicio:

  <app-search (searchTextChanged)="onSearchTextChanged($event)"></app-search>
  <app-filter (filtersChanged)="onFiltersChanged($event)"></app-filter>

Para poder integrarlos a nuestra clase de Inicio.

El resultado quedaria de la siguiente forma:
![image](https://github.com/user-attachments/assets/a811396f-e8b7-49ba-8f79-dcc99ef7bbe5)

Aplicando filtros:
![image](https://github.com/user-attachments/assets/81071c8c-d02e-49d7-8d99-f6136bd7567a)

Detalles de cada personaje:
![image](https://github.com/user-attachments/assets/c09c43b6-4c5c-4e5a-a8f1-4182e92b8f5d)

Eliminando algun personaje:
![image](https://github.com/user-attachments/assets/75643b97-4e97-4bc3-9216-dbad16139f7c)
