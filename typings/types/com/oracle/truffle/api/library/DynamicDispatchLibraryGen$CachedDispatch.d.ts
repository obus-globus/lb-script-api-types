import type { DynamicDispatchLibrary } from '../../../../../com/oracle/truffle/api/library/DynamicDispatchLibrary.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DynamicDispatchLibraryGen$CachedDispatch extends DynamicDispatchLibrary {
    static getFactory(): LibraryFactory<DynamicDispatchLibrary>;
    constructor(library: DynamicDispatchLibrary, next: DynamicDispatchLibraryGen$CachedDispatch)
    // private library: DynamicDispatchLibrary;
    // private next: DynamicDispatchLibraryGen$CachedDispatch;
    accepts(receiver_: Object): boolean;
    cast(receiver: Object): Object;
    dispatch(receiver_: Object): Class<Object>;
    getLimit(): number;
    // private specialize(receiver_: Object): void;
}