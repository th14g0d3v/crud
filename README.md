<h1 align="center">CRUD</h1><br/>

<div align="center">
  <h3><a id="user-content--summary" class="anchor" aria-hidden="true" href="#-summary">SUMMARY</a></h3>
  <a href="#-Summary">Summary</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Tecnologies">Tecnologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Usage">Usage</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Playground">Playground</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Challenge">Challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-License">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Credits">Credits</a>
</div><hr/><br/>

<div align="center">
  <h3><a id="user-content--tecnologies" class="anchor" aria-hidden="true" href="#-tecnologies">TECNOLOGIES</a></h3>
  <a href="https://nodejs.org/en/" rel="nofollow">
    <img alt="NodeJs" src="https://img.shields.io/badge/Node-purple">&nbsp;&nbsp;&nbsp;
  </a>

  <a href="#" rel="nofollow">
    <img alt="Typescript" src="https://img.shields.io/badge/Typescript-Language-purple">
  </a>

  <a href="https://www.apollographql.com/docs/apollo-server/" rel="nofollow">
    <img alt="ApolloServer" src="https://img.shields.io/badge/ApolloServerExpress-purple">&nbsp;&nbsp;&nbsp;
  </a>

  <a href="https://expressjs.com/" rel="nofollow">
    <img alt="Express" src="https://img.shields.io/badge/Express-purple">&nbsp;&nbsp;&nbsp;
  </a>

  <a href="https://graphql.org/" rel="nofollow">
    <img alt="GraphQl" src="https://img.shields.io/badge/GraphQl-purple">&nbsp;&nbsp;&nbsp;
  </a>
                                                                      
  <a href="https://typegraphql.com/" rel="nofollow">
    <img alt="Type-GraphQl" src="https://img.shields.io/badge/TypeGraphQl-purple">&nbsp;&nbsp;&nbsp;
  </a>

  <a href="https://typeorm.io/#/" rel="nofollow">
    <img alt="TypeOrm" src="https://img.shields.io/badge/TypeOrm-purple">&nbsp;&nbsp;&nbsp;
  </a>
                                                                      
  <a href="https://www.postgresql.org/" rel="nofollow">
    <img alt="PostgreSql" src="https://img.shields.io/badge/PostgreSql-purple">&nbsp;&nbsp;&nbsp;
  </a>                                                             
</div><hr/><br/>

<div align="center">
  <h3><a id="user-content--project" class="anchor" aria-hidden="true" href="#-project">PROJECT</a></h3>
  <p>CRUD is fullstack application in typegraphql</p>
</div><hr/><br/>

<div align="center">
  <h3><a id="user-content--usage" class="anchor" aria-hidden="true" href="#-usage">USAGE</a></h3>
  <h4> Clone the repository to the desired folder. </h4>
  <p> git clone https://github.com/th14g0d3v/crud.git </p>
  <h4> Navigate to the repository folder. </h4>
  <p> cd crud </p>

  <h4> Starting the application backend. </h4>
  <h4> Navigate to the server folder. </h4>
  <p> cd backend </p>

  <h4> Install the necessary packages for the project. </h4>
  <p> npm install or yarn </p>

  <h4> Install the PostgreSQL. </h4>
  <a href="https://www.postgresql.org/download">PostgreSQL</a>

  <h4> Start the postgresql(on linux). </h4>
  <p>  sudo systemctl start postgresql </p>

  <h4> Turn on the server, which is at 127.0.0.1:4000. </h4>
  <p> yarn start </p>
</div><hr/><br/>

<div align="center">
  <h3><a id="user-content--playground" class="anchor" aria-hidden="true" href="#-playground">PLAYGROUND</a></h3>
  <h4> In Browser </h4>
  <p>http://localhost:4000/graphql</p>

  ```javascript
  // Find user by email
  query {
    emailOfUser(email: {email: "jack.sparrow@gmail.com"}) {
      id
      firstName
      lastName
      nickName
      email
      password
    }
  }

  // Find all users by emails
  query {
    listOfUser {
      id
      firstName
      lastName
      nickName
      email
      password
    }
  }

  // Create User
  mutation {
    createUser(data: {
      firstName: "Jack"
      lastName: "Sparrow"
      nickName: "Captian Sparrow"
      email: "jack.sparrow@gmail.com"
      password: "jack"
    })
    {
      id
      firstName
      lastName
      nickName
      email
      password
    }
  }

  // Delete User
  mutation {
    deleteUser(email: "jack.sparrow@gmail.com")
  }

  // Update User
  mutation {
    updateOfUser(
      email: "jack.sparrow@gmail.com"
      data: { firstName: "Jack", lastName: "Sparrow", nickName: "Captain Jack" }
    )
  }
  ```
</div><hr/><br/>

<div align="center">
  <h3><a id="user-content--challenge" class="anchor" aria-hidden="true" href="#-challenge">CHALLENGE</a></h3>

  - [x] Query find user by email
  - [x] Query find all users by emails
  - [x] Create User
  - [x] Update User
  - [x] Delete User
  - [ ] Login User
  - [ ] Logout User
</div><hr/><br/>

<div align="center">
  <h3><a id="user-content--license" class="anchor" aria-hidden="true" href="#-license">LICENSE</a></h3>
  <p>This project is under the MIT license. See the <a href="https://github.com/th14g0d3v/crud/blob/master/LICENSE"> LICENSE</a> file for more details.</p>
</div><hr/><br/>

<div align="center">
  <h3><a id="user-content--credits" class="anchor" aria-hidden="true" href="#-credits">CREDITS</a></h3>
  <p>Made by <a href="https://github.com/th14g0d3v" rel="nofollow"> Thiago Gomes</a>.</p>
</div>
