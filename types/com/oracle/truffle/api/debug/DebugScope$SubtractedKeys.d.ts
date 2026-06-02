import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DebugScope$SubtractedKeys extends Object implements TruffleObject {
    constructor(allKeys: Object, removedKeys: Object)
    // private allKeys: Object;
    // private allSize: number;
    // private removedSize: number;
    getArraySize(): number;
    hasArrayElements(): boolean;
    isArrayElementReadable(index: number): boolean;
    readArrayElement(index: number): Object;
}