import mocha from 'mocha';
import { expect } from 'chai';

import squareOfInteger from './squareOfInteger';

describe('test', ()=>{
    it('Should return an integer',()=>{
        expect(squareOfInteger('1234')).to.be.equal('Not an integer');
    });
    it('Should return an integer',()=>{
        expect(squareOfInteger(1234)).to.be.equal(14916);
    });
})
