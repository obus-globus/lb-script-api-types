import type { AllocationEventFilter } from '../../../../../com/oracle/truffle/api/instrumentation/AllocationEventFilter.d.ts'
import type { AllocationListener } from '../../../../../com/oracle/truffle/api/instrumentation/AllocationListener.d.ts'
import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { EventBinding$SourceExecuted } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$SourceExecuted.d.ts'
import type { EventBinding$SourceLoaded } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$SourceLoaded.d.ts'
import type { ExecuteSourceListener } from '../../../../../com/oracle/truffle/api/instrumentation/ExecuteSourceListener.d.ts'
import type { ExecutionEventListener } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventListener.d.ts'
import type { ExecutionEventNode } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNode.d.ts'
import type { ExecutionEventNodeFactory } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNodeFactory.d.ts'
import type { InstrumentationHandler } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler.d.ts'
import type { Instrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/Instrumenter.d.ts'
import type { LoadSourceListener } from '../../../../../com/oracle/truffle/api/instrumentation/LoadSourceListener.d.ts'
import type { LoadSourceSectionListener } from '../../../../../com/oracle/truffle/api/instrumentation/LoadSourceSectionListener.d.ts'
import type { NearestSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/NearestSectionFilter.d.ts'
import type { SourceFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceFilter.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class InstrumentationHandler$AbstractInstrumenter extends Instrumenter {
    constructor(null_: InstrumentationHandler)
    attachAllocationListener<T extends AllocationListener>(filter: AllocationEventFilter, listener: T): EventBinding<T>;
    attachErrConsumer<T extends OutputStream>(stream: T): EventBinding<T>;
    attachExecuteSourceListener<T extends ExecuteSourceListener>(filter: SourceFilter, listener: T, notifyLoaded: boolean): EventBinding<T>;
    attachExecutionEventFactory<T extends ExecutionEventNodeFactory>(nearestFilter: NearestSectionFilter, baseFilter: SourceSectionFilter, factory: T): EventBinding<T>;
    attachExecutionEventFactory<T extends ExecutionEventNodeFactory>(eventFilter: SourceSectionFilter, factory: T): EventBinding<T>;
    attachExecutionEventFactory<T extends ExecutionEventNodeFactory>(filter: SourceSectionFilter, inputFilter: SourceSectionFilter, factory: T): EventBinding<T>;
    attachExecutionEventListener<T extends ExecutionEventListener>(eventFilter: SourceSectionFilter, listener: T): EventBinding<T>;
    attachExecutionEventListener<T extends ExecutionEventListener>(filter: SourceSectionFilter, inputFilter: SourceSectionFilter, listener: T): EventBinding<T>;
    attachLoadSourceListener<T extends LoadSourceListener>(filter: SourceFilter, listener: T, notifyLoaded: boolean): EventBinding<T>;
    attachLoadSourceListener<T extends LoadSourceListener>(filter: SourceSectionFilter, listener: T, includeExistingSources: boolean): EventBinding<T>;
    attachLoadSourceSectionListener<T extends LoadSourceSectionListener>(nearestFilter: NearestSectionFilter, baseFilter: SourceSectionFilter, listener: T, notifyLoaded: boolean): EventBinding<T>;
    attachLoadSourceSectionListener<T extends LoadSourceSectionListener>(filter: SourceSectionFilter, listener: T, notifyLoaded: boolean): EventBinding<T>;
    attachOutConsumer<T extends OutputStream>(stream: T): EventBinding<T>;
    attachSourceExecutedBinding(binding: EventBinding$SourceExecuted<Object>): void;
    attachSourceLoadedBinding(binding: EventBinding$SourceLoaded<Object>): void;
    attachSourceSectionBinding(binding: EventBinding$Source<Object>): void;
    createExecuteSourceBinding<T extends ExecuteSourceListener>(filter: SourceFilter, listener: T, notifyLoaded: boolean): EventBinding<T>;
    createLoadSourceBinding<T extends LoadSourceListener>(filter: SourceFilter, listener: T, notifyLoaded: boolean): EventBinding<T>;
    createLoadSourceSectionBinding<T extends LoadSourceSectionListener>(nearestFilter: NearestSectionFilter, baseFilter: SourceSectionFilter, listener: T, notifyLoaded: boolean): EventBinding<T>;
    createLoadSourceSectionBinding<T extends LoadSourceSectionListener>(filter: SourceSectionFilter, listener: T, notifyLoaded: boolean): EventBinding<T>;
    dispose(): void;
    disposeBinding(binding: EventBinding<Object>): void;
    doFinalize(): void;
    isInstrumentableRoot(rootNode: RootNode): boolean;
    isInstrumentableSource(source: Source): boolean;
    isReadyForContextEvents(): boolean;
    lookup<T extends unknown>(handler: InstrumentationHandler, type: Class<T>): T;
    lookupExecutionEventNode(node: Node, binding: EventBinding<Object>): ExecutionEventNode;
    queryTagsImpl(node: Node, onlyLanguage: LanguageInfo): Class<Object>[];
    verifyFilter(nearestFilter: NearestSectionFilter, sourceSectionFilter: SourceSectionFilter): void;
    // private verifySourceOnly(filter: SourceSectionFilter): void;
    visitLoadedSourceSections(filter: SourceSectionFilter, listener: LoadSourceSectionListener): void;
}