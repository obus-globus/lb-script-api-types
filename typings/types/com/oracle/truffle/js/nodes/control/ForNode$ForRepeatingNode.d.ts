import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { AbstractRepeatingNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AbstractRepeatingNode.d.ts'
import type { ResumableNode$WithObjectState } from '../../../../../../com/oracle/truffle/js/nodes/control/ResumableNode$WithObjectState.d.ts'
import type { IterationScopeNode } from '../../../../../../com/oracle/truffle/js/nodes/function/IterationScopeNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ForNode$ForRepeatingNode extends AbstractRepeatingNode implements ResumableNode$WithObjectState {
    static BREAK_LOOP_STATUS: Object;
    static CONTINUE_LOOP_STATUS: Object;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(condition: JavaScriptNode, body: JavaScriptNode, modify: JavaScriptNode, copy: IterationScopeNode, isFirstNode: JavaScriptNode, setNotFirstNode: JavaScriptNode)
    // private copy: IterationScopeNode;
    // private isFirstNode: JavaScriptNode;
    // private modify: JavaScriptNode;
    // private setNotFirstNode: JavaScriptNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    executeRepeating(frame: VirtualFrame): boolean;
    getState(frame: VirtualFrame, stateSlot: number): Object;
    getStateAndReset(frame: VirtualFrame, stateSlot: number): Object;
    getStateSlotKind(): FrameSlotKind;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): AbstractRepeatingNode;
    // private notFirstIteration(frame: VirtualFrame): boolean;
    resume(frame: VirtualFrame, stateSlot: number): Object;
    setState(frame: VirtualFrame, stateSlot: number, state: Object): void;
}