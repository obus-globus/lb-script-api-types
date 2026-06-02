import type { Breakpoint } from '../../../../../com/oracle/truffle/api/debug/Breakpoint.d.ts'
import type { Breakpoint$AbstractBreakpointNode } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$AbstractBreakpointNode.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class Breakpoint$BreakpointAfterNode extends Breakpoint$AbstractBreakpointNode {
    constructor(breakpoint: Breakpoint, context: EventContext)
    getSuspendAnchors(): SuspendAnchor[];
    isActiveAt(anchor: SuspendAnchor): boolean;
    onReturnExceptional(frame: VirtualFrame, exception: Throwable): void;
    onReturnValue(frame: VirtualFrame, result: Object): void;
}