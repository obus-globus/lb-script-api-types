import type { DynamicDispatchLibrary } from '../../../../../com/oracle/truffle/api/library/DynamicDispatchLibrary.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DynamicDispatchLibraryGen$CachedToUncachedDispatch extends DynamicDispatchLibrary {
    static getFactory(): LibraryFactory<DynamicDispatchLibrary>;
    private constructor()
    accepts(receiver_: Object): boolean;
    cast(receiver: Object): Object;
    dispatch(receiver_: Object): Class<Object>;
}