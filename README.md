![RIP CURRENT](./src/presentation/assets/rip_current_logo.png)

# Rip Current

Rip Current es una aplicación web que permite a los más apasionados del surf, saber que playas son las mejores para surfear a lo largo de toda la costa asturiana. En ocasiones, a los surfistas nos recomiendan una ola pero necesitamos saber si se amolda a nuestras necesidades y a nuestro surf.

Esta aplicación te permitirá ver reseñas de otros surfers y añadir las tuyas propias. Entre los items que añadiremos a las reseñas está la cantidad de gente que hay surfeando en esa playa, para saber si nos merece o no la pena surfear esa ola.

## Tabla de contenidos

- [_01 Tecnologias Utilizadas_](#section_01)
- [_02 Como lanzar el proyecto_](#section_02)

<a id="section_01"></a>

## _01 Tecnologias utilizadas_

### Frontend

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

### Backend

![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot)
![PosgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

### Control de versiones

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)

### Otras herramientas

![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)

<a id="section_02"></a>

### _02 Cómo lanzar el proyecto_

### Frontend

```
npm install
npm run dev
```

### Backend

Para lanzar el backend necesitamos una base de datos postgres según la configuración de `src/main/resources/application.properties`

```
cd backend
mvn spring-boot:run
```
