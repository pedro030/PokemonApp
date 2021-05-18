const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');
const { v4: uuidv4 } = require('uuid');


describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({id:uuidv4()})
          .catch(() => done());
      });
      it('should throw an error if id is null', (done) => {
        Pokemon.create({name:'Pikachu'})
          .catch(() => done());
      });
      it('should work when its a valid name and valid id', () => {
        Pokemon.create({ id: uuidv4(),name: 'Pikachu' })
        .catch((e) => console.log(e));
      });
    });
  });
});
