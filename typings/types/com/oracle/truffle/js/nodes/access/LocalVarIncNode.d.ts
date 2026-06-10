import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { FrameSlotNode$WithDescriptor } from '../../../../../../com/oracle/truffle/js/nodes/access/FrameSlotNode$WithDescriptor.d.ts'
import type { LocalVarIncNode$LocalVarOp } from '../../../../../../com/oracle/truffle/js/nodes/access/LocalVarIncNode$LocalVarOp.d.ts'
import type { LocalVarIncNode$Op } from '../../../../../../com/oracle/truffle/js/nodes/access/LocalVarIncNode$Op.d.ts'
import type { ScopeFrameNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ScopeFrameNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class LocalVarIncNode extends FrameSlotNode$WithDescriptor {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static createPostfix(paramop: LocalVarIncNode$Op, paramframeSlot: JSFrameSlot, paramhasTemporalDeadZone: boolean, paramscopeFrameNode: ScopeFrameNode): LocalVarIncNode;
    static createPrefix(paramop: LocalVarIncNode$Op, paramframeSlot: JSFrameSlot, paramhasTemporalDeadZone: boolean, paramscopeFrameNode: ScopeFrameNode): LocalVarIncNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(op: LocalVarIncNode$LocalVarOp, slot: number, identifier: Object, hasTemporalDeadZone: boolean, scopeFrameNode: ScopeFrameNode)
    // private hasTemporalDeadZone: boolean;
    // private op: LocalVarIncNode$LocalVarOp;
    // private scopeFrameNode: ScopeFrameNode;
    getLevelFrameNode(): ScopeFrameNode;
    hasTemporalDeadZone(): boolean;
}