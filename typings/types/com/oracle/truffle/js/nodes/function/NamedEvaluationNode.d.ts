import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { SetFunctionNameNode } from '../../../../../../com/oracle/truffle/js/nodes/function/SetFunctionNameNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NamedEvaluationNode extends JavaScriptNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramexpressionNode: JavaScriptNode, paramnameNode: JavaScriptNode): JavaScriptNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(expressionNode: JavaScriptNode, nameNode: JavaScriptNode)
    // private expressionNode: JavaScriptNode;
    // private nameNode: JavaScriptNode;
    // private setFunctionNameNode: SetFunctionNameNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    executeWithName(frame: VirtualFrame, name: Object): Object;
}