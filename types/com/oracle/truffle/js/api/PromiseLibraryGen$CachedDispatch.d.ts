import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { PromiseLibrary } from '../../../../../com/oracle/truffle/js/api/PromiseLibrary.d.ts'
import type { PromiseLibrary$State } from '../../../../../com/oracle/truffle/js/api/PromiseLibrary$State.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class PromiseLibraryGen$CachedDispatch extends PromiseLibrary {
    static getFactory(): LibraryFactory<PromiseLibrary>;
    static getUncached(): PromiseLibrary;
    constructor(library: PromiseLibrary, next: PromiseLibraryGen$CachedDispatch)
    // private library: PromiseLibrary;
    // private next: PromiseLibraryGen$CachedDispatch;
    accepts(receiver_: Object): boolean;
    getLimit(): number;
    getState(receiver_: Object): PromiseLibrary$State;
    isPromise(receiver_: Object): boolean;
    markHandled(receiver_: Object): void;
    // private specialize(receiver_: Object): void;
}