import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { PromiseLibrary$State } from '../../../../../com/oracle/truffle/js/api/PromiseLibrary$State.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class PromiseLibrary extends Library {
    static getFactory(): LibraryFactory<PromiseLibrary>;
    static getUncached(): PromiseLibrary;
    constructor()
    getState(promise: Object): PromiseLibrary$State;
    isPromise(object: Object): boolean;
    markHandled(promise: Object): void;
}