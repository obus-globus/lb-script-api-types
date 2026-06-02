import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSModuleRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/JSModuleRecord.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ImportMetaInitializer extends Object{
    initializeImportMeta(importMeta: JSDynamicObject, module: JSModuleRecord): void;
}