import { error } from '@sveltejs/kit';
import { lecturas } from '../../../helpers/lecturas.js';
/** @type {import('./$types').PageLoad} */

export function load({ params }) {


    const lectura = lecturas.find((lectura) => lectura.id === parseInt(params.slug));   

   
        return { 
            title: lectura.title,
            nivel: lectura.nivel,
            tema: lectura.tema,
            content: lectura.content, 
            translate: lectura.translate,
    }
    
}