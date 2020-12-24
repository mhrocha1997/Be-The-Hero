//UTILIZANDO SUPERTEST
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')
describe('ONG', () => {
    BeforeEach(async ()=>{
       await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async()=>{
       await connection.destroy();
    });
    it('should be able to create a new ONG', async () => {
        const response = await resquest(app)
            .post('/ongs')
            .send({
                name: "APAD2",
                email: "apad.com.br",
                whatsapp: "47000",
                city: "Rio do Sul",
                uf: "SC"
            });

            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
    });
});