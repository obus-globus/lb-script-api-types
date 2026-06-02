import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { TriState } from '../../../../../../com/oracle/truffle/api/utilities/TriState.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractInspectorArray extends Object implements TruffleObject {
    constructor()
    getArraySize(): number;
    hasArrayElements(): boolean;
    identityHashCode(): number;
    isArrayElementInsertable(index: number): boolean;
    isArrayElementModifiable(index: number): boolean;
    isArrayElementReadable(index: number): boolean;
    isIdenticalOrUndefined(other: Object): TriState;
    readArrayElement(index: number): Object;
    writeArrayElement(index: number, value: Object): void;
}