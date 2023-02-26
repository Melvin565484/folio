import {createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue';
import Introduccion from './views/portafolio/index.vue';
import Contenido from './views/portafolio/contenido.vue';

import Guia from './views/portafolio/guia.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/introducion',
            component: Home
        },
        {
            path: '/introduccion',
            name: 'Introduccion',
            component: Introduccion
        },
        {
            path: '/contenido',
            name: 'Contenidos',
            component: Contenido
        },
        {
            path: '/guia',
            name: 'Guias',
            component: Guia
        },
        
    ]
});
