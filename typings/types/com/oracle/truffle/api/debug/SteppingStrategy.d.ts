import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { SuspendedContext } from '../../../../../com/oracle/truffle/api/debug/SuspendedContext.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class SteppingStrategy extends Object {
    constructor()
    // private consumed: boolean;
    // private next: SteppingStrategy;
    add(nextStrategy: SteppingStrategy): void;
    consume(): void;
    getNestedStrategies(): SteppingStrategy[];
    initialize(context: SuspendedContext, suspendAnchor: SuspendAnchor): void;
    isActive(context: EventContext, suspendAnchor: SuspendAnchor): boolean;
    isActiveOnStepTo(context: EventContext, suspendAnchor: SuspendAnchor): boolean;
    isAlwaysHalt(): boolean;
    isCollectingInputValues(): boolean;
    isComposable(): boolean;
    isConsumed(): boolean;
    isContinue(): boolean;
    isDone(): boolean;
    isKill(): boolean;
    isSingleStep(): boolean;
    isSingleStepCompleted(): boolean;
    isStopAfterCall(): boolean;
    isUnwind(): boolean;
    notifyCallEntry(): void;
    notifyCallExit(): void;
    notifyNodeEntry(context: EventContext): void;
    notifyNodeExit(context: EventContext): void;
    notifyOnUnwind(): Object;
    setYieldBreak(frame: Frame, section: SourceSection): void;
    setYieldResume(context: EventContext, frame: Frame): void;
    step(steppingSession: DebuggerSession, context: EventContext, suspendAnchor: SuspendAnchor): boolean;
}