import type { Library } from '../../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { LibraryExport } from '../../../../../../com/oracle/truffle/api/library/LibraryExport.d.ts'
import type { ArrayBufferLibrary } from '../../../../../../com/oracle/truffle/js/api/ArrayBufferLibrary.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InteropGen$ArrayBufferLibraryExports extends LibraryExport<ArrayBufferLibrary> {
    static register<T extends Library>(paramreceiverClass: Class<Object>, ...paramlibs: LibraryExport<any>[]): void;
    private constructor()
    createCached(receiver: Object): ArrayBufferLibrary;
    createUncached(receiver: Object): ArrayBufferLibrary;
}