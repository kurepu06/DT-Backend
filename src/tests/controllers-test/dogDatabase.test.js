const db = require('./db-handler')
const modelDog = require ("../../models/Dog")
const controllerDog = require ("../../controllers/dog-controller")

beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async () => await db.closeDatabase())

describe('Dog in database', () => {
  it("Add Dog POST",async () => {
    const response = await controllerDog.create({
          name: process.env.DOG_NAME,
          breed: process.env.DOG_BREED,
          ownerId: process.env.DOG_OWNERID,
          birthday: process.env.DOG_BIRTHDAY});
          await response.save();
          expect(response.name).toBe(process.env.DOG_NAME);
          expect(response.breed).toBe(process.env.DOG_BREED);
          expect(response.ownerId).toBe(process.env.DOG_OWNERID);
          expect(response.birthday).toBe(process.env.DOG_BIRTHDAY);
    });
})