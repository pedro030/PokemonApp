const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonRouter = require('./pokemon.js');
const typeRouter = require('./type.js')
const {Pokemon} = require('../db')
const { v4: uuidv4 } = require('uuid');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/crear', (req, res) =>{
    Pokemon.create({
        id: uuidv4(),
        name: 'Pedro',
        img: 'nada',
    }).then((r) =>r.addTypes([2,1,4]))

    // .then(() =>{
    //     Pokemon.create({
    //         id: uuidv4(),
    //         name: 'Mateo',
    //         img: 'nada',
    //         types: [1,2,3]
    //     })
    // },{
    //     include: "types"
    // })
    .then(() => res.send('created'))
})
router.use('/pokemon', pokemonRouter);
router.use('/type', typeRouter);


module.exports = router;
