import type { AllocationEventFilter } from '../../../../../com/oracle/truffle/api/instrumentation/AllocationEventFilter.d.ts'
import type { AllocationListener } from '../../../../../com/oracle/truffle/api/instrumentation/AllocationListener.d.ts'
import type { ContextsListener } from '../../../../../com/oracle/truffle/api/instrumentation/ContextsListener.d.ts'
import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { ExecuteSourceListener } from '../../../../../com/oracle/truffle/api/instrumentation/ExecuteSourceListener.d.ts'
import type { ExecutionEventListener } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventListener.d.ts'
import type { ExecutionEventNode } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNode.d.ts'
import type { ExecutionEventNodeFactory } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNodeFactory.d.ts'
import type { LoadSourceListener } from '../../../../../com/oracle/truffle/api/instrumentation/LoadSourceListener.d.ts'
import type { LoadSourceSectionListener } from '../../../../../com/oracle/truffle/api/instrumentation/LoadSourceSectionListener.d.ts'
import type { NearestSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/NearestSectionFilter.d.ts'
import type { SourceFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceFilter.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { ThreadsActivationListener } from '../../../../../com/oracle/truffle/api/instrumentation/ThreadsActivationListener.d.ts'
import type { ThreadsListener } from '../../../../../com/oracle/truffle/api/instrumentation/ThreadsListener.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Instrumenter extends Object {
    constructor()
    attachAllocationListener<T extends AllocationListener>(filter: AllocationEventFilter, listener: T): EventBinding<T>;
    attachContextsListener<T extends ContextsListener>(listener: T, includeActiveContexts: boolean): EventBinding<T>;
    attachErrConsumer<T extends OutputStream>(stream: T): EventBinding<T>;
    attachExecuteSourceListener<T extends ExecuteSourceListener>(filter: SourceFilter, listener: T, includeExecutedSources: boolean): EventBinding<T>;
    attachExecutionEventFactory<T extends ExecutionEventNodeFactory>(nearestFilter: NearestSectionFilter, baseFilter: SourceSectionFilter, factory: T): EventBinding<T>;
    attachExecutionEventFactory<T extends ExecutionEventNodeFactory>(eventFilter: SourceSectionFilter, factory: T): EventBinding<T>;
    attachExecutionEventFactory<T extends ExecutionEventNodeFactory>(eventFilter: SourceSectionFilter, inputFilter: SourceSectionFilter, factory: T): EventBinding<T>;
    attachExecutionEventListener<T extends ExecutionEventListener>(eventFilter: SourceSectionFilter, listener: T): EventBinding<T>;
    attachExecutionEventListener<T extends ExecutionEventListener>(eventFilter: SourceSectionFilter, inputFilter: SourceSectionFilter, listener: T): EventBinding<T>;
    attachLoadSourceListener<T extends LoadSourceListener>(filter: SourceFilter, listener: T, includeExistingSources: boolean): EventBinding<T>;
    attachLoadSourceListener<T extends LoadSourceListener>(filter: SourceSectionFilter, listener: T, includeExistingSources: boolean): EventBinding<T>;
    attachLoadSourceSectionListener<T extends LoadSourceSectionListener>(nearestFilter: NearestSectionFilter, baseFilter: SourceSectionFilter, listener: T, includeExistingSourceSections: boolean): EventBinding<T>;
    attachLoadSourceSectionListener<T extends LoadSourceSectionListener>(filter: SourceSectionFilter, listener: T, includeExistingSourceSections: boolean): EventBinding<T>;
    attachOutConsumer<T extends OutputStream>(stream: T): EventBinding<T>;
    attachThreadsActivationListener(listener: ThreadsActivationListener): EventBinding<ThreadsActivationListener>;
    attachThreadsListener<T extends ThreadsListener>(listener: T, includeInitializedThreads: boolean): EventBinding<T>;
    createExecuteSourceBinding<T extends ExecuteSourceListener>(filter: SourceFilter, listener: T, includeExecutedSources: boolean): EventBinding<T>;
    createLoadSourceBinding<T extends LoadSourceListener>(filter: SourceFilter, listener: T, includeExistingSources: boolean): EventBinding<T>;
    createLoadSourceSectionBinding<T extends LoadSourceSectionListener>(nearestFilter: NearestSectionFilter, baseFilter: SourceSectionFilter, listener: T, includeExistingSourceSections: boolean): EventBinding<T>;
    createLoadSourceSectionBinding<T extends LoadSourceSectionListener>(filter: SourceSectionFilter, listener: T, includeExistingSourceSections: boolean): EventBinding<T>;
    lookupExecutionEventNode(node: Node, binding: EventBinding<Object>): ExecutionEventNode;
    querySourceSections(filter: SourceSectionFilter): SourceSection[];
    queryTags(node: Node): Class<Object>[];
    visitLoadedSourceSections(filter: SourceSectionFilter, listener: LoadSourceSectionListener): void;
}