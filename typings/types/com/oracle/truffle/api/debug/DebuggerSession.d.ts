import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Breakpoint } from '../../../../../com/oracle/truffle/api/debug/Breakpoint.d.ts'
import type { Breakpoint$BreakpointConditionFailure } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$BreakpointConditionFailure.d.ts'
import type { Breakpoint$Kind } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$Kind.d.ts'
import type { DebugContextsListener } from '../../../../../com/oracle/truffle/api/debug/DebugContextsListener.d.ts'
import type { DebugException } from '../../../../../com/oracle/truffle/api/debug/DebugException.d.ts'
import type { DebugScope } from '../../../../../com/oracle/truffle/api/debug/DebugScope.d.ts'
import type { DebugSourcesResolver } from '../../../../../com/oracle/truffle/api/debug/DebugSourcesResolver.d.ts'
import type { DebugThreadsListener } from '../../../../../com/oracle/truffle/api/debug/DebugThreadsListener.d.ts'
import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { Debugger } from '../../../../../com/oracle/truffle/api/debug/Debugger.d.ts'
import type { DebuggerExecutionLifecycle } from '../../../../../com/oracle/truffle/api/debug/DebuggerExecutionLifecycle.d.ts'
import type { DebuggerNode } from '../../../../../com/oracle/truffle/api/debug/DebuggerNode.d.ts'
import type { DebuggerNode$InputValuesProvider } from '../../../../../com/oracle/truffle/api/debug/DebuggerNode$InputValuesProvider.d.ts'
import type { DebuggerSession$Caller } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession$Caller.d.ts'
import type { DebuggerSession$StableBoolean } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession$StableBoolean.d.ts'
import type { DebuggerSession$ThreadSuspension } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession$ThreadSuspension.d.ts'
import type { InsertableNode } from '../../../../../com/oracle/truffle/api/debug/InsertableNode.d.ts'
import type { SourceElement } from '../../../../../com/oracle/truffle/api/debug/SourceElement.d.ts'
import type { SteppingStrategy } from '../../../../../com/oracle/truffle/api/debug/SteppingStrategy.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { SuspendedCallback } from '../../../../../com/oracle/truffle/api/debug/SuspendedCallback.d.ts'
import type { SuspendedContext } from '../../../../../com/oracle/truffle/api/debug/SuspendedContext.d.ts'
import type { SuspendedEvent } from '../../../../../com/oracle/truffle/api/debug/SuspendedEvent.d.ts'
import type { SuspensionFilter } from '../../../../../com/oracle/truffle/api/debug/SuspensionFilter.d.ts'
import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { ExecutionEventNodeFactory } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNodeFactory.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class DebuggerSession extends Object implements Closeable {
    constructor(debugger_: Debugger, callback: SuspendedCallback, ...sourceElements: SourceElement[])
    // private allBindings: EventBinding<ExecutionEventNodeFactory>[];
    // private alwaysHaltBreakpointsActive: DebuggerSession$StableBoolean;
    readonly breakpoints: Breakpoint[];
    // private callback: SuspendedCallback;
    // private closed: boolean;
    // private currentSuspendedEventMap: JavaMap<Thread, SuspendedEvent>;
    readonly debugger: Debugger;
    // private exceptionBreakpointsActive: DebuggerSession$StableBoolean;
    // private executionLifecycle: DebuggerExecutionLifecycle;
    // private hasExpressionElement: boolean;
    // private hasRootElement: boolean;
    // private ignoreLanguageContextInitialization: DebuggerSession$StableBoolean;
    // private includeAvailableSourceSectionsOnly: boolean;
    // private includeInternal: boolean;
    // private locationBreakpointsActive: DebuggerSession$StableBoolean;
    // private sessionId: number;
    readonly showHostStackFrames: boolean;
    // private sourceElements: SourceElement[];
    // private sourceFilter: (param0: Source) => boolean;
    // private sources: DebugSourcesResolver;
    // private stepping: DebuggerSession$StableBoolean;
    // private steppingEnabledSlots: ThreadLocal<number[]>;
    // private strategyMap: JavaMap<Thread, SteppingStrategy>;
    // private suspendAll: boolean;
    // private suspendNext: boolean;
    // private suspensionFilterUnchanged: Assumption;
    // private syntaxElementsBinding: EventBinding<ExecutionEventNodeFactory>;
    // private threadSuspensions: ThreadLocal<DebuggerSession$ThreadSuspension>;
    // private addBindings(includeInternalCode: boolean, sFilter: (param0: Source) => boolean): void;
    clearDisabledSteppingOnCurrentThread(count: number): void;
    // private clearStrategies(): void;
    close(): void;
    // private collectDebuggerNodes(source: DebuggerNode, suspendAnchor: SuspendAnchor): DebuggerNode[];
    // private collectDebuggerNodes(iNode: Node, suspendAnchor: SuspendAnchor): DebuggerNode[];
    // private createBinding(includeInternalCode: boolean, sFilter: (param0: Source) => boolean, factory: ExecutionEventNodeFactory, onInput: boolean, ...tags: Class<Object>[]): EventBinding<ExecutionEventNodeFactory>;
    createPrimitiveValue(primitiveValue: Object, language: LanguageInfo): DebugValue;
    disposeBreakpoint(breakpoint: Breakpoint): void;
    // private doSuspend(context: SuspendedContext, suspendAnchor: SuspendAnchor, frame: MaterializedFrame, insertableNode: InsertableNode, inputValuesProvider: DebuggerNode$InputValuesProvider, returnValue: Object, exception: DebugException, breaks: Breakpoint[], conditionFailures: JavaMap<Breakpoint, Throwable>, singleStepCompleted: boolean, isUnwind: boolean): Object;
    // private doSuspend(context: SuspendedContext, suspendAnchor: SuspendAnchor, frame: MaterializedFrame, insertableNode: InsertableNode, singleStepCompleted: boolean, isUnwind: boolean): void;
    getBreakpoints(): Breakpoint[];
    getDebugger(): Debugger;
    getExportedSymbols(): JavaMap<string, DebugValue>;
    getSourceElements(): SourceElement[];
    // private getSteppingStrategy(value: Thread): SteppingStrategy;
    getSuspensionFilterUnchangedAssumption(): Assumption;
    getTopScope(languageId: string): DebugScope;
    install(breakpoint: Breakpoint): Breakpoint;
    install(breakpoint: Breakpoint, global: boolean): void;
    isBreakpointsActive(): boolean;
    isBreakpointsActive(breakpointKind: Breakpoint$Kind): boolean;
    isIncludeInternal(): boolean;
    isShowHostStackFrames(): boolean;
    isSourceFilteredOut(source: Source): boolean;
    isSteppingEnabledOnCurrentThread(): boolean;
    notifyAtCaller(context: EventContext, caller: DebuggerSession$Caller, s: SteppingStrategy, source: DebuggerNode, suspendAnchor: SuspendAnchor, returnValue: Object, exception: DebugException, conditionFailure: Breakpoint$BreakpointConditionFailure): Object;
    notifyCallback(context: EventContext, source: DebuggerNode, frame: MaterializedFrame, suspendAnchor: SuspendAnchor, inputValuesProvider: DebuggerNode$InputValuesProvider, returnValue: Object, exception: DebugException, conditionFailure: Breakpoint$BreakpointConditionFailure): Object;
    // private notifyCallerReturn(context: EventContext, s: SteppingStrategy, source: DebuggerNode, suspendAnchor: SuspendAnchor, returnValue: Object): Object;
    // private notifyNewThread(currentThread: Thread): SteppingStrategy;
    // private notifyUnwindCallback(frame: MaterializedFrame, insertableNode: InsertableNode): void;
    // private performKill(location: Node): void;
    // private processBreakpointsAndStep(context: EventContext, nodes: DebuggerNode[], s: SteppingStrategy, source: DebuggerNode, frame: MaterializedFrame, suspendAnchor: SuspendAnchor, inputValuesProvider: DebuggerNode$InputValuesProvider, returnValue: Object, exception: DebugException, breakpointFailures: JavaMap<Breakpoint, Throwable>, contextSupplier: () => SuspendedContext): Object;
    // private removeBindings(): void;
    resolveSection(node: Node): SourceSection;
    resolveSection(section: SourceSection): SourceSection;
    resolveSource(source: Source): Source;
    restoreSteppingOnCurrentThread(): void;
    resume(t: Thread): void;
    resumeAll(): void;
    setAsynchronousStackDepth(depth: number): void;
    setBreakpointsActive(breakpointKind: Breakpoint$Kind, active: boolean): void;
    setBreakpointsActive(active: boolean): void;
    setContextsListener(listener: DebugContextsListener, includeActiveContexts: boolean): void;
    setShowHostStackFrames(showHostStackFrames: boolean): void;
    setSourcePath(uris: URI[]): void;
    setSteppingFilter(steppingFilter: SuspensionFilter): void;
    // private setSteppingStrategy(thread: Thread, strategy: SteppingStrategy, updateStepping: boolean): void;
    setThreadSuspendEnabled(enabled: boolean): void;
    setThreadsListener(listener: DebugThreadsListener, includeInitializedThreads: boolean): void;
    suspend(t: Thread): void;
    suspendAll(): void;
    suspendHere(node: Node): boolean;
    suspendNextExecution(): void;
    toString(): string;
    // private trace(msg: string, ...parameters: Object[]): void;
    // private updateStepping(): void;
    visitBreakpoints(consumer: (param0: Breakpoint) => void): void;
}