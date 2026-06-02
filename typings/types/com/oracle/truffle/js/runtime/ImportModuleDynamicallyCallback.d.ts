import type { Module$ModuleRequest } from '../../../../../com/oracle/js/parser/ir/Module$ModuleRequest.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { ScriptOrModule } from '../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ImportModuleDynamicallyCallback extends Object{
    importModuleDynamically(realm: JSRealm, referrer: ScriptOrModule, moduleRequest: Module$ModuleRequest): JSDynamicObject;
}