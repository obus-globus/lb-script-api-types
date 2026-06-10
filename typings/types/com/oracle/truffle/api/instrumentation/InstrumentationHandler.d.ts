import type { TruffleContext } from '../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { DispatchOutputStream } from '../../../../../com/oracle/truffle/api/impl/DispatchOutputStream.d.ts'
import type { AllocationEventFilter } from '../../../../../com/oracle/truffle/api/instrumentation/AllocationEventFilter.d.ts'
import type { AllocationListener } from '../../../../../com/oracle/truffle/api/instrumentation/AllocationListener.d.ts'
import type { AllocationReporter } from '../../../../../com/oracle/truffle/api/instrumentation/AllocationReporter.d.ts'
import type { ContextsListener } from '../../../../../com/oracle/truffle/api/instrumentation/ContextsListener.d.ts'
import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { EventBinding$Allocation } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Allocation.d.ts'
import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { EventBinding$SourceExecuted } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$SourceExecuted.d.ts'
import type { EventBinding$SourceLoaded } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$SourceLoaded.d.ts'
import type { ExecutionEventListener } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventListener.d.ts'
import type { ExecutionEventNodeFactory } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNodeFactory.d.ts'
import type { InstrumentationHandler$AbstractInstrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$AbstractInstrumenter.d.ts'
import type { InstrumentationHandler$BindingLoadSourceSectionEvent } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$BindingLoadSourceSectionEvent.d.ts'
import type { InstrumentationHandler$EngineInstrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$EngineInstrumenter.d.ts'
import type { InstrumentationHandler$StableThreadsActivationListeners } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$StableThreadsActivationListeners.d.ts'
import type { Instrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/Instrumenter.d.ts'
import type { LoadSourceListener } from '../../../../../com/oracle/truffle/api/instrumentation/LoadSourceListener.d.ts'
import type { LoadSourceSectionListener } from '../../../../../com/oracle/truffle/api/instrumentation/LoadSourceSectionListener.d.ts'
import type { NearestSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/NearestSectionFilter.d.ts'
import type { ProbeNode } from '../../../../../com/oracle/truffle/api/instrumentation/ProbeNode.d.ts'
import type { ProbeNode$EventChainNode } from '../../../../../com/oracle/truffle/api/instrumentation/ProbeNode$EventChainNode.d.ts'
import type { SourceInstrumentationHandler } from '../../../../../com/oracle/truffle/api/instrumentation/SourceInstrumentationHandler.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { ThreadsActivationListener } from '../../../../../com/oracle/truffle/api/instrumentation/ThreadsActivationListener.d.ts'
import type { ThreadsListener } from '../../../../../com/oracle/truffle/api/instrumentation/ThreadsListener.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionValues } from '../../../../../org/graalvm/options/OptionValues.d.ts'
export class InstrumentationHandler extends Object {
    constructor(polyglotEngine: Object)
    // private allocationBindings: EventBinding$Allocation<AllocationListener>[];
    // private allocationReporters: Map<LanguageInfo, AllocationReporter>;
    // private cachedProvidedTags: Map<Class<Object>, Class<Object>[]>;
    // private contextsBindings: EventBinding<ContextsListener>[];
    // private engineInstrumenter: InstrumentationHandler$EngineInstrumenter;
    // private executedRoots: RootNode[];
    // private executionBindings: EventBinding$Source<Object>[];
    // private hasLoadOrExecutionBinding: boolean;
    // private instrumenterMap: Map<Object, InstrumentationHandler$AbstractInstrumenter>;
    // private loadedRoots: RootNode[];
    // private outputErrBindings: EventBinding<OutputStream>[];
    // private outputStdBindings: EventBinding<OutputStream>[];
    // private polyglotEngine: Object;
    // private sourceSectionBindings: EventBinding$Source<Object>[];
    // private sourcesExecuted: SourceInstrumentationHandler;
    // private sourcesLoaded: SourceInstrumentationHandler;
    // private stableActivationListeners: InstrumentationHandler$StableThreadsActivationListeners;
    // private threadLocalNewSourcesExecuted: ThreadLocal<Map<Source, void>>;
    // private threadLocalNewSourcesLoaded: ThreadLocal<Map<Source, void>>;
    // private threadLocalSourceSectionLoadedList: ThreadLocal<InstrumentationHandler$BindingLoadSourceSectionEvent[]>;
    // private threadsActivationBindings: EventBinding<ThreadsActivationListener>[];
    // private threadsBindings: EventBinding<ThreadsListener>[];
    // private addAllocationBinding<T extends AllocationListener>(binding: EventBinding$Allocation<T>): EventBinding<T>;
    // private addContextsBinding<T extends ContextsListener>(binding: EventBinding<T>, includeActiveContexts: boolean): EventBinding<T>;
    addExecutionBinding<T extends Object | number | string | boolean>(binding: EventBinding$Source<T>): EventBinding<T>;
    // private addInstrumenter(key: Object, instrumenter: InstrumentationHandler$AbstractInstrumenter): void;
    addOutputBinding<T extends OutputStream>(binding: EventBinding<T>, errorOutput: boolean): EventBinding<T>;
    addSourceExecutionBinding<T extends Object | number | string | boolean>(binding: EventBinding$SourceExecuted<T>): EventBinding<T>;
    addSourceLoadedBinding<T extends Object | number | string | boolean>(binding: EventBinding$SourceLoaded<T>): EventBinding<T>;
    addSourceSectionBinding<T extends Object | number | string | boolean>(binding: EventBinding$Source<T>): EventBinding<T>;
    // private addThreadsBinding<T extends ThreadsListener>(binding: EventBinding<T>, includeStartedThreads: boolean): EventBinding<T>;
    // private attachAllocationListener<T extends AllocationListener>(instrumenter: InstrumentationHandler$AbstractInstrumenter, filter: AllocationEventFilter, listener: T): EventBinding<T>;
    // private attachContextsListener<T extends ContextsListener>(instrumenter: InstrumentationHandler$AbstractInstrumenter, listener: T, includeActiveContexts: boolean): EventBinding<T>;
    // private attachExecuteSourceListener<T extends Object | number | string | boolean>(abstractInstrumenter: InstrumentationHandler$AbstractInstrumenter, filter: SourceSectionFilter, listener: T, notifyLoaded: boolean): EventBinding<T>;
    // private attachFactory<T extends ExecutionEventNodeFactory>(instrumenter: InstrumentationHandler$AbstractInstrumenter, nearestFilter: NearestSectionFilter, filter: SourceSectionFilter, inputFilter: SourceSectionFilter, factory: T): EventBinding<T>;
    // private attachListener<T extends ExecutionEventListener>(instrumenter: InstrumentationHandler$AbstractInstrumenter, filter: SourceSectionFilter, inputFilter: SourceSectionFilter, listener: T): EventBinding<T>;
    // private attachOutputConsumer<T extends OutputStream>(instrumenter: InstrumentationHandler$AbstractInstrumenter, stream: T, errorOutput: boolean): EventBinding<T>;
    // private attachSourceListener<T extends LoadSourceListener>(abstractInstrumenter: InstrumentationHandler$AbstractInstrumenter, filter: SourceSectionFilter, listener: T, notifyLoaded: boolean): EventBinding<T>;
    // private attachSourceSectionListener<T extends Object | number | string | boolean>(abstractInstrumenter: InstrumentationHandler$AbstractInstrumenter, nearestFilter: NearestSectionFilter, baseFilter: SourceSectionFilter, listener: T, notifyLoaded: boolean): EventBinding<T>;
    // private attachThreadsActivationListener<T extends ThreadsActivationListener>(instrumenter: InstrumentationHandler$AbstractInstrumenter, listener: T): EventBinding<T>;
    // private attachThreadsListener<T extends ThreadsListener>(instrumenter: InstrumentationHandler$AbstractInstrumenter, listener: T, includeStartedThreads: boolean): EventBinding<T>;
    createBindings(frame: VirtualFrame, probeNodeImpl: ProbeNode, executionBindingsSnapshot: EventBinding$Source<Object>[]): ProbeNode$EventChainNode;
    createInstrument(vmObject: Object, expectedServices: string[], optionValues: OptionValues): void;
    disposeBinding(binding: EventBinding<Object>): void;
    disposeInstrumenter(key: Object, cleanupRequired: boolean): void;
    // private err(): DispatchOutputStream;
    finalizeInstrumenter(key: Object): void;
    forLanguage(language: TruffleLanguage<Object>): Instrumenter;
    getAllocationReporter(info: LanguageInfo): AllocationReporter;
    getEngine(): Object;
    getExecutionBindingsSnapshot(): EventBinding$Source<Object>[];
    getProvidedTags(lang: TruffleLanguage<Object>): Class<Object>[];
    getProvidedTags(root: Node): Class<Object>[];
    getThreadsActivationListeners(): ThreadsActivationListener[];
    hasContextBindings(): boolean;
    hasThreadBindings(): boolean;
    initializeInstrument(polyglotInstrument: Object, instrumentClassName: string, instrumentSupplier: () => Object | null): void;
    // private insertWrapper(instrumentableNode: Node, sourceSection: SourceSection): ProbeNode;
    // private insertWrapperImpl(node: Node, sourceSection: SourceSection): ProbeNode;
    // private invalidateThreadsActivationListeners(): void;
    // private lazyInitializeSourcesExecutedList(): void;
    // private lazyInitializeSourcesLoadedList(): void;
    lookup<T extends Object | number | string | boolean>(key: Object, type: Class<T>): T;
    notifyContextClosed(context: TruffleContext): void;
    notifyContextCreated(context: TruffleContext): void;
    notifyContextResetLimit(context: TruffleContext): void;
    notifyLanguageContextCreate(context: TruffleContext, language: LanguageInfo): void;
    notifyLanguageContextCreateFailed(context: TruffleContext, language: LanguageInfo): void;
    notifyLanguageContextCreated(context: TruffleContext, language: LanguageInfo): void;
    notifyLanguageContextDisposed(context: TruffleContext, language: LanguageInfo): void;
    notifyLanguageContextFinalized(context: TruffleContext, language: LanguageInfo): void;
    notifyLanguageContextInitialize(context: TruffleContext, language: LanguageInfo): void;
    notifyLanguageContextInitializeFailed(context: TruffleContext, language: LanguageInfo): void;
    notifyLanguageContextInitialized(context: TruffleContext, language: LanguageInfo): void;
    notifyThreadFinished(context: TruffleContext, thread: Thread): void;
    notifyThreadStarted(context: TruffleContext, thread: Thread): void;
    onFirstExecution(root: RootNode): void;
    onLoad(root: RootNode): void;
    onNodeInserted(rootNode: RootNode, tree: Node): void;
    // private out(): DispatchOutputStream;
    // private updateStableActivationListeners(): InstrumentationHandler$StableThreadsActivationListeners;
    // private visitLoadedSourceSections(binding: EventBinding$Source<Object>): void;
    // private visitLoadedSourceSections(abstractInstrumenter: InstrumentationHandler$AbstractInstrumenter, filter: SourceSectionFilter, listener: LoadSourceSectionListener): void;
}