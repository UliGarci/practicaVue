<template>
  <div>
     <b-breadcrumb :items="items"></b-breadcrumb>
     <p>SOY LINEAS DE VUELO</p>
     <br>
     <b-nav vertical>
      <b-link :to="{name:'vuelos-disponibles'}">⏮ Vuelos disponibles</b-link>
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
          },
          {
            text: 'Lineas de vuelo',
            href: '/lineas-de-vuelo',
            active: true
          }
        ]
      }
    }
}
</script>

<style>

</style>