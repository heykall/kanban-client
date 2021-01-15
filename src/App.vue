<template>
  <div id="kanvan">
    <landing-page v-if="currentPage === 'landing-page'" @login='changePage'></landing-page>
    <nav-bar v-if="currentPage === 'main-page'" @changePage='changePage'></nav-bar>
    <kanban v-if="currentPage === 'main-page'" :tasks="listTask" :category="taskCategory"></kanban>
    <login v-if="currentPage === 'login-page'" @changePage='changePage'> </login>
    <register v-if="currentPage === 'register-page'" @changePage='changePage'></register>
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
      currentPage: "landing-page",
      baseUrl: 'https://kanbanquh.herokuapp.com',
      // baseUrl: 'http://localhost:3080',
      registerUser: {
        username: '',
        email: '',
        password: ''
      },
      loginUser: {
        username: '',
        password: ''
      },
      access_token: localStorage.getItem('access_token'),
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
    changePage(page) {
      this.currentPage = page
    },
    checkAuth() {
      if (localStorage.getItem('access_token')) {
        this.changePage('main-page')
        this.fetchTask()
      } else {
        this.changePage('landing-page')
      }
    },
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
    this.checkAuth()
  }
}
</script>

<style>

</style>