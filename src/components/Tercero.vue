<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <p>SOY TERCERO</p>
     <b-link  :to="{name:'main'}">Atras</b-link>
     <br>
     <b-link :to="{name:'inicio'}">Siguiente</b-link>
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
            to:{name:"inicio"}
          },
          {
            text:'Main',
            href:'/main',
            to:{name:"main"}
          },
          {
            text:'Tercero',
            href:'/tercero',
            active:true
          }
        ]
      }
    }
}
</script>

<style>

</style>
