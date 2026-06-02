import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ArrayUtils extends Object {
    static EMPTY_BOOLEAN_ARRAY: (Object | null)[];
    static EMPTY_BOOLEAN_OBJECT_ARRAY: (Object | null)[];
    static EMPTY_BYTE_ARRAY: number[];
    static EMPTY_BYTE_OBJECT_ARRAY: (Object | null)[];
    static EMPTY_CHARACTER_OBJECT_ARRAY: (Object | null)[];
    static EMPTY_CHAR_ARRAY: string[];
    static EMPTY_CLASS_ARRAY: Object | null;
    static EMPTY_DOUBLE_ARRAY: number[];
    static EMPTY_DOUBLE_OBJECT_ARRAY: (Object | null)[];
    static EMPTY_FLOAT_ARRAY: number[];
    static EMPTY_FLOAT_OBJECT_ARRAY: (Object | null)[];
    static EMPTY_INTEGER_OBJECT_ARRAY: (Object | null)[];
    static EMPTY_INT_ARRAY: number[];
    static EMPTY_LONG_ARRAY: number[];
    static EMPTY_LONG_OBJECT_ARRAY: (Object | null)[];
    static EMPTY_OBJECT_ARRAY: (Object | null)[];
    static EMPTY_SHORT_ARRAY: number[];
    static EMPTY_SHORT_OBJECT_ARRAY: (Object | null)[];
    static EMPTY_STRING_ARRAY: (Object | null)[];
    static add(paramarg0: Object | null, paramarg1: Object | null): Object | null;
    static add(paramarg0: Object | null, paramarg1: number, paramarg2: Object | null): Object | null;
    static addAll(paramarg0: Object | null, paramarg1: Object | null): Object | null;
    static addAll(paramarg0: number[], paramarg1: number[]): number[];
    static clone(paramarg0: Object | null): Object | null;
    static clone(paramarg0: number[]): number[];
    static getLength(paramarg0: Object): number;
    static remove(paramarg0: Object | null, paramarg1: number): Object | null;
    static remove(paramarg0: number[], paramarg1: number): number[];
    static subarray(paramarg0: Object | null, paramarg1: number, paramarg2: number): Object | null;
    static subarray(paramarg0: number[], paramarg1: number, paramarg2: number): number[];
}