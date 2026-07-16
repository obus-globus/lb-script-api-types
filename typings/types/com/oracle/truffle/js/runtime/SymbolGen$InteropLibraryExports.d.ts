import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { LibraryExport } from '../../../../../com/oracle/truffle/api/library/LibraryExport.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SymbolGen$InteropLibraryExports extends LibraryExport<InteropLibrary> {
    static register<T extends Library>(paramreceiverClass: Class<Object>, ...paramlibs: LibraryExport<any>[]): void;
    private constructor()
    createCached(receiver: Object): InteropLibrary;
    createUncached(receiver: Object): InteropLibrary;
}