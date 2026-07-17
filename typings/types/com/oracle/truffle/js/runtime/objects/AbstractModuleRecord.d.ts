import type { Module$ImportPhase } from '../../../../../../com/oracle/js/parser/ir/Module$ImportPhase.d.ts'
import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { MaterializedFrame } from '../../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSModuleNamespaceObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSModuleNamespaceObject.d.ts'
import type { JSPromiseObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { CyclicModuleRecord$Status } from '../../../../../../com/oracle/truffle/js/runtime/objects/CyclicModuleRecord$Status.d.ts'
import type { ExportResolution } from '../../../../../../com/oracle/truffle/js/runtime/objects/ExportResolution.d.ts'
import type { JSModuleRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSModuleRecord.d.ts'
import type { ScriptOrModule } from '../../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { Pair } from '../../../../../../com/oracle/truffle/js/runtime/util/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export abstract class AbstractModuleRecord extends ScriptOrModule {
    constructor(context: JSContext, source: Source, hostDefined: Object, frameDescriptor: FrameDescriptor)
    // private deferredNamespace: JSModuleNamespaceObject;
    readonly environment: MaterializedFrame;
    readonly frameDescriptor: FrameDescriptor;
    readonly hostDefined: Object;
    // private namespace: JSModuleNamespaceObject;
    clearEnvironment(): void;
    evaluate(realm: JSRealm): JSPromiseObject;
    evaluateSync(realm: JSRealm): void;
    gatherAsynchronousTransitiveDependencies(): AbstractModuleRecord[];
    // private gatherAsynchronousTransitiveDependencies(result: AbstractModuleRecord[], seen: AbstractModuleRecord[]): AbstractModuleRecord[];
    getEnvironment(): MaterializedFrame;
    getEvaluationError(): Throwable;
    getExportedNames(): TruffleString[];
    getExportedNames(exportStarSet: JSModuleRecord[]): TruffleString[];
    getFrameDescriptor(): FrameDescriptor;
    getHostDefined(): Object;
    getModuleNamespace(phase: Module$ImportPhase): JSModuleNamespaceObject;
    getModuleNamespace(deferred: boolean): JSModuleNamespaceObject;
    getModuleNamespaceOrNull(phase: Module$ImportPhase): JSModuleNamespaceObject;
    getModuleNamespaceOrNull(deferred: boolean): JSModuleNamespaceObject;
    getModuleSource(): Object;
    getStatus(): CyclicModuleRecord$Status;
    link(realm: JSRealm): void;
    loadRequestedModules(realm: JSRealm, hostDefinedArg: Object): JSPromiseObject;
    loadRequestedModulesSync(realm: JSRealm, hostDefinedArg: Object): void;
    resolveExport(exportName: TruffleString): ExportResolution;
    resolveExport(exportName: TruffleString, resolveSet: Pair<AbstractModuleRecord, TruffleString>[]): ExportResolution;
    setEnvironment(environment: MaterializedFrame): void;
    setFrameDescriptor(frameDescriptor: FrameDescriptor): void;
}