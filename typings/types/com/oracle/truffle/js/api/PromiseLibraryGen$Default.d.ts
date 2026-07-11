import type { LibraryExport } from '../../../../../com/oracle/truffle/api/library/LibraryExport.d.ts'
import type { PromiseLibrary } from '../../../../../com/oracle/truffle/js/api/PromiseLibrary.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PromiseLibraryGen$Default extends LibraryExport<PromiseLibrary> {
    static register(paramreceiverClass: Class<Object>, ...paramlibs: Object | null): void;
    private constructor()
    createCached(receiver: Object): PromiseLibrary;
    createUncached(receiver: Object): PromiseLibrary;
}