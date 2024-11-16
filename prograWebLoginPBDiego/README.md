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

