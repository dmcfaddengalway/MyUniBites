const request = require('supertest');
const express = require('express');

const app = require('../../app');

describe('cafe API', function() {

    it('should GET a new cafe', function(done) {
        request(app)
        .get('/api/cafe/smokeys')
        .set('Accept', 'application/json')
        //.expect('Content-Type', /json/)
        .expect(function(res) {
            res.body.name = "Smokeys";
        })
        .expect(200, {
            name: 'Smokeys',
            urlTag: 'smokeys'
        }, done);
    });

});