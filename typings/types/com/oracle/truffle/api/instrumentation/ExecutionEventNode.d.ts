import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { ProbeNode$EventProviderWithInputChainNode } from '../../../../../com/oracle/truffle/api/instrumentation/ProbeNode$EventProviderWithInputChainNode.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class ExecutionEventNode extends Node {
    constructor()
    // private getChainNode(): ProbeNode$EventProviderWithInputChainNode;
    getInputContext(index: number): EventContext;
    getInputCount(): number;
    getSavedInputValues(frame: VirtualFrame): Object[];
    onDispose(frame: VirtualFrame): void;
    onEnter(frame: VirtualFrame): void;
    onInputValue(frame: VirtualFrame, inputContext: EventContext, inputIndex: number, inputValue: Object): void;
    onResume(frame: VirtualFrame): void;
    onReturnExceptional(frame: VirtualFrame, exception: Throwable): void;
    onReturnValue(frame: VirtualFrame, result: Object): void;
    onUnwind(frame: VirtualFrame, info: Object): Object;
    onYield(frame: VirtualFrame, value: Object): void;
    saveInputValue(frame: VirtualFrame, inputIndex: number, inputValue: Object): void;
}