import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ResumableNode } from '../../../../../../com/oracle/truffle/js/nodes/control/ResumableNode.d.ts'
import type { BlockScopeNode } from '../../../../../../com/oracle/truffle/js/nodes/function/BlockScopeNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BlockScopeNode$VirtualBlockScopeNode extends BlockScopeNode implements ResumableNode {
    static BREAK_LOOP_STATUS: Object;
    static CONTINUE_LOOP_STATUS: Object;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static create(paramblock: JavaScriptNode, paramblockScopeSlot: JSFrameSlot, paramframeDescriptor: FrameDescriptor, paramparentSlot: JSFrameSlot, paramfunctionBlock: boolean, paramcaptureFunctionFrame: boolean, paramgeneratorFunctionBlock: boolean, paramhasParentBlock: boolean, paramstart: number, paramend: number): BlockScopeNode;
    static createResumableNode(paramnode: ResumableNode, paramstateSlot: number): JavaScriptNode;
    static createVirtual(paramblock: JavaScriptNode, paramframeStart: number, paramframeEnd: number): BlockScopeNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(block: JavaScriptNode, start: number, end: number)
    // private end: number;
    // private start: number;
    appendScopeFrame(frame: VirtualFrame): VirtualFrame;
    asResumableNode(stateSlot: number): JavaScriptNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    exitScope(frame: VirtualFrame): void;
    exitScope(frame: VirtualFrame, yield_: boolean): void;
    getBlockScope(frame: VirtualFrame): Object;
    getFrameEnd(): number;
    getFrameStart(): number;
    getStateSlotKind(): FrameSlotKind;
    isFunctionBlock(): boolean;
    resetState(frame: VirtualFrame, stateSlot: number): void;
    resume(frame: VirtualFrame, stateSlot: number): Object;
    setBlockScope(frame: VirtualFrame, state: Object): void;
}