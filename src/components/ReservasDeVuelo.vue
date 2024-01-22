<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
     <p>SOY RESERVAS DE VUELO</p>
     <br>
     <b-nav vertical>
      <b-link :to="{name:'asientos-reservados'}">Asientos reservados ⏭</b-link>
     </b-nav>
  </div>
</template>

<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'Inicio',
            href: '/inicio',
          },
          {
            text: 'Reservas de vuelo',
            href: '/reserva-vuelo',
            active:true
          }
        ]
      }
    }
}
</script>

<style>

</style>