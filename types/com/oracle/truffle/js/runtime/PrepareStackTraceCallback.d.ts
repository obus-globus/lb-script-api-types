import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PrepareStackTraceCallback extends Object{
    prepareStackTrace(realm: JSRealm, error: JSDynamicObject, structuredStackTrace: JSDynamicObject): Object;
}