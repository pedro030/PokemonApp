import React from 'react';
import { Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Nav from './Nav';

configure({adapter: new Adapter()});

describe('<Nav />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Nav />)
  })

  it('Deberia renderizar Dos <Link />', () => {
    expect(wrapper.find(Link)).toHaveLength(3);
  });
  it('El primer Link debe tener el texto "Home" y cambiar la ruta hacia "/pokemons".', () => {
    //el orden donde declaran los Links es importante
    expect(wrapper.find(Link).at(0).prop('to')).toEqual('/pokemons');
    // Tiene que ser literal! ojo con los espacios.
    expect(wrapper.find(Link).at(0).text()).toEqual('Home');
  });
  it('El segundo Link debe tener el texto "Create Pokemon" y cambiar la ruta hacia "/pokemon/create"', () => {
    expect(wrapper.find(Link).at(1).prop('to')).toEqual('/pokemon/create');
    // Tiene que ser literal! ojo con los espacios.
    expect(wrapper.find(Link).at(1).text()).toEqual('Create Pokemon');
  });
  it('El tercer Link debe tener el texto "Search Pokemon" y cambiar la ruta hacia "/pokemon/search"', () => {
    expect(wrapper.find(Link).at(2).prop('to')).toEqual('/pokemon/search');
    // Tiene que ser literal! ojo con los espacios.
    expect(wrapper.find(Link).at(2).text()).toEqual('Search Pokemon');
  });
})