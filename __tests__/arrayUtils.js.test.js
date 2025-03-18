import { removeDuplicates, sortNumbers, sumPositiveNumbers, groupByParity, findCommonElements } from '../arrayUtils';
import { describe, expect } from '@jest/globals'
import * as fc from 'fast-check';

describe('Testing base funcs', () => {

    test('should sort numbers correctly', () => { // 2
        expect(sortNumbers([3, 1, 4, 1, 5, 9])).toEqual([1, 1, 3, 4, 5, 9]);
    });

    test('group numbers', () => { // 4
        expect(groupByParity([1, 2, 3, 4])).toEqual({ even: [2, 4], odd: [1, 3] })
    });

    test('find items in 2 ', () => { // 5
        expect(findCommonElements([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    })
})

describe('fast check tests', () => {// 1
    test('uniq elements', () => {
        fc.assert(
            fc.property( fc.array(fc.integer()), (arr) => {
                const result = removeDuplicates(arr);
                return new Set(result).size === result.length
            })
        )
    })

    test('sum elems', () => { // 3
        fc.assert(
            fc.property (fc.array(fc.integer()), (arr) => {
                const sum = arr.filter(n => n > 0)
                .reduce((sum, num) => sum + num, 0);
                return sumPositiveNumbers(arr) === sum;
            })
        )
    })
});
