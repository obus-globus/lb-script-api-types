import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InteropList extends Object implements TruffleObject {
    static create(paramlist: Object[]): TruffleObject;
    private constructor(list: (Object | null)[])
    // private list: (Object | null)[];
    getArraySize(): number;
    hasArrayElements(): boolean;
    isArrayElementReadable(index: number): boolean;
    readArrayElement(index: number): Object;
}