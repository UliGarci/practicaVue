<template>
  <div>
     <b-breadcrumb :items="items"></b-breadcrumb>
     <p>SOY PRXIMOS VUELOS</p>
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
            to: '/inicio',
          },
          {
            text: 'Vuelos Cancelados',
            to: '/vuelos-cancelados',
          },
          {
            text: 'Proximos vuelos',
            to: '/proximos-vuelos',
          },
        ]
      }
    }
}
</script>

<style>

</style>