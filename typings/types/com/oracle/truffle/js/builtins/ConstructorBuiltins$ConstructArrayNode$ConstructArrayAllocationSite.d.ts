import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { ArrayAllocationSite } from '../../../../../com/oracle/truffle/js/runtime/array/ArrayAllocationSite.d.ts'
import type { DynamicArray } from '../../../../../com/oracle/truffle/js/runtime/array/DynamicArray.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ConstructorBuiltins$ConstructArrayNode$ConstructArrayAllocationSite extends Object implements ArrayAllocationSite {
    private constructor()
    // private assumption: Assumption;
    // private concreteArrayType: DynamicArray;
    getInitialArrayType(): DynamicArray;
    isTyped(): boolean;
    notifyArrayTransition(arrayType: DynamicArray, length: number): void;
}