import 'jest';
import * as complexOperations from './complexOperations';
import * as basicOperations from './basicOperations';


describe('complexOperation - Unit Tests', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  })

  describe('checkEmail', () => {
    it('test an email valid', () => {
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
      expect(complexOperations.checkEmail('test')).toBe('The email is valid');
    });

    it('test without string parameter', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.checkEmail()).toStrictEqual('The email should be an string');
    });

    it('test an empty string', () => {
      expect(complexOperations.checkEmail('')).toBe('The email should be an string');
    });

    it('test a string with invalid email format', () => {
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
      expect(complexOperations.checkEmail('test')).toBe('The email is invalid');
    });
  });

  describe('calculateArea', () => {
    it('test square figure and valid numbers', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'multip').mockReturnValue(16);

      expect(complexOperations.calculateArea('square', 4, 4)).toBe(16);
    });

    it('test rectangle figure and valid numbers', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'multip').mockReturnValue(8);

      expect(complexOperations.calculateArea('rectangle', 4, 2)).toBe(8);
    });

    it('test triangle figure and valid numbers', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'division').mockReturnValue(6);

      expect(complexOperations.calculateArea('triangle', 4, 3)).toBe(6);
    });

    it('test a circle figure', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'exponent').mockReturnValue(16);

      expect(complexOperations.calculateArea('circle', 4)).toBe(Math.PI * 16);
    });

    it('test an empty parameter', () => {
      expect(complexOperations.calculateArea()).toBe('undefined is not supported');
    });

    it('test a non-supported figure', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(false);
      expect(complexOperations.calculateArea('rhombus')).toBe('rhombus is not supported');
    });

    it('test a supported figure and undefined numbers', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      expect(complexOperations.calculateArea('square')).toBe('number1 and number2 should be numbers');
    });

    it('test a supported figure and invalid numbers', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.calculateArea('square','Hola', 4)).toBe('number1 and number2 should be numbers');
    });

    it('test a supported figure that is not a circle and with only one parameter', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);

      expect(complexOperations.calculateArea('rectangle', 4)).toBe(0);
    });
  });

  describe('sumGratherThan', () => {
    it('test with three numbers', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'sum').mockReturnValue(6);

      expect(complexOperations.sumGratherThan(null, null, 10)).toBe('6 is less than 10');
    });

    it('test with three numbers', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'sum').mockReturnValue(6);

      expect(complexOperations.sumGratherThan(null,null,4)).toBe('6 is grather than 4');
    });

    it('test with an empty parameters', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.sumGratherThan()).toBe('The params should be numbers');
    });
  });

  describe('intersectionBetweenArrays', () => {
    it('test with two valids arrays', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([3]);

      expect(complexOperations.intersectionBetweenArrays()).toStrictEqual([3]);
    });

    it('test with empty parameters', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.intersectionBetweenArrays()).toBe('The params should be arrays');
    });

    it('test with an only array', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.intersectionBetweenArrays([])).toBe('The params should be arrays');
    });

    it('test with two empty arrays', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      expect(complexOperations.intersectionBetweenArrays([], [])).toStrictEqual('There are not matching elements');
    });

    it('test with not matching elements', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      expect(complexOperations.intersectionBetweenArrays([1,2], [3,4])).toStrictEqual('There are not matching elements');
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('test with valid array and key', () => {
      const expectedArray =
          [{name: 'martin', age: 17}, {name: 'lara', age: 26}, {name: 'karen', age: 29}, {name: 'marisa', age: 34}];

      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(true);
      jest.spyOn(basicOperations, 'sortArrayByKey').mockReturnValue(expectedArray);

      expect(complexOperations.sortArrayOfObjectsByKey([], 'age')).toStrictEqual(expectedArray);
    });

    it('test with invalid array and valid key', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey('', 'age')).toStrictEqual('The first param should be an array');
    });

    it('test with valid array and invalid key', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);

      expect(complexOperations.sortArrayOfObjectsByKey([], 1)).toStrictEqual('The second param should be an string');
    });

    it('test with valid array and null key', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);

      expect(complexOperations.sortArrayOfObjectsByKey([], '')).toStrictEqual('The second param should be an string');
    });

    it('test some elements in the array does not have the age property', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(false);

      expect(complexOperations.sortArrayOfObjectsByKey([], 'age')).toStrictEqual('Some elements in the array does not have the age property');
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('test with valid values', () => {
      jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([1,1,1,1]);
      jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([1]);

      expect(complexOperations.numberOfOddAndEvenNumbers([1])).toStrictEqual({odd: 4, even: 1});
    });

    it('test with empty array', () => {
      jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([]);
      jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([]);

      expect(complexOperations.numberOfOddAndEvenNumbers([])).toStrictEqual({odd: 0, even: 0});
    });

    it('test with null parameter', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.numberOfOddAndEvenNumbers(null)).toStrictEqual('The param should be an array');
    });

    it('test with string parameter', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.numberOfOddAndEvenNumbers('h')).toStrictEqual('The param should be an array');
    });

    it('test with array with invalid values', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1,3,'h',4])).toStrictEqual('The array should have only numbers');
    });

    // it('test with array with decimal values', () => {
    //   expect(complexOperations.numberOfOddAndEvenNumbers([1,3.14,4])).toStrictEqual('The array should have only numbers');
    //   This test should not be a pass, since the definition of an odd or even number only makes sense for integer numbers.
    // });
  });
});
