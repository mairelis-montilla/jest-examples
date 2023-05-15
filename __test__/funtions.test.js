const {adds, getLength } = require('../src/funtions');

  describe('adds test cases  ', ()=> {

    test('adds 1 + 2 to equal 3', () => {
      expect(adds(1,2)).toEqual(3);
    });

    test('adds 1 + 2 not to be 4', () => {
      expect(adds(1, 2)).not.toEqual(4);
    });

    test('if a, b not number return error ', () => {
      expect(adds('a', 1)).toMatch('error');
    });
    
  })

  describe.skip('getLength testing', () => {
    test('Spy on console.log', () => {

      const consoleSpy = jest.spyOn(console, 'log');
      const result = getLength('abc');

      expect(consoleSpy).toHaveBeenCalledWith('abc');
      expect(result).toBe(3);

      consoleSpy.mockRestore();
    });
  });