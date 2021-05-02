import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Unit Tests', () => {

  // describe('checkEmail', () => {
  //   it('sending different data to a string', () => {
  //     expect(complexOperations.checkEmail(789)).toStrictEqual('The email should be an string');
  //   });
  //   it('sending an empty string', () => {
  //     expect(complexOperations.checkEmail('')).toBe('The email should be an string');
  //   });
  //   it('sending a string but not with the valid email format', () => {
  //     expect(complexOperations.checkEmail('karen@gmail')).toBe('The email is invalid');
  //   });
  //   it('sending an Email valid', () => {
  //     expect(complexOperations.checkEmail('kjenenbaum@gmail.com')).toBe('The email is valid');
  //   });
  // });

  // describe('calculateArea', () => {
  //   it('sending an empty parameter', () => {
  //     expect(complexOperations.calculateArea()).toBe('undefined is not supported');
  //   });

  //   it('testing a non-supported figure', () => {
  //     expect(complexOperations.calculateArea('rhombus')).toBe('rhombus is not supported');
  //   });

  //   it('testing a supported figure and undefined numbers', () => {
  //     expect(complexOperations.calculateArea('square')).toBe('number1 and number2 should be numbers');
  //   });

  //   it('testing a supported figure and invalid numbers', () => {
  //     expect(complexOperations.calculateArea('square','Hola', 4)).toBe('number1 and number2 should be numbers');
  //   });

  //   it('testing a supported figure and valid numbers', () => {
  //     expect(complexOperations.calculateArea('square', 4, 4)).toBe(16);
  //   });

  //   it('testing a supported figure that is not a circle and a number', () => {
  //     expect(complexOperations.calculateArea('rectangle', 4)).toBe(0);
  //   });

  //   it('testing a circle and a number', () => {
  //     expect(complexOperations.calculateArea('circle', 4)).toBe(Math.PI * 16);
  //   });

  // });

  // describe('sumGratherThan', () => {
  //   it('test with an empty parameters', () => {
  //     expect(complexOperations.sumGratherThan('')).toBe('The params should be numbers');
  //   });

  //   it('test with three numbers', () => {
  //     expect(complexOperations.sumGratherThan(1,5,10)).toBe('6 is less than 10');
  //   });

  //   it('test with three numbers', () => {
  //     expect(complexOperations.sumGratherThan(1,5,4)).toBe('6 is grather than 4');
  //   });
  // });

  describe('intersectionBetweenArrays', () => {
    it('test with empty parameters', () => {
      expect(complexOperations.intersectionBetweenArrays('')).toBe('The params should be arrays');
    });

    it('test with an only array', () => {
      expect(complexOperations.intersectionBetweenArrays([1,2,3])).toBe('The params should be arrays');
    });

    it('test with two valids arrays', () => {
      expect(complexOperations.intersectionBetweenArrays([1,2,3], [3,4])).toStrictEqual([3]);
    });

    it('test with two empty arrays', () => {
      expect(complexOperations.intersectionBetweenArrays([], [])).toStrictEqual('There are not matching elements');
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('test with valid array and key', () => {
      const testArray =
          [{name: 'karen', age: 29}, {name: 'marisa', age: 34}, {name: 'martin', age: 17}, {name: 'lara', age: 26}];

      const expectedArray =
          [{name: 'martin', age: 17}, {name: 'lara', age: 26}, {name: 'karen', age: 29}, {name: 'marisa', age: 34}];

      expect(complexOperations.sortArrayOfObjectsByKey(testArray, 'age')).toStrictEqual(expectedArray);
    });

    it('test with invalid array and valid key', () => {
      expect(complexOperations.sortArrayOfObjectsByKey('', 'age')).toStrictEqual('The first param should be an array');
    });

    it('test with valid array and invalid key', () => {
      const testArray =
          [{name: 'karen', age: 29}, {name: 'marisa', age: 34}, {name: 'martin', age: 17}, {name: 'lara', age: 26}];
      expect(complexOperations.sortArrayOfObjectsByKey(testArray, 1)).toStrictEqual('The second param should be an string');
    });

    it('test with valid array and null key', () => {
      const testArray =
          [{name: 'karen', age: 29}, {name: 'marisa', age: 34}, {name: 'martin', age: 17}, {name: 'lara', age: 26}];
      expect(complexOperations.sortArrayOfObjectsByKey(testArray, '')).toStrictEqual('The second param should be an string');
    });

    it('test some elements in the array does not have the age property', () => {
      const testArray =
          [{name: 'karen', age: 29}, {name: 'marisa'}, {name: 'martin', age: 17}, {name: 'lara'}];
      expect(complexOperations.sortArrayOfObjectsByKey(testArray, 'age')).toStrictEqual('Some elements in the array does not have the age property');
    });



  });

  // describe('numberOfOddAndEvenNumbers', () => {
  //   it('first test for numberOfOddAndEvenNumbers', () => {
  //   });

  // });
});
