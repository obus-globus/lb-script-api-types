import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { SteppingStrategy } from '../../../../../com/oracle/truffle/api/debug/SteppingStrategy.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
export class SteppingStrategy$AlwaysHalt extends SteppingStrategy {
    private constructor()
    isActive(context: EventContext, suspendAnchor: SuspendAnchor): boolean;
    isAlwaysHalt(): boolean;
    step(steppingSession: DebuggerSession, context: EventContext, suspendAnchor: SuspendAnchor): boolean;
    toString(): string;
}