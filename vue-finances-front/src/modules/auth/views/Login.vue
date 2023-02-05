<template>
  <v-container fill-height>
    <v-layout justify-center align-center>
      <v-flex xs12 sm6 md4 lg3>
        <v-card class="elevation-12">
          <v-toolbar color="green darken-4" dark>
            <v-toolbar-title>{{ texts.toolbar }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
              v-if="!isLogin"
              prepend-icon="person" name="name"
              label="Nome"
              type="text "
              v-model.trim="$v.user.name.$model"
              :success="!$v.user.name.$invalid"
              :error-messages="nameErrors"
              ></v-text-field>
              <v-text-field
              prepend-icon="email"
              name="email"
              label="Email"
              type="email "
              v-model.trim="$v.user.email.$model"
              :success="!$v.user.email.$invalid"
              :error-messages="emailErrors"
              ></v-text-field>
              <v-text-field
               prepend-icon="lock"
               name="password"
               label="Senha"
               :error-messages="passwordErrors"
               type="password"
               :success="!$v.user.password.$invalid"
                v-model.trim="$v.user.password.$model"
                ></v-text-field>
            </v-form>

            <v-btn block depressed color="secondary" @click="isLogin = !isLogin">
              {{ texts.button }}
            </v-btn>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-4" large :disabled="$v.$invalid" @click="submit">
              {{ texts.toolbar }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'LoginUser',
  data: () => ({
    isLogin: true,
    user: {
      name: '',
      email: '',
      password: ''
    }

  }),
  validations () {
    const validations = {
      user: {
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(6)
        }
      }
    }
    if (this.isLogin) { return validations }
    return {
      user: {
        ...validations.user,
        name: {
          required,
          minLength: minLength(3)
        }
      }
    }
  },
  computed: {
    texts () {
      return this.isLogin ? { toolbar: 'Entrar', button: 'Criar Conta' } : { toolbar: ' Criar Conta', button: 'Já tenho uma conta' }
    },
    nameErrors () {
      const errors = []
      const name = this.$v.user.name
      if (!name.$dirty) { return errors }
      !name.required && errors.push('Nome é obrigatório')
      !name.minLength && errors.push(`Insira pelo menos ${name.$params.minLength.min} `)

      return errors
    },
    emailErrors () {
      const errors = []
      const email = this.$v.user.email
      if (!email.$dirty) { return errors }
      !email.required && errors.push('Email é obrigatório')
      !email.email && errors.push('Insira um email válido')

      return errors
    },
    passwordErrors () {
      const errors = []
      const password = this.$v.user.password
      if (!password.$dirty) { return errors }
      !password.required && errors.push('Senha é obrigatório')
      !password.minLength && errors.push(`Insira pelo menos ${password.$params.minLength.min} `)

      return errors
    }
  },
  methods: {
    log () {
      console.log('Vuelidate', this.$v)
    },
    submit () {
      console.log('User', this.user)
    }
  }

}
</script>

<style>

</style>
