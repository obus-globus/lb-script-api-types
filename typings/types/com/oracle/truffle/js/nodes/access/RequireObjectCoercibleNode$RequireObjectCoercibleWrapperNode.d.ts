import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { RequireObjectCoercibleNode } from '../../../../../../com/oracle/truffle/js/nodes/access/RequireObjectCoercibleNode.d.ts'
import type { JSUnaryNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSUnaryNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class RequireObjectCoercibleNode$RequireObjectCoercibleWrapperNode extends JSUnaryNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramchild: JavaScriptNode): RequireObjectCoercibleNode$RequireObjectCoercibleWrapperNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(operand: JavaScriptNode)
    // private requireObjectCoercibleNode: RequireObjectCoercibleNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doDefault(value: Object): Object;
    isResultAlwaysOfType(clazz: Class<Object>): boolean;
}