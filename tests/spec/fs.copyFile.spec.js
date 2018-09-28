var util = require('../lib/test-utils.js');
var expect = require('chai').expect;
const fs = require('fs');
const {COPYFILE_EXCL} = fs.constants;

describe('fs.copyFile', function() {
  beforeEach(util.setup);
  afterEach(util.cleanup);

  it('should be a function', function() {
    var fs = util.fs();
    expect(fs.copyFile).to.be.a('function');
  });

  it('shoud return an error if the source file does not exist', function(done) {
    var fs = util.fs();

    fs.copyFile('source.txt', 'destination.txt', function(error){
      expect(error).to.exist;
      expect(error.code).to.equal('ENOENT');
      done();
    });
  });

  it('adding the flag as an argument, should return an error if the destination file already exist', function (done){
    var fs = util.fs();
        
    fs.copyFile('source.txt', 'destination.txt', COPYFILE_EXCL, function(error){
      expect(error).to.exist;
      expect(error.code).to.equal('ENOENT');
      done();
    });
  });
});