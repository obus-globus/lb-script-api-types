import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { LibraryExport } from '../../../../../com/oracle/truffle/api/library/LibraryExport.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LibraryFactory$ProxyExports extends LibraryExport<T> {
    static register(paramreceiverClass: Class<Object>, paramlibs: Object | null): void;
    constructor(null_: LibraryFactory<Library>)
    createCached<T extends Library>(receiver: Object): T;
    createUncached<T extends Library>(receiver: Object): T;
}