import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { FrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/FrameSlotNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class FrameSlotNode$WithDescriptor extends FrameSlotNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(slot: number, identifier: Object)
    // private frameDescriptor: FrameDescriptor;
    ensureObjectKind(frame: Frame): void;
    getFrameDescriptor(frame: Frame): FrameDescriptor;
    isBooleanKind(frame: Frame): boolean;
    isDoubleKind(frame: Frame): boolean;
    isDoubleKind(frame: Frame, currentKind: FrameSlotKind): boolean;
    isIntegerKind(frame: Frame): boolean;
    isIntegerKind(frame: Frame, currentKind: FrameSlotKind): boolean;
    isLongKind(frame: Frame): boolean;
    isLongKind(frame: Frame, currentKind: FrameSlotKind): boolean;
    // private isOrSetKind(frame: Frame, desc: FrameDescriptor, currentKind: FrameSlotKind, targetKind: FrameSlotKind): boolean;
    // private isOrSetKind(frame: Frame, targetKind: FrameSlotKind): boolean;
    // private isOrSetKind(frame: Frame, currentKind: FrameSlotKind, targetKind: FrameSlotKind): boolean;
}