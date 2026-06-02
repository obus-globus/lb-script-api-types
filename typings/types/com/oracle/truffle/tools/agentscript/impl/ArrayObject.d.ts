import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ArrayObject extends Object implements TruffleObject {
    private constructor(arr: Object[], convertToString: boolean)
    // private arr: Object[];
    // private convertToString: boolean;
    contains(name: string): boolean;
    getArraySize(): number;
    hasArrayElements(): boolean;
    isArrayElementReadable(index: number): boolean;
    readArrayElement(index: number): Object;
}