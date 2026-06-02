import type { Module$ModuleRequest } from '../../../../../../com/oracle/js/parser/ir/Module$ModuleRequest.d.ts'
import type { AbstractModuleRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/AbstractModuleRecord.d.ts'
import type { ScriptOrModule } from '../../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface JSModuleLoader extends Object{
    addLoadedModule(moduleRequest: Module$ModuleRequest, moduleRecord: AbstractModuleRecord): AbstractModuleRecord;
    resolveImportedModule(referencingModule: ScriptOrModule, moduleRequest: Module$ModuleRequest): AbstractModuleRecord;
}