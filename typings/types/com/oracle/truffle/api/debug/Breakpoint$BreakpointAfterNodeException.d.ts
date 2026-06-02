import type { Breakpoint } from '../../../../../com/oracle/truffle/api/debug/Breakpoint.d.ts'
import type { Breakpoint$AbstractBreakpointNode } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$AbstractBreakpointNode.d.ts'
import type { Breakpoint$BreakpointConditionFailure } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$BreakpointConditionFailure.d.ts'
import type { Breakpoint$SessionList } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$SessionList.d.ts'
import type { BreakpointExceptionFilter$Match } from '../../../../../com/oracle/truffle/api/debug/BreakpointExceptionFilter$Match.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class Breakpoint$BreakpointAfterNodeException extends Breakpoint$AbstractBreakpointNode {
    constructor(breakpoint: Breakpoint, context: EventContext)
    doBreak(frame: MaterializedFrame, debuggerSessions: Breakpoint$SessionList, conditionError: Breakpoint$BreakpointConditionFailure, exception: Throwable, matched: BreakpointExceptionFilter$Match): void;
    getSuspendAnchors(): SuspendAnchor[];
    isActiveAt(anchor: SuspendAnchor): boolean;
    onEnter(frame: VirtualFrame): void;
    onReturnExceptional(frame: VirtualFrame, exception: Throwable): void;
    onReturnValue(frame: VirtualFrame, result: Object): void;
}