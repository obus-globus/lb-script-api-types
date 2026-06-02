import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MemoryDump$ArrayObject extends Object implements TruffleObject {
    private constructor(array: Object[])
    // private array: Object[];
    getArraySize(): number;
    hasArrayElements(): boolean;
    isArrayElementReadable(index: number): boolean;
    readArrayElement(index: number): Object;
}