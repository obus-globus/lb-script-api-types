import type { Library } from '../../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { LibraryExport } from '../../../../../../com/oracle/truffle/api/library/LibraryExport.d.ts'
import type { ValueLibrary } from '../../../../../../com/oracle/truffle/js/api/ValueLibrary.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSDynamicObjectGen$ValueLibraryExports extends LibraryExport<ValueLibrary> {
    static register<T extends Library>(paramreceiverClass: Class<Object>, ...paramlibs: LibraryExport<any>[]): void;
    private constructor()
    createCached(receiver: Object): ValueLibrary;
    createUncached(receiver: Object): ValueLibrary;
}