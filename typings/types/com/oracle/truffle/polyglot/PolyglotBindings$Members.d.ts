import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotBindings$Members extends Object implements TruffleObject {
    constructor(names: string[])
    // private names: string[];
    getArraySize(): number;
    hasArrayElements(): boolean;
    isArrayElementReadable(index: number): boolean;
    readArrayElement(index: number): Object;
}