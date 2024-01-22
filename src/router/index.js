import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        redirect:'/inicio'
    },
    {
        path:'/',
        component:{
            render(c){
                return c('router-view');
            },
        }, 
        component:()=>import('../components/Inicio.vue'),
        children:[
            {
                path:'/inicio',
                name:'inicio',
                component:()=>import('../components/Inicio.vue')
            },
            // {
            //     path:'/main',
            //     name:'main',
            //     component:()=>import('../components/Main.vue')
            // },
            // {
            //     path:'/tercero',
            //     name:'tercero',
            //     component:()=>import('../components/Tercero.vue')
            // },
            {
                path:'/reservar-vuelo',
                name:'reserva-vuelo',
                component:()=>import('../components/ReservasDeVuelo.vue')
            },
            {
                path:'/vuelos-disponibles',
                name:'vuelos-disponibles',
                component:()=>import('../components/VuelosDisponibles.vue')
            },
            {
                path:'/vuelos-cancelados',
                name:'vuelos-cancelados',
                component:()=>import('../components/VuelosCancelados.vue')
            },
            {
                path:'/asientos-reservados',
                name:'asientos-reservados',
                component:()=>import('../components/AsientosReservados.vue')
            },
            {
                path:'/lineas-de-vuelo',
                name:'lineas-de-vuelo',
                component:()=>import('../components/LineasDeVuelo.vue')
            },
            {
                path:'/proximos-vuelos',
                name:'proximos-vuelos',
                component:()=>import('../components/ProximosVuelos.vue')
            },
           
        ]
    },
    {
        path:'*',
        component:()=>import('../views/ErrorPages/Error404.vue')
    },
    {
        path: '/formulario',
        name:'formulario',
        component: () => import('../components/Formulario.vue')
    },
]

const router = new VueRouter({routes})

export default router;