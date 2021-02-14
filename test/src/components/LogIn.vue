<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-sm-4 mx-auto">

       <h4 class="top__title">Авторизация</h4>

        <form @submit.prevent="logIn" novalidate>

          <div v-show="step === 1" class="step">

            <div class="form-group">
              <label for="login">Логин</label>
              <input @blur="$v.formReg.login.$touch()"
                            :class="{'is-invalid reqInput':$v.formReg.login.$error}"
                            v-model="formReg.login" type="text" class="form-control" id="login">
              <div v-if="!$v.formReg.login.required" class="invalid-feedback">
                {{ msgReq }}
              </div>    
            </div>

            <div class="form-group">
              <label for="password">Пароль</label>
              <input @blur="$v.formReg.password.$touch()"
                            :class="{'is-invalid reqInput':$v.formReg.password.$error}"
                            v-model="formReg.password" type="password" class="form-control" id="password">
              <div v-if="!$v.formReg.password.required" class="invalid-feedback">
                {{ msgReq }}
              </div>    
            </div>


            <button type="submit" 
                    :disabled="disabledBtn1"
                    class="btn btn-link btn-next">Вход</button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      step: 1,
      msgReq: 'Поле обязательно для заполнения!',
      formReg: {
        login: '',
        password: ''
      }
    }
  },
  computed: {
    disabledBtn1() {
     return this.$v.formReg.login.$invalid ||
            this.$v.formReg.password.$invalid
    }
  },
  methods: {
     logIn() {
       if( this.formReg.login === 'admin' && this.formReg.password === '1234') {
         this.$router.push('/')
       }
      console.log('Вход выполнен')

      for(let input in this.formReg) {
        this.formReg[input] = ''
      }
      this.$v.$reset()
    }
  },
  validations: {
    formReg: {
      login: {
        required
      },
      password: {
        required
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .reqInput{
    background-color: #ffa6a68e;
  }

</style>
