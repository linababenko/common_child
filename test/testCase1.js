const { assert } = require('chai');
const  { performance } = require('perf_hooks');
const commonChild  = require('../src/index');

describe('Test case 1',function(){

  it('1) common characters "A", "B" 0', function () {
    let start = performance.now()
    const result = commonChild("A", "B")
    let end = performance.now()
    t1 = end - start
    assert.equal(result, 0);
  });

  it('2) common characters "AA", "BV" 0', function () {
    let start = performance.now()
    const result = commonChild("AA", "BB")
    let end = performance.now()
    t2 = end - start;
    assert.equal(result, 0);
  });
  //
  it('3) common characters "PPPPPPPPPP", "KKKKKKKKKK" 0', function () {
    let start = performance.now()
    const result = commonChild("PPPPPPPPPP", "KKKKKKKKKK")
    let end = performance.now()
    t3 = end - start;
    assert.equal(result, 0);
  });

  it('4) common characters "ABCDFI", "ZQWYTH" 0', function () {
    let start = performance.now()
    const result = commonChild("ABCDFI", "ZQWYTH")
    let end = performance.now()
    t4 = end - start;
    assert.equal(result, 0);
  });

  it('5) common characters "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR", "VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV" 0', function () {
    let start = performance.now()
    const result = commonChild("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR", "VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV")
    let end = performance.now()
    t5 = end - start;
    assert.equal(result, 0);
  });

  after(function() {
    let sumTime1 = t1 + t2 + t3 + t4 + t5
    console.log('Test case 1 = ' + sumTime1)
  });
});




