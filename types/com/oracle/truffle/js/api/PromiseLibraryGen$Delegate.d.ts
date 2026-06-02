import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { PromiseLibrary } from '../../../../../com/oracle/truffle/js/api/PromiseLibrary.d.ts'
import type { PromiseLibrary$State } from '../../../../../com/oracle/truffle/js/api/PromiseLibrary$State.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PromiseLibraryGen$Delegate extends PromiseLibrary {
    static getFactory(): LibraryFactory<PromiseLibrary>;
    static getUncached(): PromiseLibrary;
    constructor(delegateLibrary: PromiseLibrary)
    // private delegateLibrary: PromiseLibrary;
    accepts(receiver_: Object): boolean;
    getState(receiver_: Object): PromiseLibrary$State;
    isAdoptable(): boolean;
    isPromise(receiver_: Object): boolean;
    markHandled(receiver_: Object): void;
}