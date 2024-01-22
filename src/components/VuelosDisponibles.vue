<template>
  <div>
     <b-breadcrumb :items="items"></b-breadcrumb>
     <p>SOY VUELOS DISPONIBLES</p>
     <br>
     <b-nav vertical>
      <b-link :to="{name:'inicio'}">⏮ Inicio - LandPage</b-link>
      <br>
      <b-link :to="{name:'lineas-de-vuelo'}">Lineas de vuelo ⏭</b-link>
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
            text: 'Vuelos disponibles',
            href: '/vuelos-disponibles',
            active: true
          }
        ]
      }
    }
}
</script>

<style>

</style>