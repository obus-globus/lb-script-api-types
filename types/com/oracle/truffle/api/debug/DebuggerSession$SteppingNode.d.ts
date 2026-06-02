import type { DebuggerNode } from '../../../../../com/oracle/truffle/api/debug/DebuggerNode.d.ts'
import type { DebuggerNode$InputValuesProvider } from '../../../../../com/oracle/truffle/api/debug/DebuggerNode$InputValuesProvider.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class DebuggerSession$SteppingNode extends DebuggerNode implements DebuggerNode$InputValuesProvider {
    constructor(null_: DebuggerSession$SteppingNode, context: EventContext)
    doStepAfter(frame: MaterializedFrame, result: Object): Object;
    // private doStepBefore(frame: MaterializedFrame): void;
    // private doYield(frame: MaterializedFrame): void;
    // private doYieldResume(frame: MaterializedFrame): void;
    getDebugInputValues(frame: MaterializedFrame): Object[];
    getSuspendAnchors(): SuspendAnchor[];
    isActiveAt(anchor: SuspendAnchor): boolean;
    isStepNode(): boolean;
    onEnter(frame: VirtualFrame): void;
    onInputValue(frame: VirtualFrame, inputContext: EventContext, inputIndex: number, inputValue: Object): void;
    onResume(frame: VirtualFrame): void;
    onReturnExceptional(frame: VirtualFrame, exception: Throwable): void;
    onReturnValue(frame: VirtualFrame, result: Object): void;
    onYield(frame: VirtualFrame, value: Object): void;
}