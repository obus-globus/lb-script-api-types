import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InteropList extends Object implements TruffleObject {
    constructor(...items: Object[])
    // private items: Object[];
    getArraySize(): number;
    hasArrayElements(): boolean;
    isArrayElementReadable(index: number): boolean;
    readArrayElement(index: number): Object;
}