import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { LocalVarIncNode } from '../../../../../../com/oracle/truffle/js/nodes/access/LocalVarIncNode.d.ts'
import type { LocalVarIncNode$LocalVarOp } from '../../../../../../com/oracle/truffle/js/nodes/access/LocalVarIncNode$LocalVarOp.d.ts'
import type { LocalVarIncNode$Op } from '../../../../../../com/oracle/truffle/js/nodes/access/LocalVarIncNode$Op.d.ts'
import type { ScopeFrameNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ScopeFrameNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class LocalVarOpMaterializedNode extends LocalVarIncNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static createPostfix(paramop: LocalVarIncNode$Op, paramframeSlot: JSFrameSlot, paramhasTemporalDeadZone: boolean, paramscopeFrameNode: ScopeFrameNode): LocalVarIncNode;
    static createPrefix(paramop: LocalVarIncNode$Op, paramframeSlot: JSFrameSlot, paramhasTemporalDeadZone: boolean, paramscopeFrameNode: ScopeFrameNode): LocalVarIncNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(from: LocalVarIncNode, materializedTags: Class<Tag>[])
    constructor(op: LocalVarIncNode$LocalVarOp, slot: number, identifier: Object, hasTdz: boolean, scope: ScopeFrameNode, convert: JavaScriptNode, write: JavaScriptNode)
    // private convertOld: JavaScriptNode;
    // private writeNew: JavaScriptNode;
}