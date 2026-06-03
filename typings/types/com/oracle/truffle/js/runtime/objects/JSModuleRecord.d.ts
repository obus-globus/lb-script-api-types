import type { Module } from '../../../../../../com/oracle/js/parser/ir/Module.d.ts'
import type { Module$ModuleRequest } from '../../../../../../com/oracle/js/parser/ir/Module$ModuleRequest.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { CreateImportMetaNode } from '../../../../../../com/oracle/truffle/js/nodes/module/CreateImportMetaNode.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSPromiseObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { AbstractModuleRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/AbstractModuleRecord.d.ts'
import type { CyclicModuleRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/CyclicModuleRecord.d.ts'
import type { ExportResolution } from '../../../../../../com/oracle/truffle/js/runtime/objects/ExportResolution.d.ts'
import type { JSModuleData } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSModuleData.d.ts'
import type { JSModuleLoader } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSModuleLoader.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Pair } from '../../../../../../com/oracle/truffle/js/runtime/util/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSModuleRecord extends CyclicModuleRecord {
    constructor(parsedModule: JSModuleData, moduleLoader: JSModuleLoader)
    constructor(parsedModule: JSModuleData, moduleLoader: JSModuleLoader, hostDefined: Object)
    // private importMeta: JSObject;
    readonly moduleLoader: JSModuleLoader;
    // private parsedModule: JSModuleData;
    executeModule(realm: JSRealm, capability: PromiseCapabilityRecord): Object;
    getExportedNames(): E[];
    getExportedNames(exportStarSet: JSModuleRecord[]): E[];
    getFunctionData(): JSFunctionData;
    getImportMeta(createImportMeta: CreateImportMetaNode): JSObject;
    getImportMetaOrNull(): JSObject;
    getModule(): Module;
    getModuleData(): JSModuleData;
    getModuleLoader(): JSModuleLoader;
    getModuleSource(): Object;
    getRequestedModules(): Module$ModuleRequest[];
    getURL(): string;
    initializeEnvironment(realm: JSRealm): void;
    loadRequestedModules(realm: JSRealm, hostDefinedArg: Object): JSPromiseObject;
    rememberImportedModuleSource(moduleSpecifier: TruffleString, moduleSource: Source): void;
    resolveExport(exportName: TruffleString): ExportResolution;
    resolveExport(exportName: TruffleString, resolveSet: Pair<AbstractModuleRecord, TruffleString>[]): ExportResolution;
    toString(): string;
}