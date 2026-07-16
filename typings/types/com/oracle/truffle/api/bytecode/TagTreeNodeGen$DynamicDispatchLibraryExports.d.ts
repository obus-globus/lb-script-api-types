import type { DynamicDispatchLibrary } from '../../../../../com/oracle/truffle/api/library/DynamicDispatchLibrary.d.ts'
import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { LibraryExport } from '../../../../../com/oracle/truffle/api/library/LibraryExport.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TagTreeNodeGen$DynamicDispatchLibraryExports extends LibraryExport<DynamicDispatchLibrary> {
    static register<T extends Library>(paramreceiverClass: Class<Object>, ...paramlibs: LibraryExport<any>[]): void;
    private constructor()
    createCached(receiver: Object): DynamicDispatchLibrary;
    createUncached(receiver: Object): DynamicDispatchLibrary;
}