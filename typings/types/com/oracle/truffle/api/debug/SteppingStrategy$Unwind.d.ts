import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { SteppingStrategy } from '../../../../../com/oracle/truffle/api/debug/SteppingStrategy.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { SuspendedContext } from '../../../../../com/oracle/truffle/api/debug/SuspendedContext.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { ThreadDeath } from '../../../../../java/lang/ThreadDeath.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SteppingStrategy$Unwind extends SteppingStrategy {
    constructor(depth: number, returnValue: DebugValue)
    // private depth: number;
    // private returnValue: DebugValue;
    // private stackCounter: number;
    // private unwind: ThreadDeath;
    initialize(context: SuspendedContext, suspendAnchor: SuspendAnchor): void;
    isActive(context: EventContext, suspendAnchor: SuspendAnchor): boolean;
    isStopAfterCall(): boolean;
    isUnwind(): boolean;
    notifyCallEntry(): void;
    notifyCallExit(): void;
    notifyOnUnwind(): Object;
    step(steppingSession: DebuggerSession, context: EventContext, suspendAnchor: SuspendAnchor): boolean;
    toString(): string;
}