const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });

    it('has a initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    });
});
describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
    it('increments the hunger by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });
    it('decrements the fitness by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
});
describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('fido');
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8);
    });
    it('increases fitness to a maximum of 10', () => {
        const pet = new Pet('fido');
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
});
describe('feed', () => {
    it('decreases hunger by 3', () => {
        const pet = new Pet('fido');
        pet.hunger = 4;
        pet.feed();
        expect(pet.hunger).toEqual(1);
    });
    it('decreases hunger to a minimum of 0', () => {
        const pet = new Pet('fido');
        pet.hunger = 2;
        pet.feed();
        expect(pet.hunger).toEqual(0);
    });
});
describe('check up', () => {
    it('returns a string describing feeling', () => {
        const pet = new Pet('fido');
        pet.hunger = 5;
        pet.fitness = 3;
        pet.checkUp();
        expect(pet.checkUp('Fido')).toBe('I am hungry AND I need a walk');
    });
    it('returns a string describing level of hunger', () => {
        const pet = new Pet('fido');
        pet.hunger = 5;
        pet.fitness = 4;
        pet.checkUp();
        expect(pet.checkUp('Fido')).toBe('I am hungry');
    });
    it('returns a string describing level of fitness', () => {
        const pet = new Pet('fido');
        pet.hunger = 4;
        pet.fitness = 3;
        pet.checkUp();
        expect(pet.checkUp('Fido')).toBe('I need a walk');
    });
    it('returns a string describing level of fitness', () => {
        const pet = new Pet('fido');
        pet.hunger = 4;
        pet.fitness = 4;
        pet.checkUp();
        expect(pet.checkUp('Fido')).toBe('I feel great');
    });
});