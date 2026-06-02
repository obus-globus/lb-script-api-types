import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { ExecutionEventNode } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNode.d.ts'
import type { ProbeNode$EventProviderChainNode } from '../../../../../com/oracle/truffle/api/instrumentation/ProbeNode$EventProviderChainNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ProbeNode$EventProviderWithInputChainNode extends ProbeNode$EventProviderChainNode {
    constructor(binding: EventBinding$Source<Object>, eventNode: ExecutionEventNode, inputBaseIndex: number, inputCount: number)
    // private inputBaseIndex: number;
    // private inputContexts: EventContext[];
    // private inputCount: number;
    // private inputSlots: number[];
    // private sourceFrameDescriptor: FrameDescriptor;
    // private clearSlots(frame: VirtualFrame): void;
    getInputContext(index: number): EventContext;
    getInputCount(): number;
    getSavedInputValue(frame: VirtualFrame, inputIndex: number): Object;
    getSavedInputValues(frame: VirtualFrame): Object[];
    // private initializeSlots(frame: VirtualFrame): void;
    innerOnDispose(context: EventContext, frame: VirtualFrame): void;
    innerOnReturnExceptional(context: EventContext, frame: VirtualFrame, exception: Throwable): void;
    innerOnReturnValue(context: EventContext, frame: VirtualFrame, result: Object): void;
    saveInputValue(frame: VirtualFrame, inputIndex: number, value: Object): void;
    // private verifyIndex(inputIndex: number): void;
}