# <img src="https://github.com/eduardohpb/HandsOn3-LaVie/raw/main/HandsOn3%20-%20LaVie/img/Image%2027-07-22%20at%2020.53.jpeg" height="100"/>

<p align="left">
<img src="http://img.shields.io/static/v1?label=STATUS&message=UNDER%20DEVELOPMENT&color=GREEN&style=for-the-badge"/>
<img src="https://img.shields.io/github/languages/count/MonicaIacy/la-vie?style=for-the-badge"/>
<img src="https://img.shields.io/github/repo-size/MonicaIacy/la-vie?style=for-the-badge"/>
</p>

> Project developed for the Full-Stack Developer course at Gama Academy. La vie is a fictional API that allows you to create records of psychologists, patients and medical records.


## :hammer: Functionalities

- `1`: Psychologist login
- `2`: 
- `3`: 
- `4`: 
- `5`: 
- `6`: 


## 📁 Documentation

You can access the API documentation [here]().

You can access the documentation [here](https://drive.google.com/file/d/1S51aOoelju98s_uhZ0ePqpWTD-rN8uip/view).


## :warning: Requirements

<a href="https://nodejs.org/en/"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="node" width="40" height="40"/> </a> <a href="https://www.mysql.com/"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="mysql" width="40" height="40"/> </a>


## ⚙️ Installation

Clone this project and do the following steps:

```sh
$ cd la-vie
$ npm install
```
After installing dependencies, create an empty database and configure the connection settings in the config/database.js file and proceed with the following commands:
```sh
$ npx sequelize migrate
$ node index.js
```
Then the necessary tables will be created and the server will be uploaded. To access, just enter http://localhost:3000


## 📝 Methods
Requests to this API must follow the standards:
| Method | Description |
|---|---|
| `GET` | Returns information from one or more records. |
| `POST` | Used to create a new record. |
| `PUT` | Update record data or change its status. |
| `DELETE` | Removes a system registry. |


## ↩️ Responses

| Code | Description |
|---|---|
| `200` | Request executed successfully.|
| `201` | Request executed successfully and a new record was created.|
| `204` | Request executed successfully and there is no content to send.|
| `400` | Validation errors or the fields entered do not exist in the system.|
| `401` | Invalid login data.|
| `404` | Searched record not found.|


## ✔️ Tools used

<p align="left"> <img src="https://icongr.am/devicon/express-original.svg?size=128&color=ffffff" alt="express" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="mysql" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="node" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="npm" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="sequelize" width="40" height="40"/> </p>


## 👨‍👨‍👧 Collaborators
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/ArturAraujo07">
        <img src="https://avatars.githubusercontent.com/u/47503564?v=4" width="100px;" alt="Photo of Artur Araujo on GitHub"/><br>
        <sub>
          <b>Artur Araujo</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/eduardmuniz">
        <img src="https://avatars.githubusercontent.com/u/109393530?v=4" width="100px;" alt="Photo of Eduardo Muniz on GitHub"/><br>
        <sub>
          <b>Eduardo Muniz</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="">
        <img src="" width="100px;" alt="Photo of Guilherme da Rocha on GitHub"/><br>
        <sub>
          <b>Guilherme da Rocha</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/MonicaIacy">
        <img src="https://avatars.githubusercontent.com/u/73076957?v=4" width="100px;" alt="Photo of Mônica Mendes on GitHub"/><br>
        <sub>
          <b>Mônica Mendes</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/thaisdsandim">
        <img src="https://avatars.githubusercontent.com/u/96362469?v=4" width="100px;" alt="Photo of Thaís Sandim on GitHub"/><br>
        <sub>
          <b>Thaís Sandim</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
