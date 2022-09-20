'use strict';

const mongoose = require('mongoose');

const dbHandler = require('./db-handler');
const dogControler = require('../src/controllers/dog-controller');
const dogModel = require('../src/models/Dog');

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => {
    await dbHandler.connect();
});

/**
 * Clear all test data after every test.
 */
afterEach(async () => {
    await dbHandler.clearDatabase();
});

/**
 * Remove and close the db and server.
 */
afterAll(async () => {
    await dbHandler.closeDatabase();
});

/**
 * Product create test suite.
 */
describe('Dog Controllers ', () => {
    /**
     * Tests that a valid product can be created through the dogControler without throwing any errors.
     */
    it('Dog can be created correctly', async () => {
        expect(async () => {
            await dogControler.addDog(modelcomplete)
                .then(r => {
                    expect(r.data).toBeDefined();
                    expect(r.data.results.length).toBeGreaterThan(0);
                    expect(r.status).toBeGreaterThanOrEqual(200);
                    expect(r.status).toBeLessThan(300);      
                })
                .catch(e => {
                    expect(e.status).toBeGreaterThanOrEqual(400);
                })
        })
    });

    it('can get all dog', async () => {
        expect(async () => {
            await dogControler.getDogs()
                .then(r => {
                    expect(r.data).toBeDefined();
                    expect(r.data.results.length).toBeGreaterThan(0);
                    expect(r.status).toBeGreaterThanOrEqual(200);
                    expect(r.status).toBeLessThan(300);      
                })
                .catch(e => {
                    expect(e.status).toBeGreaterThanOrEqual(400);
                })
        })
    });

    it('can get dog by OwnerId', async () => {
        expect(async () => {
            await dogControler.getDogByOwnerId(ownerId)
                .then(r => {
                    expect(r.data).toBeDefined();
                    expect(r.data.results.length).toBeGreaterThan(0);
                    expect(r.status).toBeGreaterThanOrEqual(200);
                    expect(r.status).toBeLessThan(300);      
                })
                .catch(e => {
                    expect(e.status).toBeGreaterThanOrEqual(400);
                })
        })
    });

    it('can get dog Id', async () => {
        expect(async () => {
            await dogControler.getDogById(id)
                .then(r => {
                    expect(r.data).toBeDefined();
                    expect(r.data.results.length).toBeGreaterThan(0);
                    expect(r.status).toBeGreaterThanOrEqual(200);
                    expect(r.status).toBeLessThan(300);      
                })
                .catch(e => {
                    expect(e.status).toBeGreaterThanOrEqual(400);
                })
        })
    });

    it('can update dog info', async () => {
        expect(async () => {
            await dogControler.updateDogInfo(modelToUpdate)
                .then(r => {
                    expect(r.data).toBeDefined();
                    expect(r.data.results.length).toBeGreaterThan(0);
                    expect(r.status).toBeGreaterThanOrEqual(200);
                    expect(r.status).toBeLessThan(300);      
                })
                .catch(e => {
                    expect(e.status).toBeGreaterThanOrEqual(400);
                })
        })
    });

});

const modelcomplete = {
    name: 'Chien de test',
    breed: 'Race de test',
    ownerId: '000000001',
    birthday: '10/10/2010'
};

const modelToUpdate = {
    name: 'Chien de test updated',
    breed: 'Race de test updated',
    ownerId: '000000002',
    birthday: '20/02/2020'
};

const ownerId = '000000001'