import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { LocalVarIncNode } from '../../../../../../com/oracle/truffle/js/nodes/access/LocalVarIncNode.d.ts'
import type { LocalVarIncNode$LocalVarOp } from '../../../../../../com/oracle/truffle/js/nodes/access/LocalVarIncNode$LocalVarOp.d.ts'
import type { LocalVarIncNode$Op } from '../../../../../../com/oracle/truffle/js/nodes/access/LocalVarIncNode$Op.d.ts'
import type { LocalVarPrefixIncNode } from '../../../../../../com/oracle/truffle/js/nodes/access/LocalVarPrefixIncNode.d.ts'
import type { LocalVarPrefixIncNodeGen$ObjectData } from '../../../../../../com/oracle/truffle/js/nodes/access/LocalVarPrefixIncNodeGen$ObjectData.d.ts'
import type { ScopeFrameNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ScopeFrameNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LocalVarPrefixIncNodeGen extends LocalVarPrefixIncNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramop: LocalVarIncNode$LocalVarOp, paramslot: number, paramidentifier: Object, paramhasTemporalDeadZone: boolean, paramscopeFrameNode: ScopeFrameNode): LocalVarPrefixIncNode;
    static createPostfix(paramop: LocalVarIncNode$Op, paramframeSlot: JSFrameSlot, paramhasTemporalDeadZone: boolean, paramscopeFrameNode: ScopeFrameNode): LocalVarIncNode;
    static createPrefix(paramop: LocalVarIncNode$Op, paramframeSlot: JSFrameSlot, paramhasTemporalDeadZone: boolean, paramscopeFrameNode: ScopeFrameNode): LocalVarIncNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(op: LocalVarIncNode$LocalVarOp, slot: number, identifier: Object, hasTemporalDeadZone: boolean, scopeFrameNode: ScopeFrameNode)
    // private object_cache: LocalVarPrefixIncNodeGen$ObjectData;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(scopeFrameNodeValue: Frame): Object;
    executeDouble(frameValue: VirtualFrame): number;
    executeInt(frameValue: VirtualFrame): number;
    executeVoid(frameValue: VirtualFrame): void;
}