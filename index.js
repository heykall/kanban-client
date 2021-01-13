var app = new Vue({
  el: '#app',
  data: {
    pageName: "main-page",
    tasks: [],
    user: {
      username: '',
      email: '',
      password: ''
    },
    access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJoZXlrYWxsIiwiZW1haWwiOiJoZXlrYWxsQG1haWwuY29tIiwiaWF0IjoxNjEwNTc5MTk5fQ.vLaRlnQhue0oJ3nZgDZunAYV6X0BNUfG23bj0O57vjo'
  },
  methods: {
    // start() {
    //   this.pageName = 'main-page'
    // },
    logout() {
      this.pageName = 'landing-page'
    },
    async start() {
      try {
        const response = await axios({
          url: 'http://localhost:3080/tasks',
          methods: 'post',
          headers: { 
            access_token : this.access_token
          }
        })
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }
  },
})