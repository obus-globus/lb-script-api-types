import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSWriteCurrentFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteCurrentFrameSlotNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { ScopeFrameNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ScopeFrameNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSWriteCurrentFrameSlotNodeGen extends JSWriteCurrentFrameSlotNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static create(paramslot: number, paramidentifier: Object, paramrhsNode: JavaScriptNode): JSWriteCurrentFrameSlotNode;
    static create(paramframeSlot: JSFrameSlot, paramrhs: JavaScriptNode, paramhasTemporalDeadZone: boolean): JSWriteFrameSlotNode;
    static create(paramframeSlot: JSFrameSlot, paramscopeFrameNode: ScopeFrameNode, paramrhs: JavaScriptNode, paramhasTemporalDeadZone: boolean): JSWriteFrameSlotNode;
    static create(paramslotIndex: number, paramidentifier: Object, paramscopeFrameNode: ScopeFrameNode, paramrhs: JavaScriptNode, paramhasTemporalDeadZone: boolean): JSWriteFrameSlotNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(slot: number, identifier: Object, rhsNode: JavaScriptNode)
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(frameValue: VirtualFrame, rhsNodeValue: Object): Object;
    executeBoolean(frameValue: VirtualFrame): boolean;
    executeDouble(frameValue: VirtualFrame): number;
    executeEvaluated(frameValue: VirtualFrame, rhsNodeValue: Object): void;
    executeInt(frameValue: VirtualFrame): number;
    executeVoid(frameValue: VirtualFrame): void;
    // private execute_boolean0(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_double2(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_generic3(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int1(state_0__: number, frameValue: VirtualFrame): Object;
}