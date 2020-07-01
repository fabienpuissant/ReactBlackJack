import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Deck from './Deck/Deck'
import Player from './Player/Player'
import { expect } from 'chai'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Deck />', () => {
    it('renders one <Player /> components', () => {
        const wrapper = shallow(<Deck />);
        expect(wrapper.find(Player)).to.have.lengthOf(1);
    });

    it('Contains correct props', () => {
        const wrapper = mount(<Deck />);
        expect(wrapper.prop('randomCard')).not.null;
        expect(wrapper.prop('endGame')).not.null;
        expect(wrapper.prop('restartGame')).not.null;
    })

    it('has 52 cards', () => {
        const wrapper = mount(<Deck />);
        expect(wrapper.state('cards')).lengthOf(51);
    })
})


