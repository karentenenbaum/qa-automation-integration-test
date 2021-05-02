import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it('sending different data to a string', () => {
      expect(complexOperations.checkEmail(789)).toStrictEqual('The email should be a string');
    });
    it('sending an empty string', () => {
      expect(complexOperations.checkEmail('')).toBe('The email is invalid');
    });
    it('sending a string but not with the valid email format', () => {
      expect(complexOperations.isValidEmail('@')).toBe('The email is invalid');
    });
    it('sending an Email valid', () => {
      expect(complexOperations.isValidEmail('kjenenbaum@gmail.com')).toBe('The email is valid');
    });
  });

  describe('calculateArea', () => {
    it('sending an empty parameter', () => {
          expect(complexOperations.calculateArea('')).toBe('${figure} is not supported');
        });
    });
    it('testing a non-supported figure', () => {
        expect(complexOperations.calculateArea('rhombus')).toBe('${figure} is not supported');
      });
        

    


  

//   describe('sumGratherThan', () => {
//     it('first test for sumGratherThan', () => {

//     });
//   });

//   describe('intersectionBetweenArrays', () => {
//     it('first test for intersectionBetweenArrays', () => {

//     });
//   });

//   describe('sortArrayOfObjectsByKey', () => {
//     it('first test for sortArrayOfObjectsByKey', () => {

//     });
//   });

//   describe('numberOfOddAndEvenNumbers', () => {
//     it('first test for numberOfOddAndEvenNumbers', () => {

//     });
//   });
// });
  });
