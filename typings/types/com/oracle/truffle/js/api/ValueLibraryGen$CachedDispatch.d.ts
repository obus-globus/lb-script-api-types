import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ValueLibrary } from '../../../../../com/oracle/truffle/js/api/ValueLibrary.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export abstract class ValueLibraryGen$CachedDispatch extends ValueLibrary {
    static getFactory(): LibraryFactory<ValueLibrary>;
    static getUncached(): ValueLibrary;
    constructor(library: ValueLibrary, next: ValueLibraryGen$CachedDispatch)
    // private library: ValueLibrary;
    // private next: ValueLibraryGen$CachedDispatch;
    accepts(receiver_: Object): boolean;
    getLimit(): number;
    isArrayBuffer(receiver_: Object): boolean;
    isPromise(receiver_: Object): boolean;
    isProxy(receiver_: Object): boolean;
    // private specialize(receiver_: Object): void;
    toBoolean(receiver_: Object): boolean;
    toNumber(receiver_: Object): Number;
    toString(receiver_: Object): TruffleString;
}