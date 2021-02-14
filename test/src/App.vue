<template>
  <div id="app">
    <div class="container">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link tag="nav-link" :to="'/'"><a class="nav-link" href="#">Главная</a></router-link>
        </li>
        <li class="nav-item">
          <router-link tag="nav-link" :to="'/Check'"><a class="nav-link" href="#">Регистрация</a></router-link>
        </li>
        <li class="nav-item">
          <router-link tag="nav-link" :to="'/LogIn'"><a class="nav-link" href="#">Войти</a></router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
  
}
</script>

<style>
  #app {
    background: url(assets/top.jpg);
    background-position: center ;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 100vh;
  }
  .top__title{
    color: #3b3b3b;
    text-align: center;
    box-shadow: 0 0 10px rgba(59, 59, 59,0.6);
    padding-bottom: 5px;
  }
  .nav{
    padding-top: 10px;
    display: flex;
    justify-content: center;
  }
  .nav-link{
    background: #3b3b3b;
    margin: 0 4px;
    border-radius: 5px;
    color: #e2e2e2;
    transition: all .3s;
    padding: .3rem 0.6rem;
  }
  .nav-link:hover{
    color: #e2e2e2;
    background: #fff;
  }
  .btn-next{
    text-decoration: none;
    color: #e2e2e2;
    background: #3b3b3b;
    transition: all .3s;
  }
  .btn-next:hover{
    color: #e2e2e2;
    background: #000;
    text-decoration: none;
  }
  .btn-prev{
    text-decoration: none;
    background: #fff;
    color: #e2e2e2;
    transition: all .3s;
    border: none;
    box-shadow: none;
    outline: none;
  }
  .btn-prev:hover{
    text-decoration: none;
    color: #fff;
    background: #e2e2e2;
    border: none;
    box-shadow: none;
  }
  .jumbotron{
    background: transparent;
    border: none;
    box-shadow: 0 0 10px rgba(59, 59, 59,0.6);
    border: 1px solid #3b3b3b;
  }
  .form-control:focus,
  .btn-next:hover {
    outline: none;
    box-shadow: 0 0 10px rgba(59, 59, 59,0.6);
    border: 1px solid #3b3b3b;
  }

</style>
