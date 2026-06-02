import type { DebuggerSession$SteppingNode } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession$SteppingNode.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class DebuggerSession$RootSteppingDepthNode extends DebuggerSession$SteppingNode {
    constructor(null_: DebuggerSession$RootSteppingDepthNode, context: EventContext)
    // private doEnter(): void;
    // private doReturn(): void;
    // private doReturn(frame: MaterializedFrame, result: Object): void;
    // private doUnwind(frame: MaterializedFrame): Object;
    // private doYieldResume(frame: MaterializedFrame): void;
    getSuspendAnchors(): SuspendAnchor[];
    isActiveAt(anchor: SuspendAnchor): boolean;
    isStepNode(): boolean;
    onEnter(frame: VirtualFrame): void;
    onResume(frame: VirtualFrame): void;
    onReturnExceptional(frame: VirtualFrame, exception: Throwable): void;
    onReturnValue(frame: VirtualFrame, result: Object): void;
    onUnwind(frame: VirtualFrame, info: Object): Object;
    onYield(frame: VirtualFrame, value: Object): void;
    setParentOf(child: Node): void;
}