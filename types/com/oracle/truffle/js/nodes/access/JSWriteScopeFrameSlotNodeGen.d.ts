import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { JSWriteScopeFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteScopeFrameSlotNode.d.ts'
import type { ScopeFrameNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ScopeFrameNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSWriteScopeFrameSlotNodeGen extends JSWriteScopeFrameSlotNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramframeSlot: JSFrameSlot, paramrhs: JavaScriptNode, paramhasTemporalDeadZone: boolean): JSWriteFrameSlotNode;
    static create(paramframeSlot: JSFrameSlot, paramscopeFrameNode: ScopeFrameNode, paramrhs: JavaScriptNode, paramhasTemporalDeadZone: boolean): JSWriteFrameSlotNode;
    static create(paramslotIndex: number, paramidentifier: Object, paramscopeFrameNode: ScopeFrameNode, paramrhs: JavaScriptNode, paramhasTemporalDeadZone: boolean): JSWriteFrameSlotNode;
    static create(paramslot: number, paramidentifier: Object, paramscopeFrameNode: ScopeFrameNode, paramrhsNode: JavaScriptNode): JSWriteScopeFrameSlotNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(slot: number, identifier: Object, scopeFrameNode: ScopeFrameNode, rhsNode: JavaScriptNode)
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(scopeFrameNodeValue: Frame, rhsNodeValue: Object): Object;
    executeBoolean(frameValue: VirtualFrame): boolean;
    executeDouble(frameValue: VirtualFrame): number;
    executeEvaluated(frameValue: VirtualFrame, scopeFrameNodeValue: Frame, rhsNodeValue: Object): void;
    executeInt(frameValue: VirtualFrame): number;
    executeVoid(frameValue: VirtualFrame): void;
    // private execute_boolean0(state_0__: number, frameValue: VirtualFrame, scopeFrameNodeValue_: Frame): Object;
    // private execute_double2(state_0__: number, frameValue: VirtualFrame, scopeFrameNodeValue_: Frame): Object;
    // private execute_generic3(state_0__: number, frameValue: VirtualFrame, scopeFrameNodeValue_: Frame): Object;
    // private execute_int1(state_0__: number, frameValue: VirtualFrame, scopeFrameNodeValue_: Frame): Object;
}