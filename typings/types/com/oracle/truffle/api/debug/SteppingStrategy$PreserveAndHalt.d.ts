import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { SteppingStrategy } from '../../../../../com/oracle/truffle/api/debug/SteppingStrategy.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
export class SteppingStrategy$PreserveAndHalt extends SteppingStrategy {
    private constructor(strategy: SteppingStrategy)
    // private current: SteppingStrategy;
    // private halt: SteppingStrategy;
    consume(): void;
    getNestedStrategies(): SteppingStrategy[];
    isActive(context: EventContext, suspendAnchor: SuspendAnchor): boolean;
    isAlwaysHalt(): boolean;
    isComposable(): boolean;
    isConsumed(): boolean;
    isDone(): boolean;
    isKill(): boolean;
    isSingleStepCompleted(): boolean;
    isStopAfterCall(): boolean;
    notifyCallEntry(): void;
    notifyCallExit(): void;
    notifyNodeEntry(context: EventContext): void;
    notifyNodeExit(context: EventContext): void;
    setYieldBreak(frame: Frame, section: SourceSection): void;
    setYieldResume(context: EventContext, frame: Frame): void;
    step(steppingSession: DebuggerSession, context: EventContext, suspendAnchor: SuspendAnchor): boolean;
    toString(): string;
}