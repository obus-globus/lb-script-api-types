import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Objects extends Object {
    static ADDRESS_SIZE: number;
    static BOOLEAN_ARRAY_BASE_OFFSET: number;
    static BOOLEAN_ARRAY_INDEX_SCALE: number;
    static BYTE_ARRAY_BASE_OFFSET: number;
    static BYTE_ARRAY_INDEX_SCALE: number;
    static CHAR_ARRAY_BASE_OFFSET: number;
    static CHAR_ARRAY_INDEX_SCALE: number;
    static COMPRESSED_OOPS: boolean;
    static COMPRESSED_OOP_BASE: number;
    static COMPRESSED_OOP_SHIFT: number;
    static DOUBLE_ARRAY_BASE_OFFSET: number;
    static DOUBLE_ARRAY_INDEX_SCALE: number;
    static FLOAT_ARRAY_BASE_OFFSET: number;
    static FLOAT_ARRAY_INDEX_SCALE: number;
    static INT_ARRAY_BASE_OFFSET: number;
    static INT_ARRAY_INDEX_SCALE: number;
    static KLASS_OFFSET: number;
    static LONG_ARRAY_BASE_OFFSET: number;
    static LONG_ARRAY_INDEX_SCALE: number;
    static OBJECT_ALIGNMENT: number;
    static OBJECT_ARRAY_BASE_OFFSET: number;
    static OBJECT_ARRAY_INDEX_SCALE: number;
    static OBJECT_HEADER_SIZE: number;
    static OOP_SIZE: number;
    static SHORT_ARRAY_BASE_OFFSET: number;
    static SHORT_ARRAY_INDEX_SCALE: number;
    static allocate(paramarg0: Class<Object>): Object | null;
    static cast(paramarg0: Object, paramarg1: Class<Object>): Object | null;
    static cast(paramarg0: Object, paramarg1: Object): Object | null;
    static cast(paramarg0: Object, paramarg1: number): Object | null;
    static copyMemory(paramarg0: Object, paramarg1: Object, paramarg2: number): void;
    static copyMemory(paramarg0: Object, paramarg1: number, paramarg2: Object, paramarg3: number, paramarg4: number): void;
    static fromAddress(paramarg0: number): Object | null;
    static fromJVMAddress(paramarg0: number): Object | null;
    static getKlass(paramarg0: Class<Object>): number;
    static getKlass(paramarg0: Object): number;
    static toAddress(paramarg0: Object): number;
    static toJVMAddress(paramarg0: Object): number;
    static toJVMAddress(paramarg0: number): number;
    static toNativeAddress(paramarg0: Object): number;
    static toNativeAddress(paramarg0: number): number;
    constructor()
}