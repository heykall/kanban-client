<template>
<!-- Login -->
 <section id="login">
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="box">
      <div class="square" style="--i:0;">
        <img src="../assets/login/book.png" alt="" class="buku">
      </div>
      <div class="square" style="--i:1;">
        <img src="../assets/login/notes.png" alt="" class="buku">
      </div>
      <div class="square" style="--i:2;">
        <img src="../assets/login/todo2.png" alt="" class="buku">
      </div>
      <div class="square" style="--i:3;">
        <img src="../assets/login/todo3.png" alt="" class="buku">
      </div>
      <div class="square" style="--i:4;">
        <img src="../assets/login/todo4.png" alt="" class="buku">
      </div>
       <!-- login box -->
      <div class="container-fluid">
        <div class="form">
          <h2>Login Form</h2>
          <form action="" @submit.prevent="login">
            <div class="inputBox">
              <input type="text" placeholder="Username" v-model="username">
            </div>
            <div class="inputBox">
              <input type="password" placeholder="Password" v-model="password">
            </div>
            <div class="inputBox">
              <input type="submit" value="Login">
                <button v-google-signin-button="clientId" class="btn google-signin-button btn-sm" style="background-color: #DB4437" href="#!" role="button"><i class="fab fa-google"></i> Sign in </button>
            </div>
            <p class="forget">Don't have an account ? <a href="#" @click="register"> Register </a></p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import GoogleSignInButton from 'vue-google-signin-button-directive'

export default {
  data() {
    return {
      clientId: '63166694903-fqaqg5vk3h33m3u8imfnt6e5n3outg26.apps.googleusercontent.com',
      username: '',
      password: ''
    }
  },
  name: "Login",
  methods: {
    OnGoogleAuthSuccess (idToken) {
      console.log(idToken)
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    },
    login() {
      axios({
        method: "POST",
        // url: 'http://localhost:3080/login',
        url: 'https://kanbanquh.herokuapp.com/login',
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$emit('changePage', 'main-page')
          this.$emit('refetch')
        })
        .catch(err => {
          console.log(err)
        })
    },
    register() {
      this.$emit('changePage', 'register-page')
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');

#login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #f1f4f9, #dff1ff);
}

#login .color {
  position: absolute;
  filter: blur(150px);
}

#login .color:nth-child(1) {
  top: -350px;
  width: 600px;
  height: 600px;
}

#login .color:nth-child(2) {
  top: -150px;
  left: 100px;
  width: 500px;
  height: 500px;
}

#login .color:nth-child(3) {
  top: 50px;
  left: 100px;
  width: 300px;
  height: 300px;
}

.box {
  position: relative;
}

.box .square{
  position: absolute;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  animation: animate 5s linear infinite;
  animation-delay: calc(-1s * var(--i));
}

@keyframes animate {
  0%,100% {
    transform: translateY(-40px);
  }
  50% {
    transform: translateY(40px);
  }
}

.box .square:nth-child(1) {
  top: -50px;
  right: -60px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box .square:nth-child(2) {
  top: 150px;
  left: -100px;
  width: 120px;
  height: 120px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box .square:nth-child(3) {
  bottom: 50px;
  right: -60px;
  width: 80px;
  height: 80px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box .square:nth-child(4) {
  bottom: -80px;
  left: 100px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box .square:nth-child(5) {
  top: -80px;
  right: 140px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#login {
  position: relative;
  width: 400px;
  min-height: 400px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.form {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px;
}

.form h2 {
  position: relative;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 40px;
}

.form h2::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 80px;
  height: 4px;
  background: #fff;
}

.form .inputBox {
  width: 100%;
  margin-top: 20px;
}

.form .inputBox input {
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 16px;
  Letter-spacing: 1px;
  color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.form .inputBox input::placeholder {
  color: #fff;
}

.form .inputBox input[type="submit"] {
  height: 36px;
  background: #fff;
  color: rgb(63, 62, 62);
  width: 80px;
  max-width: 100px;
  cursor: pointer;
  margin-bottom: 20px;
  font-weight: 600;
  padding: 4px 5px;
}

.forget {
  margin-top: 5px;
  color: rgb(228, 234, 236);
}

.forget a {
  color: rgb(255, 255, 255);
  font-weight: 600;
}

.buku {
  max-width: 75%;
  max-height: 75%;
}
</style>