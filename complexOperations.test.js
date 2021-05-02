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

  describe('calculateArea', () => {
    it('sending an empty parameter', () => {
      expect(complexOperations.calculateArea()).toBe('undefined is not supported');
    });
    
    it('testing a non-supported figure', () => {
      expect(complexOperations.calculateArea('rhombus')).toBe('rhombus is not supported');
    });

    it('testing a supported figure and undefined numbers', () => {
      expect(complexOperations.calculateArea('square')).toBe('number1 and number2 should be numbers');
    });

    it('testing a supported figure and invalids numbers', () => {
      expect(complexOperations.calculateArea('square')).toBe('number1 and number2 should be numbers');
    });
  });

  // describe('sumGratherThan', () => {
  //   it('first test for sumGratherThan', () => {

  //   });
  // });

  // describe('intersectionBetweenArrays', () => {
  //   it('first test for intersectionBetweenArrays', () => {

  //   });
  // });

  // describe('sortArrayOfObjectsByKey', () => {
  //   it('first test for sortArrayOfObjectsByKey', () => {

  //   });
  // });

  // describe('numberOfOddAndEvenNumbers', () => {
  //   it('first test for numberOfOddAndEvenNumbers', () => {
  //   });

  // });
});
