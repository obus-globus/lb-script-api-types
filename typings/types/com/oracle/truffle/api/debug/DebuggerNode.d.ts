import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Breakpoint } from '../../../../../com/oracle/truffle/api/debug/Breakpoint.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { InsertableNode } from '../../../../../com/oracle/truffle/api/debug/InsertableNode.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { ExecutionEventNode } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNode.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../org/graalvm/collections/EconomicMap.d.ts'
export abstract class DebuggerNode extends ExecutionEventNode implements InsertableNode {
    constructor(context: EventContext)
    // private cachedSessionDuplicate: DebuggerSession;
    // private cachedThreadId: number;
    // private context: EventContext;
    // private duplicateInThreads: EconomicMap<Thread, Object>;
    // private noDuplicateAssumption: Assumption;
    // private singleThreadSession: boolean;
    consumeIsDuplicate(session: DebuggerSession): boolean;
    getBreakpoint(): Breakpoint;
    getContext(): EventContext;
    getSuspendAnchors(): SuspendAnchor[];
    isActiveAt(anchor: SuspendAnchor): boolean;
    // private isDuplicateSlowPath(session: DebuggerSession): boolean;
    isStepNode(): boolean;
    markAsDuplicate(session: DebuggerSession): void;
    // private markAsDuplicateSlowPath(session: DebuggerSession): void;
    onUnwind(frame: VirtualFrame, info: Object): Object;
    setParentOf(child: Node): void;
}