import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { LibraryExport } from '../../../../../com/oracle/truffle/api/library/LibraryExport.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LibraryFactory$ResolvedDispatch extends Object {
    private constructor(parent: LibraryFactory$ResolvedDispatch, dispatchClass: Class<Object>, ...libs: LibraryExport<any>[])
    // private dispatchClass: Class<Object>;
    // private libraries: Map<Class<Object>, LibraryExport<any>>;
    // private parent: LibraryFactory$ResolvedDispatch;
    getLibraries(): Class<Object>[];
    getLibrary<T extends Library>(libraryClass: Class<T>): LibraryExport<T>;
    toString(): string;
}