<template>
  <div>
     <b-breadcrumb :items="items"></b-breadcrumb>
     <p>SOY INICIO</p>
     <b-link>Atras</b-link>
     <br>
     <b-link :to="{name:'main'}">Siguiente</b-link>
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
            active: true
          }
        ]
      }
    }
}
</script>

<style>

</style>