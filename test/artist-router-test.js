'use strict';

// bringing in test environment
require('./lib/test-env.js');

// npm modules
const expect = require('chai').expect;
const request = require('superagent');
const Promise = require('bluebird');
const mongoose = require('mongoose');
// const AWS = require('aws-sdk-mock');

// app modules
const serverCtrl = require('./lib/server-control');
const cleanDB = require('./lib/clean-db');
const mockUser = require('./lib/user-mocks');
const mockArtist = require('./lib/artist-mock');

mongoose.Promise = Promise;

// module constants
const server = require('../server.js');
const url = `http://localhost:${process.env.PORT}`;

const exampleArtist = {
  firstname: 'Jimbob',
  lastname: 'Jimbobberson',
  username: 'Jimbobguy316',
  email: 'jimbobguy14@stuff.com',
  city: 'Dallas',
  zip: '98114',
  about: 'I\m just a simple kinda man who likes to do art stuff.',
  phone: '(555)555-5555',
};

describe('testing artist-router', function() {

  before( done => serverCtrl.serverUp(server, done));

  after( done => serverCtrl.serverDown(server, done));

  afterEach( done => cleanDB(done));

  describe('testing POST /api/artist', function() {

    describe('with a valid body', function() {

      before(done => mockUser.call(this, done));

      it('should return an artist profile and a status 200', (done) => {

        request.post(`${url}/api/artist`)
      .send(exampleArtist)
      .set({
        Authorization: `Bearer ${this.tempToken}`,
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.firstname).to.equal(exampleArtist.firstname);
        expect(res.body.lastname).to.equal(exampleArtist.lastname);
        expect(res.body.username).to.equal(exampleArtist.username);
        expect(res.body.email).to.equal(exampleArtist.email);
        expect(res.body.city).to.equal(exampleArtist.city);
        expect(res.body.zip).to.equal(exampleArtist.zip);
        expect(res.body.about).to.equal(exampleArtist.about);
        expect(res.body.phone).to.equal(exampleArtist.phone);
        expect(res.body.userID).to.equal(this.tempUser._id.toString());
        let date = new Date(res.body.created).toString();
        expect(date).to.not.equal('Invalid Date');
        done();
      });
      });
    });

    //TODO: More POST tests here
  });

  describe('testing GET to /api/artist/:id', () => {

    describe('with valid token and id', function(){

      before(done => mockArtist.call(this, done));

      it('should return a artist', done => {
        request.get(`${url}/api/artist/${this.tempArtist._id}`)
        .set({
          Authorization: `Bearer ${this.tempToken}`,
        })
        .end((err, res) => {
          if (err)
            return done(err);
          expect(res.status).to.equal(200);
          expect(res.body.firstname).to.equal(exampleArtist.firstname);
          expect(res.body.lastname).to.equal(exampleArtist.lastname);
          expect(res.body.username).to.equal(exampleArtist.username);
          expect(res.body.email).to.equal(exampleArtist.email);
          expect(res.body.city).to.equal(exampleArtist.city);
          expect(res.body.zip).to.equal(exampleArtist.zip);
          expect(res.body.about).to.equal(exampleArtist.about);
          expect(res.body.phone).to.equal(exampleArtist.phone);
          expect(res.body.userID).to.equal(this.tempUser._id.toString());
          let date = new Date(res.body.created).toString();
          expect(date).to.not.equal('Invalid Date');
          done();
        });
      });
    });

    //TODO: More GET tests here
  });

});
