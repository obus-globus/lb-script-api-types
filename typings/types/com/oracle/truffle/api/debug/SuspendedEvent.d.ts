import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Breakpoint } from '../../../../../com/oracle/truffle/api/debug/Breakpoint.d.ts'
import type { DebugException } from '../../../../../com/oracle/truffle/api/debug/DebugException.d.ts'
import type { DebugStackFrame } from '../../../../../com/oracle/truffle/api/debug/DebugStackFrame.d.ts'
import type { DebugStackTraceElement } from '../../../../../com/oracle/truffle/api/debug/DebugStackTraceElement.d.ts'
import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { DebuggerNode$InputValuesProvider } from '../../../../../com/oracle/truffle/api/debug/DebuggerNode$InputValuesProvider.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { InsertableNode } from '../../../../../com/oracle/truffle/api/debug/InsertableNode.d.ts'
import type { SourceElement } from '../../../../../com/oracle/truffle/api/debug/SourceElement.d.ts'
import type { StepConfig } from '../../../../../com/oracle/truffle/api/debug/StepConfig.d.ts'
import type { SteppingStrategy } from '../../../../../com/oracle/truffle/api/debug/SteppingStrategy.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { SuspendedContext } from '../../../../../com/oracle/truffle/api/debug/SuspendedContext.d.ts'
import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class SuspendedEvent extends Object {
    constructor(session: DebuggerSession, thread: Thread, context: SuspendedContext, frame: MaterializedFrame, suspendAnchor: SuspendAnchor, insertableNode: InsertableNode, inputValuesProvider: DebuggerNode$InputValuesProvider, returnValue: Object, exception: DebugException, breakpoints: Breakpoint[], conditionFailures: JavaMap<Breakpoint, Throwable>, singleStepCompleted: boolean, isUnwind: boolean)
    readonly breakpoints: Breakpoint[];
    // private cachedAsyncFrames: DebugStackTraceElement[][];
    // private cachedFrames: DebugStackFrame[];
    // private conditionFailures: JavaMap<Breakpoint, Throwable>;
    // private context: SuspendedContext;
    // private disposed: boolean;
    readonly exception: DebugException;
    // private inputValuesProvider: DebuggerNode$InputValuesProvider;
    // private insertableNode: InsertableNode;
    // private isUnwind: boolean;
    // private materializedFrame: MaterializedFrame;
    // private nextStrategy: SteppingStrategy;
    readonly returnValue: Object;
    readonly session: DebuggerSession;
    // private singleStepCompleted: boolean;
    readonly sourceSection: SourceSection;
    readonly suspendAnchor: SuspendAnchor;
    // private thread: Thread;
    clearLeakingReferences(): void;
    getAsynchronousStacks(): DebugStackTraceElement[][];
    getBreakpointConditionException(breakpoint: Breakpoint): Throwable;
    getBreakpoints(): Breakpoint[];
    getContext(): SuspendedContext;
    getException(): DebugException;
    getInputValues(): DebugValue[];
    getInsertableNode(): InsertableNode;
    getMaterializedFrame(): MaterializedFrame;
    getNextStrategy(): SteppingStrategy;
    getReturnObject(): Object;
    getReturnValue(): DebugValue;
    getSession(): DebuggerSession;
    getSourceSection(): SourceSection;
    getStackFrames(): DebugStackFrame[];
    getSuspendAnchor(): SuspendAnchor;
    getThread(): Thread;
    getTopStackFrame(): DebugStackFrame;
    hasSourceElement(sourceElement: SourceElement): boolean;
    isBreakpointHit(): boolean;
    isDisposed(): boolean;
    isLanguageContextInitialized(): boolean;
    isStep(): boolean;
    isUnwind(): boolean;
    prepareContinue(): void;
    prepareKill(): void;
    prepareStepInto(stepConfig: StepConfig): SuspendedEvent;
    prepareStepInto(stepCount: number): SuspendedEvent;
    prepareStepOut(stepConfig: StepConfig): SuspendedEvent;
    prepareStepOut(stepCount: number): SuspendedEvent;
    prepareStepOver(stepConfig: StepConfig): SuspendedEvent;
    prepareStepOver(stepCount: number): SuspendedEvent;
    prepareUnwindFrame(frame: DebugStackFrame): void;
    prepareUnwindFrame(frame: DebugStackFrame, immediateReturnValue: DebugValue): void;
    // private setNextStrategy(nextStrategy: SteppingStrategy): void;
    setReturnValue(newValue: DebugValue): void;
    toString(): string;
    // private verifyConfig(stepConfig: StepConfig): void;
    verifyValidState(allowDifferentThread: boolean): void;
}