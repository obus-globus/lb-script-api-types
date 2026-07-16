import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSReadFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSReadFrameSlotNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { IterationScopeNode } from '../../../../../../com/oracle/truffle/js/nodes/function/IterationScopeNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
export class IterationScopeNode$FrameIterationScopeNode extends IterationScopeNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramframeDescriptor: FrameDescriptor, paramreads: JSReadFrameSlotNode[], paramwrites: JSWriteFrameSlotNode[], paramblockScopeSlot: number): IterationScopeNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(frameDescriptor: FrameDescriptor, reads: JSReadFrameSlotNode[], writes: JSWriteFrameSlotNode[], blockScopeSlot: number)
    // private blockScopeSlot: number;
    readonly frameDescriptor: FrameDescriptor;
    // private reads: JSReadFrameSlotNode[];
    // private writes: JSWriteFrameSlotNode[];
    // private copySlots(nextFrame: VirtualFrame, frame: VirtualFrame): void;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): VirtualFrame;
    executeCopy(frame: VirtualFrame, prevFrame: VirtualFrame): void;
    exitScope(frame: VirtualFrame, prevFrame: VirtualFrame): void;
    getFrameDescriptor(): FrameDescriptor;
}