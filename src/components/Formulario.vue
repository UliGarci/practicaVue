<template>
  <div>
    <b-container>
      
    </b-container>
    <b-row fluid>
      <b-col sm="2">
      </b-col>
      <b-col>
        <b-form-group id="app" @submit="checkForm" method="post">
          <h3>Nombre completo</h3>
          <div>
            <label for="name">Nombre</label>
            <br/>
            <b-form-input id="name" v-model="name" type="text" name="name"/>
          </div>
          <div>
            <label for="lastname">Apellido paterno</label>
            <br/>
            <b-form-input id="lastname" v-model="lastname" type="text" name="lastname"/>
          </div>
          <div>
            <label for="surname">Apellido materno</label>
            <br/>
            <input id="surname" v-model="surname" type="text" name="surname">
          </div>
          <br/>
          <div>
            <label for="address">Dirección</label>
            <br/>
            <input id="address" v-model="address" type="text" name="address">
          </div>
          <div>
            <label for="birthday">Fecha de nacimiento</label>
            <br/>
            <input id="birthday" v-model="birthday" type="date" name="birthday">
          </div>
          <div>
            <label for="email">Correo electrónico</label>
            <br/>
            <input id="email" v-model="email" type="text" name="email">
          </div>
          <div>
            <label for="phone">Número de telefono</label>
            <br/>
            <input id="phone" v-model="phone" type="number" name="phone">
          </div>
          <div>
            <label for="picture">Fotografía</label>
            <br/>
            <input id="picture" type="file" name="picture" accept="image/*">
          </div>
          <br/>
          <input type="submit" value="Submit">
        </b-form-group>
      </b-col>
      <b-col sm="3"></b-col>
    </b-row>
  </div>
</template>

<script>
export default {

};
</script>

<style>
</style>