<script setup></script>

<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col>
            <b-navbar type="light" variant="light">
              <b-navbar-nav>
                <b-nav-item href="#">Home</b-nav-item>

                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown text="Lang" right>
                  <b-dropdown-item href="#">EN</b-dropdown-item>
                  <b-dropdown-item href="#">ES</b-dropdown-item>
                  <b-dropdown-item href="#">RU</b-dropdown-item>
                  <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="User" right>
                  <b-dropdown-item href="#">Account</b-dropdown-item>
                  <b-dropdown-item href="#">Settings</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-navbar>
          
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="3"
          ><div>
            <b-sidebar
              visible
              id="sidebar"
              no-close-on-route-change
              shadow
              no-close-on-esc
              no-header-close
              
            >
            <!--  SE ELIMINO z-index="-1" PARA PODER INTERACTUAR CON LOS ITEMS DEL MENU DEL SIDEBAR-->
              <div class="px-1.5">
                <b-nav vertical class="pt-5">
                <b-nav-item>
                  <b-link :to="{name:'inicio'}">Inicio</b-link>
                </b-nav-item>
                <b-nav-item>
                  <b-link :to="{name:'main'}">Main</b-link>
                </b-nav-item>
                <b-nav-item>
                  <b-link :to="{name:'tercero'}">Tercero</b-link>
                </b-nav-item>
                </b-nav>
              </div>
            </b-sidebar></div
        ></b-col>
        <b-col>
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped></style>