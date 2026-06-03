import type { Module$ModuleRequest } from '../../../../../../com/oracle/js/parser/ir/Module$ModuleRequest.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSPromiseObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { JSWebAssemblyModuleObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/wasm/JSWebAssemblyModuleObject.d.ts'
import type { AbstractModuleRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/AbstractModuleRecord.d.ts'
import type { CyclicModuleRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/CyclicModuleRecord.d.ts'
import type { ExportResolution } from '../../../../../../com/oracle/truffle/js/runtime/objects/ExportResolution.d.ts'
import type { JSModuleRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSModuleRecord.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Pair } from '../../../../../../com/oracle/truffle/js/runtime/util/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WebAssemblyModuleRecord extends CyclicModuleRecord {
    constructor(context: JSContext, source: Source, webAssemblyModule: JSWebAssemblyModuleObject)
    // private exportNameList: TruffleString[];
    readonly requestedModules: Module$ModuleRequest[];
    // private webAssemblyModule: JSWebAssemblyModuleObject;
    executeModule(realm: JSRealm, promiseCapability: PromiseCapabilityRecord): Object;
    getExportedNames(): E[];
    getExportedNames(exportStarSet: JSModuleRecord[]): E[];
    getModuleSource(): Object;
    getRequestedModules(): Module$ModuleRequest[];
    initializeEnvironment(realm: JSRealm): void;
    loadRequestedModules(realm: JSRealm, hostDefined: Object): JSPromiseObject;
    // private readExportedNames(): TruffleString[];
    // private readRequestedModules(): Module$ModuleRequest[];
    resolveExport(exportName: TruffleString): ExportResolution;
    resolveExport(exportName: TruffleString, resolveSet: Pair<AbstractModuleRecord, TruffleString>[]): ExportResolution;
    toString(): string;
}