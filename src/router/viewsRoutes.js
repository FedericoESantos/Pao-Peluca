import { Router } from 'express';

export const router = Router();

// RUTAS

router.get('/', (req,res)=>{ 
    return res.render("home", {title: "Oviedo´s Peluquería"});
    })

router.get('/productos', (req, res) => {

    res.setHeader('Content-Type', 'text/html');
    return res.render('productos', { title: 'Productos' });
})

router.get('/cursos', (req, res) => {

    res.setHeader('Content-Type', 'text/html');
    return res.render('cursos', { title: 'Productos' });
})

router.get('/contacto', (req, res) => {

    res.setHeader('Content-Type', 'text/html');
    return res.render('contacto', { title: 'Productos' });
})

router.get('/salud', (req,res)=>{

    res.setHeader('Content-Type', 'text/html');
        return res.render('salud', { title:'Productos'});
    })