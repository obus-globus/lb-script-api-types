import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ArrayUtils extends Object {
    static EMPTY_BOOLEAN_ARRAY: boolean[];
    static EMPTY_BOOLEAN_OBJECT_ARRAY: boolean[];
    static EMPTY_BYTE_ARRAY: number[];
    static EMPTY_BYTE_OBJECT_ARRAY: number[];
    static EMPTY_CHARACTER_OBJECT_ARRAY: string[];
    static EMPTY_CHAR_ARRAY: string[];
    static EMPTY_CLASS_ARRAY: Class<Object>[];
    static EMPTY_DOUBLE_ARRAY: number[];
    static EMPTY_DOUBLE_OBJECT_ARRAY: number[];
    static EMPTY_FLOAT_ARRAY: number[];
    static EMPTY_FLOAT_OBJECT_ARRAY: number[];
    static EMPTY_INTEGER_OBJECT_ARRAY: number[];
    static EMPTY_INT_ARRAY: number[];
    static EMPTY_LONG_ARRAY: number[];
    static EMPTY_LONG_OBJECT_ARRAY: number[];
    static EMPTY_OBJECT_ARRAY: Object[];
    static EMPTY_SHORT_ARRAY: number[];
    static EMPTY_SHORT_OBJECT_ARRAY: number[];
    static EMPTY_STRING_ARRAY: string[];
    static add<T extends unknown>(paramarg0: T[], paramarg1: T): T[];
    static add<T extends unknown>(paramarg0: T[], paramarg1: number, paramarg2: T): T[];
    static addAll<T extends unknown>(paramarg0: T[], ...paramarg1: T[]): T[];
    static addAll(paramarg0: number[], ...paramarg1: number[]): number[];
    static clone<T extends unknown>(paramarg0: T[]): T[];
    static clone(paramarg0: number[]): number[];
    static getLength(paramarg0: Object): number;
    static remove<T extends unknown>(paramarg0: T[], paramarg1: number): T[];
    static remove(paramarg0: number[], paramarg1: number): number[];
    static subarray<T extends unknown>(paramarg0: T[], paramarg1: number, paramarg2: number): T[];
    static subarray(paramarg0: number[], paramarg1: number, paramarg2: number): number[];
}