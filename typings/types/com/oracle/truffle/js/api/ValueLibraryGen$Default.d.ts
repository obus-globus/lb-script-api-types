import type { LibraryExport } from '../../../../../com/oracle/truffle/api/library/LibraryExport.d.ts'
import type { ValueLibrary } from '../../../../../com/oracle/truffle/js/api/ValueLibrary.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ValueLibraryGen$Default extends LibraryExport<ValueLibrary> {
    static register(paramreceiverClass: Class<Object>, ...paramlibs: LibraryExport<any>[]): void;
    private constructor()
    createCached(receiver: Object): ValueLibrary;
    createUncached(receiver: Object): ValueLibrary;
}