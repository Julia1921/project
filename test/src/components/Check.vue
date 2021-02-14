<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-sm-4 mx-auto">
        <h4 class="top__title">Регистрация</h4>
        <form @submit.prevent="userReg" novalidate>
          <div v-show="step === 1" class="step">
            <div class="form-group">
              <label for="name">Ваше имя</label>
              <input @blur="$v.formReg.name.$touch()"
                            :class="{'is-invalid reqInput':$v.formReg.name.$error}"
                            v-model="formReg.name" type="text" class="form-control form-dark" id="name">
              <div v-if="!$v.formReg.name.required" class="invalid-feedback">
                {{ msgReq }}
              </div>    
              <div v-if="!$v.formReg.name.alpha" class="invalid-feedback">
                {{ msgNotNum }}
              </div>    

            </div>
            
            <div class="form-group">
              <label for="surname">Ваша фамилия</label>
              <input @blur="$v.formReg.surname.$touch()"
                            :class="{'is-invalid reqInput':$v.formReg.surname.$error}"
                            v-model="formReg.surname" type="text" class="form-control" id="surname">
              <div v-if="!$v.formReg.surname.required" class="invalid-feedback">
                {{ msgReq }}
              </div>    
              <div v-if="!$v.formReg.surname.alpha" class="invalid-feedback">
                {{ msgNotNum }}
              </div>    
            </div>

            <div class="form-group">
              <label for="email">Ваш email</label>
              <input @blur="$v.formReg.email.$touch()"
                            :class="{'is-invalid reqInput':$v.formReg.email.$error}"
                            v-model="formReg.email" type="email" class="form-control" id="email">
              <div v-if="!$v.formReg.email.required" class="invalid-feedback">
                {{ msgReq }}
              </div>    
              <div v-if="!$v.formReg.email.email" class="invalid-feedback">
                Поле должно быть email адресом
              </div>    
            </div>
            <div class="form-group">
              <label for="country">Страна</label>
              <input @blur="$v.formReg.country.$touch()"
                            :class="{'is-invalid reqInput':$v.formReg.country.$error}"
                            v-model="formReg.country" type="text" class="form-control" id="country">
              <div v-if="!$v.formReg.country.alpha" class="invalid-feedback">
                {{ msgNotNum }}
              </div>    
            </div>

            <button @click="nextStep"
                    :disabled="disabledBtn1"
                    type="button" class="btn btn-link btn-next">Далее</button>

          </div>

          <div v-show="step === 2" class="step">
            <div class="form-group">
              <label for="login">Придумайте ваш логин</label>
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
              <div v-if="!$v.formReg.password.minLength" class="invalid-feedback">
               Пароль должен содержат не менее 6 символов!
              </div>    
            </div>

            <div class="form-group">
              <label for="passwordConfirm">Подтверждение пароля</label>
              <input @blur="$v.formReg.passwordConfirm.$touch()"
                            :class="{'is-invalid reqInput':$v.formReg.passwordConfirm.$error}"
                            v-model="formReg.passwordConfirm" type="password" class="form-control" id="passwordConfirm">
              <div v-if="!$v.formReg.passwordConfirm.required" class="invalid-feedback">
                {{ msgReq }}
              </div>    
              <div v-if="!$v.formReg.passwordConfirm.sameAs" class="invalid-feedback">
                Пароли не совпадают!
              </div>    
            </div>

            <button @click="prevStep" type="button" class="btn btn-link btn-prev">Назад</button>
            <button type="submit" 
                    :disabled="disabledBtn2"
                    class="btn btn-link btn-next ml-4">Зарегестрироваться</button>

          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, helpers, minLength, sameAs } from 'vuelidate/lib/validators'
const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)
export default {
  data() {
    return {
      step: 1,
      msgNotNum:'Поле не должно содержать цифр и других символов!',
      msgReq: 'Поле обязательно для заполнения!',
      formReg: {
        name:'',
        surname: '',
        email: '',
        country: '',
        login: '',
        password: '',
        passwordConfirm:''
      }
    }
  },
  computed: {
    disabledBtn1() {
     return this.$v.formReg.name.$invalid ||
            this.$v.formReg.surname.$invalid ||
            this.$v.formReg.email.$invalid ||
            this.$v.formReg.country.$invalid 

    },
    disabledBtn2() {
     return this.$v.formReg.login.$invalid ||
            this.$v.formReg.password.$invalid ||
            this.$v.formReg.passwordConfirm.$invalid
    }

  },
  methods: {
    nextStep() {
      if(!this.step < 2) {
        this.step++
      }
    },
    prevStep() {
      if(!this.step < 1 ) {
        this.step--
      }
    },
    userReg() {
      console.log('Регистрация завершена!')

      this.step = 1

      for(let input in this.formReg) {
        this.formReg[input] = ''
      }

      this.$v.$reset()
    }
  },
  validations: {
    formReg: {
      name: {
        required,
        alpha
      },
      surname:{
        required,
        alpha
      },
      email: {
        required,
        email
      },
      country: {
        alpha
      },
      login: {
        required
      },
      password: {
        required,
        minLength: minLength(4)
      },
      passwordConfirm: {
        required,
        sameAs: sameAs('password')
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
