import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TopScopeObject$MergedPropertyNames extends Object implements TruffleObject {
    private constructor(keys: Object[])
    // private keys: Object[];
    // private size: number[];
    getArraySize(): number;
    hasArrayElements(): boolean;
    isArrayElementReadable(index: number, interop: InteropLibrary): boolean;
    readArrayElement(index: number, interop: InteropLibrary): Object;
}