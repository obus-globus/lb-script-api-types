import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { SteppingStrategy } from '../../../../../com/oracle/truffle/api/debug/SteppingStrategy.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { SuspendedContext } from '../../../../../com/oracle/truffle/api/debug/SuspendedContext.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
export class SteppingStrategy$ComposedStrategy extends SteppingStrategy {
    private constructor(strategy1: SteppingStrategy, strategy2: SteppingStrategy)
    // private current: SteppingStrategy;
    // private first: SteppingStrategy;
    // private last: SteppingStrategy;
    add(nextStrategy: SteppingStrategy): void;
    consume(): void;
    initialize(contex: SuspendedContext, suspendAnchor: SuspendAnchor): void;
    isActive(context: EventContext, suspendAnchor: SuspendAnchor): boolean;
    isComposable(): boolean;
    isConsumed(): boolean;
    isDone(): boolean;
    isKill(): boolean;
    isSingleStep(): boolean;
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