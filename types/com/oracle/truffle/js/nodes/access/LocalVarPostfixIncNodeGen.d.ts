import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { LocalVarIncNode } from '../../../../../../com/oracle/truffle/js/nodes/access/LocalVarIncNode.d.ts'
import type { LocalVarIncNode$LocalVarOp } from '../../../../../../com/oracle/truffle/js/nodes/access/LocalVarIncNode$LocalVarOp.d.ts'
import type { LocalVarIncNode$Op } from '../../../../../../com/oracle/truffle/js/nodes/access/LocalVarIncNode$Op.d.ts'
import type { LocalVarPostfixIncNode } from '../../../../../../com/oracle/truffle/js/nodes/access/LocalVarPostfixIncNode.d.ts'
import type { LocalVarPostfixIncNodeGen$ObjectData } from '../../../../../../com/oracle/truffle/js/nodes/access/LocalVarPostfixIncNodeGen$ObjectData.d.ts'
import type { ScopeFrameNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ScopeFrameNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LocalVarPostfixIncNodeGen extends LocalVarPostfixIncNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramop: LocalVarIncNode$LocalVarOp, paramslot: number, paramidentifier: Object, paramhasTemporalDeadZone: boolean, paramscopeFrameNode: ScopeFrameNode): LocalVarPostfixIncNode;
    static createPostfix(paramop: LocalVarIncNode$Op, paramframeSlot: JSFrameSlot, paramhasTemporalDeadZone: boolean, paramscopeFrameNode: ScopeFrameNode): LocalVarIncNode;
    static createPrefix(paramop: LocalVarIncNode$Op, paramframeSlot: JSFrameSlot, paramhasTemporalDeadZone: boolean, paramscopeFrameNode: ScopeFrameNode): LocalVarIncNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(op: LocalVarIncNode$LocalVarOp, slot: number, identifier: Object, hasTemporalDeadZone: boolean, scopeFrameNode: ScopeFrameNode)
    // private object_cache: LocalVarPostfixIncNodeGen$ObjectData;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(scopeFrameNodeValue: Frame): Object;
    executeDouble(frameValue: VirtualFrame): number;
    executeInt(frameValue: VirtualFrame): number;
    executeVoid(frameValue: VirtualFrame): void;
}