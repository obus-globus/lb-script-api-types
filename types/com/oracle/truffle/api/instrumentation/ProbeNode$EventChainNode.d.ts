import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { ProbeNode } from '../../../../../com/oracle/truffle/api/instrumentation/ProbeNode.d.ts'
import type { UnwindException } from '../../../../../com/oracle/truffle/api/instrumentation/UnwindException.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class ProbeNode$EventChainNode extends Node {
    constructor(binding: EventBinding$Source<Object>)
    // private binding: EventBinding$Source<Object>;
    // private next: ProbeNode$EventChainNode;
    // private previous: ProbeNode$EventChainNode;
    // private seen: number;
    // private containsBinding(unwind: UnwindException): boolean;
    // private containsBindingBoundary(unwind: UnwindException): boolean;
    find(b: EventBinding<Object>): ProbeNode$EventChainNode;
    findProbe(): ProbeNode;
    getBinding(): EventBinding$Source<Object>;
    // private getInfo(unwind: UnwindException): Object;
    // private getInfoBoundary(unwind: UnwindException): Object;
    // private getLast(): ProbeNode$EventChainNode;
    getNext(): ProbeNode$EventChainNode;
    // private handleError(eventName: string, previousError: RuntimeException, newError: Throwable): RuntimeException;
    innerOnDispose(context: EventContext, frame: VirtualFrame): void;
    innerOnEnter(context: EventContext, frame: VirtualFrame): void;
    innerOnInputValue(context: EventContext, frame: VirtualFrame, targetBinding: EventBinding<Object>, inputContext: EventContext, inputIndex: number, inputValue: Object): void;
    innerOnResume(context: EventContext, frame: VirtualFrame): void;
    innerOnReturnExceptional(context: EventContext, frame: VirtualFrame, exception: Throwable): void;
    innerOnReturnValue(context: EventContext, frame: VirtualFrame, result: Object): void;
    innerOnUnwind(context: EventContext, frame: VirtualFrame, info: Object): Object;
    innerOnYield(context: EventContext, frame: VirtualFrame, value: Object): void;
    // private mergeUnwind(unwind: UnwindException, other: UnwindException): UnwindException;
    profileBranch(flag: number): void;
    // private reset(unwind: UnwindException): void;
    setNext(next: ProbeNode$EventChainNode): void;
}