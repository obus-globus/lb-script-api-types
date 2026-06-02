import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { StepConfig } from '../../../../../com/oracle/truffle/api/debug/StepConfig.d.ts'
import type { SteppingStrategy } from '../../../../../com/oracle/truffle/api/debug/SteppingStrategy.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { SuspendedContext } from '../../../../../com/oracle/truffle/api/debug/SuspendedContext.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
export class SteppingStrategy$StepInto extends SteppingStrategy {
    constructor(session: DebuggerSession, stepConfig: StepConfig)
    // private session: DebuggerSession;
    // private stackCounter: number;
    // private stepConfig: StepConfig;
    // private unfinishedStepCount: number;
    // private yieldFrame: Frame;
    initialize(context: SuspendedContext, suspendAnchor: SuspendAnchor): void;
    isActive(context: EventContext, suspendAnchor: SuspendAnchor): boolean;
    isCollectingInputValues(): boolean;
    isSingleStep(): boolean;
    isSingleStepCompleted(): boolean;
    isStopAfterCall(): boolean;
    notifyCallEntry(): void;
    notifyCallExit(): void;
    setYieldBreak(frame: Frame, section: SourceSection): void;
    setYieldResume(context: EventContext, frame: Frame): void;
    step(steppingSession: DebuggerSession, context: EventContext, suspendAnchor: SuspendAnchor): boolean;
    toString(): string;
}