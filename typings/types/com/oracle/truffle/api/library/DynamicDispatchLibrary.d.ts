import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DynamicDispatchLibrary extends Library {
    static getFactory(): LibraryFactory<DynamicDispatchLibrary>;
    constructor()
    cast(receiver: Object): Object;
    dispatch(receiver: Object): Class<Object>;
}