<template>
  <div id="kanvan">
    <landing-page v-if="currentPage === 'landing-page'"></landing-page>
    <nav-bar v-if="currentPage === 'main-page'"></nav-bar>
    <kanban v-if="currentPage === 'main-page'" :tasks="listTask" :category="taskCategory"></kanban>
    <login v-if="currentPage === 'login-page'"> </login>
    <register v-if="currentPage === 'register-page'"></register>
  </div>
</template>

<script>
import axios from "axios"
import LandingPage from "./components/LandingPage"
import NavBar from "./components/NavBar"
import Kanban from "./components/Kanban"
import Login from "./components/Login"
import Register from "./components/Register"


export default {
  name: "App",
  data() {
    return {
      currentPage: "main-page",
      baseUrl: 'https://kanbanquh.herokuapp.com/',
      registerUser: {
        username: '',
        email: '',
        password: ''
      },
      loginUser: {
        username: '',
        password: ''
      },
      access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJoZXlrYWxsIiwiZW1haWwiOiJoZXlrYWxsQG1haWwuY29tIiwiaWF0IjoxNjEwNTU1MjM5fQ.CWC9T0hZ1Bfloo-GwKm1MsTCcyL9-lOj1O_n9fG-SGs',
      taskCategory: ['Backlog', 'Todo', 'Doing', 'Done'],
      listTask: []
    }
  },
  components: {
    LandingPage,
    NavBar,
    Kanban,
    Login,
    Register
  },
  methods: {
    fetchTask() {
      axios({
        method: 'GET',
        url: `${this.baseUrl}/tasks`,
        headers: {
          access_token: this.access_token
        }
      })
        .then(({ data }) => {
          this.listTask = data
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  created() {
    this.fetchTask()
  }
}
</script>

<style>

</style>