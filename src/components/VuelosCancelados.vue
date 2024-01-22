<template>
  <div>
     <b-breadcrumb :items="items"></b-breadcrumb>
     <p>SOY VUELOS CANCELADOS</p>
     <br>
     <b-nav vertical>
      <b-link :to="{name:'proximos-vuelos'}">Proximos vuelos ⏭</b-link>
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
            to: '/inicio',
          },
          {
            text: 'Vuelos Cancelados',
            to: '/vuelos-cancelados',
          },
        ]
      }
    }
}
</script>

<style>

</style>