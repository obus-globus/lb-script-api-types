import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { ExecutionEventListener } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventListener.d.ts'
import type { ProbeNode$EventChainNode } from '../../../../../com/oracle/truffle/api/instrumentation/ProbeNode$EventChainNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ProbeNode$EventFilterChainNode extends ProbeNode$EventChainNode {
    constructor(binding: EventBinding$Source<Object>, listener: ExecutionEventListener)
    // private listener: ExecutionEventListener;
    innerOnDispose(context: EventContext, frame: VirtualFrame): void;
    innerOnEnter(context: EventContext, frame: VirtualFrame): void;
    innerOnInputValue(context: EventContext, frame: VirtualFrame, binding: EventBinding<Object>, inputContext: EventContext, inputIndex: number, inputValue: Object): void;
    innerOnResume(context: EventContext, frame: VirtualFrame): void;
    innerOnReturnExceptional(context: EventContext, frame: VirtualFrame, exception: Throwable): void;
    innerOnReturnValue(context: EventContext, frame: VirtualFrame, result: Object): void;
    innerOnUnwind(context: EventContext, frame: VirtualFrame, info: Object): Object;
    innerOnYield(context: EventContext, frame: VirtualFrame, value: Object): void;
}