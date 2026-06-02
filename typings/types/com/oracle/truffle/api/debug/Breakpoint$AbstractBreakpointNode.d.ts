import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Breakpoint } from '../../../../../com/oracle/truffle/api/debug/Breakpoint.d.ts'
import type { Breakpoint$ConditionalBreakNode } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$ConditionalBreakNode.d.ts'
import type { Breakpoint$SessionList } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$SessionList.d.ts'
import type { DebuggerNode } from '../../../../../com/oracle/truffle/api/debug/DebuggerNode.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { NodeLibrary } from '../../../../../com/oracle/truffle/api/interop/NodeLibrary.d.ts'
import type { BranchProfile } from '../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class Breakpoint$AbstractBreakpointNode extends DebuggerNode {
    constructor(breakpoint: Breakpoint, context: EventContext)
    // private activeOnNoninternalCalls: boolean;
    // private breakBranch: BranchProfile;
    // private breakCondition: Breakpoint$ConditionalBreakNode;
    // private breakpoint: Breakpoint;
    // private conditionExistsUnchanged: Assumption;
    // private contextNodeLibrary: NodeLibrary;
    // private sessionList: Breakpoint$SessionList;
    // private sessionsUnchanged: Assumption;
    computeUniqueActiveSessions(): Breakpoint$SessionList;
    getBreakpoint(): Breakpoint;
    getSessions(): Breakpoint$SessionList;
    // private initializeSessions(): Breakpoint$SessionList;
    isStepNode(): boolean;
    onNode(frame: VirtualFrame, onEnter: boolean, result: Object, exception: Throwable): Object;
    testCondition(frame: VirtualFrame): boolean;
    // private testRootInstance(rootInstance: Object, frame: VirtualFrame): boolean;
}