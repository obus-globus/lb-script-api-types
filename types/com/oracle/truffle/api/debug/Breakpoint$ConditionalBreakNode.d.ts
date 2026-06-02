import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Breakpoint } from '../../../../../com/oracle/truffle/api/debug/Breakpoint.d.ts'
import type { Breakpoint$SessionList } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$SessionList.d.ts'
import type { SetThreadSuspensionEnabledNode } from '../../../../../com/oracle/truffle/api/debug/SetThreadSuspensionEnabledNode.d.ts'
import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { DirectCallNode } from '../../../../../com/oracle/truffle/api/nodes/DirectCallNode.d.ts'
import type { ExecutableNode } from '../../../../../com/oracle/truffle/api/nodes/ExecutableNode.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
export class Breakpoint$ConditionalBreakNode extends Node {
    constructor(context: EventContext, breakpoint: Breakpoint)
    // private breakpoint: Breakpoint;
    // private conditionCallNode: DirectCallNode;
    // private conditionSnippet: ExecutableNode;
    // private conditionUnchanged: Assumption;
    // private context: EventContext;
    // private interopLibrary: InteropLibrary;
    // private suspensionEnabledNode: SetThreadSuspensionEnabledNode;
    executeBreakCondition(frame: VirtualFrame, sessions: Breakpoint$SessionList): boolean;
    // private initializeConditional(frame: MaterializedFrame): void;
}