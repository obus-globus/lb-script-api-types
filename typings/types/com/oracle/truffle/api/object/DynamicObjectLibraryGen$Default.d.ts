import type { LibraryExport } from '../../../../../com/oracle/truffle/api/library/LibraryExport.d.ts'
import type { DynamicObjectLibrary } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DynamicObjectLibraryGen$Default extends LibraryExport<DynamicObjectLibrary> {
    static register(paramreceiverClass: Class<Object>, ...paramlibs: Object | null): void;
    private constructor()
    createCached(receiver: Object): DynamicObjectLibrary;
    createUncached(receiver: Object): DynamicObjectLibrary;
}