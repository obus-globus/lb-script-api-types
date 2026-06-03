import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export abstract class ValueLibrary extends Library {
    static getFactory(): LibraryFactory<ValueLibrary>;
    static getUncached(): ValueLibrary;
    constructor()
    isArrayBuffer(value: Object): boolean;
    isPromise(value: Object): boolean;
    isProxy(value: Object): boolean;
    toBoolean(value: Object): boolean;
    toNumber(value: Object): Number;
    toString(): string;
    toString(value: Object): TruffleString;
}