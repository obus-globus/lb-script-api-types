import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSReadCurrentFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSReadCurrentFrameSlotNode.d.ts'
import type { JSReadFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSReadFrameSlotNode.d.ts'
import type { ScopeFrameNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ScopeFrameNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSReadCurrentFrameSlotNodeGen extends JSReadCurrentFrameSlotNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramslot: number, paramidentifier: Object, paramhasTemporalDeadZone: boolean): JSReadCurrentFrameSlotNode;
    static create(paramdesc: FrameDescriptor, paramslotIndex: number): JSReadFrameSlotNode;
    static create(paramslot: JSFrameSlot): JSReadFrameSlotNode;
    static create(paramslot: JSFrameSlot, paramhasTemporalDeadZone: boolean): JSReadFrameSlotNode;
    static create(paramslot: JSFrameSlot, paramlevelFrameNode: ScopeFrameNode, paramhasTemporalDeadZone: boolean): JSReadFrameSlotNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(slot: number, identifier: Object, hasTemporalDeadZone: boolean)
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(frameValue: VirtualFrame): Object;
    executeBoolean(frameValue: VirtualFrame): boolean;
    executeDouble(frameValue: VirtualFrame): number;
    executeInt(frameValue: VirtualFrame): number;
    executeVoid(frameValue: VirtualFrame): void;
}