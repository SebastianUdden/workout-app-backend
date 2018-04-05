var should = require('should');
var sinon = require('sinon');

describe('User Controller Tests:', function() {
    describe('Post', function() {
        it('should not allow an empty name on post', function() {
            var User = function(user) {this.save = function() {}};
            var req = {
                body: {
                    height: 190 
                }
            };

            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            };

            var userController = require('../controllers/userController')(User);
            userController.post(req, res);
            
            res.status.calledWith(400).should.equal(true, 'Bad Status ' + res.status.args[0][0]);
            res.send.calledWith('Title is required').should.equal(true);
        });
    });
});