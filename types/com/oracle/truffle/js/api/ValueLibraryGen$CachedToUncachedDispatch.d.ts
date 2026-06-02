import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ValueLibrary } from '../../../../../com/oracle/truffle/js/api/ValueLibrary.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export class ValueLibraryGen$CachedToUncachedDispatch extends ValueLibrary {
    static getFactory(): LibraryFactory<ValueLibrary>;
    static getUncached(): ValueLibrary;
    private constructor()
    accepts(receiver_: Object): boolean;
    isArrayBuffer(receiver_: Object): boolean;
    isPromise(receiver_: Object): boolean;
    isProxy(receiver_: Object): boolean;
    toBoolean(receiver_: Object): boolean;
    toNumber(receiver_: Object): Number;
    toString(receiver_: Object): TruffleString;
}