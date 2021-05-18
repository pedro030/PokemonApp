const {Router} = require('express');
const router = Router();
const {getPokemonsById, getPokemons, createPokemon, getPokemonsByName} = require('../controllers/pokemon')
const axios = require('axios')


router.get('/', (req, res)=>{
   let name = req.query.name;
   if(name){
       getPokemonsByName(req,res)
    }else{
        getPokemons(req,res)
   }
})
router.get('/:id',getPokemonsById)
router.post('/', createPokemon)


module.exports = router;