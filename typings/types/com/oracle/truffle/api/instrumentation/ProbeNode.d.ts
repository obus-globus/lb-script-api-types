import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { ExecutionEventNode } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNode.d.ts'
import type { InstrumentableNode } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { InstrumentableNode$WrapperNode } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode$WrapperNode.d.ts'
import type { InstrumentationHandler } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler.d.ts'
import type { ProbeNode$EventChainNode } from '../../../../../com/oracle/truffle/api/instrumentation/ProbeNode$EventChainNode.d.ts'
import type { ProbeNode$RetiredNodeReference } from '../../../../../com/oracle/truffle/api/instrumentation/ProbeNode$RetiredNodeReference.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class ProbeNode extends Node {
    static UNWIND_ACTION_REENTER: Object;
    constructor(node: InstrumentableNode, sourceSection: SourceSection)
    constructor(handler: InstrumentationHandler, sourceSection: SourceSection)
    // private chain: ProbeNode$EventChainNode;
    // private context: EventContext;
    // private eagerProbe: boolean;
    // private handler: InstrumentationHandler;
    // private retiredNodeReference: ProbeNode$RetiredNodeReference;
    // private seen: number;
    // private version: Assumption;
    clearRetiredNodeReference(): void;
    copy(): Node;
    createEventChainCallback(frame: VirtualFrame, binding: EventBinding$Source<Object>, rootNode: RootNode, providedTags: Class<Object>[], instrumentedNode: Node, instrumentedNodeSourceSection: SourceSection): ProbeNode$EventChainNode;
    // private createEventNode(binding: EventBinding$Source<Object>, element: Object): ExecutionEventNode;
    createParentEventChainCallback(frame: VirtualFrame, binding: EventBinding$Source<Object>, rootNode: RootNode, providedTags: Class<Object>[]): ProbeNode$EventChainNode;
    findInstrumentableNode(): InstrumentableNode;
    // private findParentChain(frame: VirtualFrame, binding: EventBinding<Object>): ProbeNode$EventChainNode;
    findParentProbe(): ProbeNode;
    findWrapper(): InstrumentableNode$WrapperNode;
    getContext(): EventContext;
    getRetiredNodeReference(): ProbeNode$RetiredNodeReference;
    // private hasNewTags(retiredNode: Node, materializeTags: Class<Tag>[]): boolean;
    invalidate(): void;
    // private isNullOrInteropValue(result: Object): boolean;
    lazyUpdate(frame: VirtualFrame): ProbeNode$EventChainNode;
    // private lazyUpdatedImpl(frame: VirtualFrame): ProbeNode$EventChainNode;
    lookupExecutionEventNode(binding: EventBinding<Object>): ExecutionEventNode;
    lookupExecutionEventNodes(bindings: E[]): Iterator<ExecutionEventNode>;
    onEnter(frame: VirtualFrame): void;
    onInputValue(frame: VirtualFrame, targetBinding: EventBinding<Object>, inputContext: EventContext, inputIndex: number, inputValue: Object): void;
    onResume(frame: VirtualFrame): void;
    onReturnExceptionalOrUnwind(frame: VirtualFrame, exception: Throwable, isReturnCalled: boolean): Object;
    onReturnValue(frame: VirtualFrame, result: Object): void;
    onYield(frame: VirtualFrame, result: Object): void;
    // private profileBranch(flag: number): void;
    setRetiredNode(retiredNode: Node, materializeTags: Class<Tag>[]): void;
}