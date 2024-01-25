<template>
  <div>
    <b-container> </b-container>
    <b-row fluid>
      <b-col sm="2"> </b-col>
      <b-col>
        <form @submit.prevent="checkForm" method="post">
          <div>
            <label for="name">Nombre</label>
            <br />
            <b-form-input id="name" v-model="name" type="text" name="name" />
            <p class="error-message" v-if="errors.name">Nombre requerido</p>
          </div>
          <div>
            <label for="lastname">Apellido paterno</label>
            <br />
            <b-form-input
              id="lastname"
              v-model="lastname"
              type="text"
              name="lastname"
            />
            <p class="error-message" v-if="errors.lastname">Apellido requerido</p>
          </div>
          <div>
            <label for="surname">Apellido materno</label>
            <br />
            <b-form-input
              id="surname"
              v-model="surname"
              type="text"
              name="surname"
            />
          </div>
          <div>
            <label for="address">Dirección</label>
            <br />
            <b-form-input
              id="address"
              v-model="address"
              type="text"
              name="address"
            />
          </div>
          <div>
            <label for="birthday">Fecha de nacimiento</label>
            <br />
            <b-form-input
              id="birthday"
              v-model="birthday"
              type="date"
              name="birthday"
            />
          </div>
          <div>
            <label for="email">Correo electrónico</label>
            <br />
            <b-form-input id="email" v-model="email" type="text" name="email" />
          </div>
          <div>
            <label for="phone">Número de telefono</label>
            <br />
            <b-form-input
              id="phone"
              v-model="phone"
              type="number"
              name="phone"
            />
          </div>
          <div>
            <label for="picture">Fotografía</label>
            <br />
            <input
              @change="FileChange"
              id="picture"
              type="file"
              name="picture"
              accept="image/*"
            />
          </div>
          <br />
          <!-- <input type="submit" value="Submit"> -->
          <b-button type="submit" class="btn btn-success">Enviar</b-button>
        </form>
      </b-col>
      <b-col sm="3"></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: {
        name: false,
        name: false,
        lastname: false,
        surname: false,
        address: false,
        birthday: false,
        email: false,
        phone: false,
        picture: false,
      },
      name: null,
      lastname: null,
      surname: null,
      address: null,
      birthday: null,
      email: null,
      phone: null,
      picture: null,
    };
  },
  methods: {
    checkForm: function (e) {
      this.errors={}
      if (!this.name) {
        this.errors.name=true;
      }

      if (!this.lastname) {
        this.errors.lastname=true;
      }
    },
    FileChange(e) {
      const file = e.target.files[0];
      if (file) {
        const tamFile = file.size / (1024 * 1024);
        console.log(tamFile);
        if (tamFile > 10) {
        }
      }
    },
  },
};
</script>

<style>
.error-message{
  color:red;
  font-size:14px;
}
</style>
