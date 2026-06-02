import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ReadNode } from '../../../../../../com/oracle/truffle/js/nodes/ReadNode.d.ts'
import type { HasPropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode.d.ts'
import type { JSTargetableNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSTargetableNode.d.ts'
import type { WriteNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EvalVariableNode extends JSTargetableNode implements ReadNode, WriteNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static evaluateReceiver(paramtargetNode: JavaScriptNode, paramframe: VirtualFrame, paramtargetValue: Object): Object;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, varName: TruffleString, defaultDelegate: JavaScriptNode, dynamicScope: JavaScriptNode, scopeAccessNode: JSTargetableNode)
    // private context: JSContext;
    readonly defaultDelegate: JavaScriptNode;
    // private dynamicScopeNode: JavaScriptNode;
    // private hasPropertyNode: HasPropertyCacheNode;
    // private scopeAccessNode: JSTargetableNode;
    // private varName: TruffleString;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    evaluateTarget(frame: VirtualFrame): Object;
    execute(frame: VirtualFrame): Object;
    executeWithTarget(frame: VirtualFrame, dynamicScope: Object): Object;
    executeWrite(frame: VirtualFrame, value: Object): void;
    getDefaultDelegate(): JavaScriptNode;
    getNodeObject(): Object;
    getPropertyName(): Object;
    getRhs(): JavaScriptNode;
    getTarget(): JavaScriptNode;
    hasTag(tag: Class<Tag>): boolean;
    // private isWrite(): boolean;
}