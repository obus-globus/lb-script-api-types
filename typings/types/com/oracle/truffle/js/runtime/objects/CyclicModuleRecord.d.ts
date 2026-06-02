import type { Module$ModuleRequest } from '../../../../../../com/oracle/js/parser/ir/Module$ModuleRequest.d.ts'
import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSPromiseObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { AbstractModuleRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/AbstractModuleRecord.d.ts'
import type { CyclicModuleRecord$LoadedModuleRequest } from '../../../../../../com/oracle/truffle/js/runtime/objects/CyclicModuleRecord$LoadedModuleRequest.d.ts'
import type { CyclicModuleRecord$Status } from '../../../../../../com/oracle/truffle/js/runtime/objects/CyclicModuleRecord$Status.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { EconomicMap } from '../../../../../../org/graalvm/collections/EconomicMap.d.ts'
export abstract class CyclicModuleRecord extends AbstractModuleRecord {
    constructor(context: JSContext, source: Source, hostDefined: Object, frameDescriptor: FrameDescriptor)
    constructor(context: JSContext, source: Source, hostDefined: Object, frameDescriptor: FrameDescriptor, hasTLA: boolean)
    readonly asyncEvaluation: boolean;
    // private asyncEvaluationOrder: number;
    readonly asyncParentModules: CyclicModuleRecord[];
    readonly cycleRoot: CyclicModuleRecord;
    // private dfsAncestorIndex: number;
    // private dfsIndex: number;
    readonly evaluationError: Throwable;
    readonly executionResult: Object;
    // private hasTLA: boolean;
    // private loadedModules: EconomicMap<CyclicModuleRecord$LoadedModuleRequest, AbstractModuleRecord>;
    readonly pendingAsyncDependencies: number;
    readonly status: CyclicModuleRecord$Status;
    // private topLevelPromiseCapability: PromiseCapabilityRecord;
    addLoadedModule(realm: JSRealm, moduleRequest: Module$ModuleRequest, module: AbstractModuleRecord): AbstractModuleRecord;
    appendAsyncParentModules(moduleRecord: CyclicModuleRecord): void;
    decPendingAsyncDependencies(): void;
    evaluate(realm: JSRealm): JSPromiseObject;
    executeModule(realm: JSRealm, capability: PromiseCapabilityRecord): Object;
    getAsyncEvaluatingOrder(): number;
    getAsyncParentModules(): CyclicModuleRecord[];
    getCycleRoot(): CyclicModuleRecord;
    getDFSAncestorIndex(): number;
    getDFSIndex(): number;
    getEvaluationError(): Throwable;
    getExecutionResult(): Object;
    getExecutionResultOrThrow(): Object;
    getImportedModule(moduleRequest: Module$ModuleRequest): AbstractModuleRecord;
    getLoadedModule(moduleRequest: Module$ModuleRequest): AbstractModuleRecord;
    getPendingAsyncDependencies(): number;
    getRequestedModules(): Module$ModuleRequest[];
    getStatus(): CyclicModuleRecord$Status;
    getTopLevelCapability(): PromiseCapabilityRecord;
    hasBeenEvaluated(): boolean;
    hasTLA(): boolean;
    incPendingAsyncDependencies(): void;
    initAsyncParentModules(): void;
    initializeEnvironment(realm: JSRealm): void;
    isAsyncEvaluation(): boolean;
    isLinked(): boolean;
    isReadyForSyncExecution(): boolean;
    // private isReadyForSyncExecution(seen: AbstractModuleRecord[]): boolean;
    link(realm: JSRealm): void;
    setAsyncEvaluatingOrder(order: number): void;
    setAsyncEvaluation(asyncEvaluation: boolean): void;
    setCycleRoot(module: CyclicModuleRecord): void;
    setDFSAncestorIndex(dfsAncestorIndex: number): void;
    setDFSIndex(dfsIndex: number): void;
    setEvaluationError(evaluationError: Throwable): void;
    setExecutionResult(executionResult: Object): void;
    setPendingAsyncDependencies(value: number): void;
    setStatus(status: CyclicModuleRecord$Status): void;
    setTopLevelCapability(capability: PromiseCapabilityRecord): void;
    setUnlinked(): void;
}