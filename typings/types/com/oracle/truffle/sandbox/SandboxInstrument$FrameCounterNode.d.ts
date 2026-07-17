import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventContext } from '../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { SandboxInstrument } from '../../../../com/oracle/truffle/sandbox/SandboxInstrument.d.ts'
import type { SandboxInstrument$SandboxContextNode } from '../../../../com/oracle/truffle/sandbox/SandboxInstrument$SandboxContextNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class SandboxInstrument$FrameCounterNode extends SandboxInstrument$SandboxContextNode {
    constructor(context: EventContext, limits: SandboxInstrument)
    onEnter(frame: VirtualFrame): void;
    onReturnExceptional(frame: VirtualFrame, exception: Throwable): void;
    onReturnValue(frame: VirtualFrame, result: Object): void;
}