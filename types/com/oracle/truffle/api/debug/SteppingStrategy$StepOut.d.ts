import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { StepConfig } from '../../../../../com/oracle/truffle/api/debug/StepConfig.d.ts'
import type { SteppingStrategy } from '../../../../../com/oracle/truffle/api/debug/SteppingStrategy.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { SuspendedContext } from '../../../../../com/oracle/truffle/api/debug/SuspendedContext.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
export class SteppingStrategy$StepOut extends SteppingStrategy {
    constructor(session: DebuggerSession, stepConfig: StepConfig)
    // private activeExpression: boolean;
    // private activeFrame: boolean;
    // private exprCounter: number;
    // private exprStepping: boolean;
    // private session: DebuggerSession;
    // private stackCounter: number;
    // private stepConfig: StepConfig;
    // private unfinishedStepCount: number;
    initialize(context: SuspendedContext, suspendAnchor: SuspendAnchor): void;
    isActive(context: EventContext, suspendAnchor: SuspendAnchor): boolean;
    isCollectingInputValues(): boolean;
    isSingleStep(): boolean;
    isSingleStepCompleted(): boolean;
    isStopAfterCall(): boolean;
    notifyCallEntry(): void;
    notifyCallExit(): void;
    notifyNodeEntry(context: EventContext): void;
    notifyNodeExit(context: EventContext): void;
    step(steppingSession: DebuggerSession, context: EventContext, suspendAnchor: SuspendAnchor): boolean;
    toString(): string;
}