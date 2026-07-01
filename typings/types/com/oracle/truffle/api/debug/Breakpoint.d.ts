import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Breakpoint$BreakpointConditionFailure } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$BreakpointConditionFailure.d.ts'
import type { Breakpoint$Builder } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$Builder.d.ts'
import type { Breakpoint$ExceptionBuilder } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$ExceptionBuilder.d.ts'
import type { Breakpoint$GlobalBreakpoint } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$GlobalBreakpoint.d.ts'
import type { Breakpoint$Kind } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$Kind.d.ts'
import type { Breakpoint$LocationsInExecutedSources } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$LocationsInExecutedSources.d.ts'
import type { Breakpoint$ResolveListener } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$ResolveListener.d.ts'
import type { Breakpoint$SessionList } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$SessionList.d.ts'
import type { BreakpointExceptionFilter } from '../../../../../com/oracle/truffle/api/debug/BreakpointExceptionFilter.d.ts'
import type { BreakpointLocation } from '../../../../../com/oracle/truffle/api/debug/BreakpointLocation.d.ts'
import type { DebugException } from '../../../../../com/oracle/truffle/api/debug/DebugException.d.ts'
import type { DebugException$CatchLocation } from '../../../../../com/oracle/truffle/api/debug/DebugException$CatchLocation.d.ts'
import type { Debugger } from '../../../../../com/oracle/truffle/api/debug/Debugger.d.ts'
import type { DebuggerNode } from '../../../../../com/oracle/truffle/api/debug/DebuggerNode.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { ExecutionEventNodeFactory } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNodeFactory.d.ts'
import type { Instrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/Instrumenter.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Reference } from '../../../../../java/lang/ref/Reference.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { AtomicLong } from '../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class Breakpoint extends Object {
    static newBuilder(paramsource: Source): Breakpoint$Builder;
    static newBuilder(paramsourceSection: SourceSection): Breakpoint$Builder;
    static newBuilder(paramsourceUri: URI): Breakpoint$Builder;
    static newExceptionBuilder(paramcaught: boolean, paramuncaught: boolean): Breakpoint$ExceptionBuilder;
    constructor(key: BreakpointLocation, suspendAnchor: SuspendAnchor)
    // private breakpointBindingReady: boolean;
    readonly condition: string;
    // private conditionExistsUnchanged: Assumption;
    // private conditionUnchanged: Assumption;
    // private debugger: Debugger;
    readonly disposed: boolean;
    readonly enabled: boolean;
    // private exceptionFilter: BreakpointExceptionFilter;
    // private execBindings: EventBinding<ExecutionEventNodeFactory>[];
    // private global: boolean;
    readonly hitCount: AtomicLong;
    readonly ignoreCount: number;
    // private locationKey: BreakpointLocation;
    // private locationsInExecutedSources: Breakpoint$LocationsInExecutedSources;
    readonly oneShot: boolean;
    // private resolveListener: Breakpoint$ResolveListener;
    // private roWrapper: Breakpoint$GlobalBreakpoint;
    // private rootInstanceRef: Reference<Object>;
    // private sessions: DebuggerSession[];
    // private sessionsUnchanged: Assumption;
    // private sourceBinding: AtomicReference<EventBinding<Object>>;
    readonly suspendAnchor: SuspendAnchor;
    // private assignBinding(location: SourceSection): void;
    dispose(): void;
    // private doBreak(context: EventContext, source: DebuggerNode, breakInSessions: Breakpoint$SessionList, activeOnNoninternalCalls: boolean, frame: MaterializedFrame, onEnter: boolean, result: Object, exception: Throwable, failure: Breakpoint$BreakpointConditionFailure): Object;
    // private doBreak(context: EventContext, source: DebuggerNode, breakInSessions: Breakpoint$SessionList, activeOnNoninternalCalls: boolean, frame: MaterializedFrame, onEnter: boolean, result: Object, exception: Throwable, throwLocation: Node, isCatchNodeComputed: boolean, catchLocation: DebugException$CatchLocation, failure: Breakpoint$BreakpointConditionFailure): Object;
    // private execBindingAdded(newBinding: EventBinding<ExecutionEventNodeFactory>): void;
    getCondition(): string;
    // private getConditionExistsUnchanged(): Assumption;
    // private getConditionUnchanged(): Assumption;
    getHitCount(): number;
    getIgnoreCount(): number;
    getKind(): Breakpoint$Kind;
    getLocationDescription(): string;
    getROWrapper(): Breakpoint;
    getRootInstance(): Object;
    getSessionsUnchanged(): Assumption;
    getSuspendAnchor(): SuspendAnchor;
    // private install(d: Debugger): void;
    install(d: DebuggerSession, failOnError: boolean): boolean;
    installGlobal(d: Debugger): void;
    // private installInstrumentation(instrumenter: Instrumenter): void;
    isDisposed(): boolean;
    isEnabled(): boolean;
    isGlobal(): boolean;
    isModifiable(): boolean;
    isOneShot(): boolean;
    isResolved(): boolean;
    notifyIndirectHit(context: EventContext, source: DebuggerNode, node: DebuggerNode, frame: MaterializedFrame, exception: DebugException): boolean;
    // private resolveBreakpoint(resolvedLocation: SourceSection): void;
    sessionClosed(d: DebuggerSession): void;
    // private sessionsAssumptionInvalidate(): void;
    setCondition(expression: string): void;
    setEnabled(enabled: boolean): void;
    setIgnoreCount(ignoreCount: number): void;
    toString(): string;
    // private uninstall(): void;
    // private uninstallBindings(execOnly: boolean): void;
}