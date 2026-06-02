import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { JSToNumberNode$JSToNumberUnaryNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode$JSToNumberUnaryNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToNumberNodeGen$JSToNumberUnaryNodeGen extends JSToNumberNode$JSToNumberUnaryNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramoperand: JavaScriptNode): JSToNumberNode$JSToNumberUnaryNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(operand: JavaScriptNode)
    // private state_0_: number;
    // private toNumberNode_: JSToNumberNode;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(operandNodeValue: Object): Object;
    executeVoid(frameValue: VirtualFrame): void;
}