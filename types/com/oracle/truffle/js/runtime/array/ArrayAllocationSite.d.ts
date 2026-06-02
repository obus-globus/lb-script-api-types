import type { DynamicArray } from '../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ArrayAllocationSite extends Object{
    getInitialArrayType(): DynamicArray;
    notifyArrayTransition(arrayType: DynamicArray, length: number): void;
}