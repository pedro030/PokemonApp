/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');
const { v4: uuidv4 } = require('uuid');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create({
      id: uuidv4(),
      name: 'Pedro',
      img: 'nada',
  })));
  describe('GET /pokemon', () => {
    it('should get 200', () =>{
    return agent
      .get('/pokemon')
      .expect(200)
      .expect('Content-Type', /json/)
    }
    );
  });
  describe('POST /pokemon', () => {
    it('POST add a new pokemon and return it', function() {
      return agent
        .post('/pokemon')
        .send({id: uuidv4(),
              name: 'Pedro',
              attack: '100',
              defense:'100',
              height: '100',
              hp:'100',
              speed: '100',
              img: 'null',
              types:[2,3,6],
              weight: '100'
            })
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function(res) {
          expect(res.body.name).to.eql('Pedro');
          expect(res.body.types).to.eql([ 'fighting', 'flying', 'rock' ]);
        });
    })
  })
});  
