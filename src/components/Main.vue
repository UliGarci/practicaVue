<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <p>SOY MAIN</p>
     <b-link :to="{name:'inicio'}">Atras</b-link>
     <br>
     <b-link :to="{name:'tercero'}">Siguiente</b-link>
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
            to: { name: 'inicio' }
          },
          {
            text:'Main',
            href:'/main',
            active:true
          }
        ]
      }
    }
}
</script>

<style>

</style>