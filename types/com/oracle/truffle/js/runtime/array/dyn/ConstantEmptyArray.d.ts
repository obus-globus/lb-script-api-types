import type { DynamicArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { AbstractConstantArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { AbstractConstantEmptyArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantEmptyArray.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ConstantEmptyArray extends AbstractConstantEmptyArray {
    static EMPTY_OBJECT_ARRAY: (Object | null)[];
    static createConstantArray(paramelements: (Object | null)[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static createConstantEmptyArray(): ConstantEmptyArray;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    private constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    withIntegrityLevel(newIntegrityLevel: number): DynamicArray;
}