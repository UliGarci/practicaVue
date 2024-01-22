<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
     <p>SOY RESERVAS DE VUELO</p>
     <br>
  </div>
</template>

<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'Inicio',
            to:"/inicio"
          },
          {
            text: 'Reservas de vuelo',
            to:"/reservar-vuelo"
          },
          {
            text: 'Asientos reservados',
            to: '/asientos-reservados',
            
          }
        ]
      }
    }
}
</script>

<style>

</style>