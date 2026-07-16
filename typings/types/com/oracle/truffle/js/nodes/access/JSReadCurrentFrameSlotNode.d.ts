import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSReadFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSReadFrameSlotNode.d.ts'
import type { ScopeFrameNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ScopeFrameNode.d.ts'
import type { SafeInteger } from '../../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSReadCurrentFrameSlotNode extends JSReadFrameSlotNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramdesc: FrameDescriptor, paramslotIndex: number): JSReadFrameSlotNode;
    static create(paramslot: JSFrameSlot): JSReadFrameSlotNode;
    static create(paramslot: JSFrameSlot, paramhasTemporalDeadZone: boolean): JSReadFrameSlotNode;
    static create(paramslot: JSFrameSlot, paramlevelFrameNode: ScopeFrameNode, paramhasTemporalDeadZone: boolean): JSReadFrameSlotNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(slot: number, identifier: Object, hasTemporalDeadZone: boolean)
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doBoolean(frame: VirtualFrame): boolean;
    doDead(frame: VirtualFrame): Object;
    doDouble(frame: VirtualFrame): number;
    doInt(frame: VirtualFrame): number;
    doObject(frame: VirtualFrame): Object;
    doSafeInteger(frame: VirtualFrame): SafeInteger;
    getLevelFrameNode(): ScopeFrameNode;
}