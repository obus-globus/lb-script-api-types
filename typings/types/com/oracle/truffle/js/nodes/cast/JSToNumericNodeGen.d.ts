import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { JSToNumericNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumericNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToNumericNodeGen extends JSToNumericNode {
    static create(paramchild: JavaScriptNode, paramtoNumericOperand: boolean): JavaScriptNode;
    static create(): JSToNumericNode;
    static create(paramtoNumericOperand: boolean): JSToNumericNode;
    static createToNumericOperand(paramchild: JavaScriptNode): JavaScriptNode;
    static createToNumericOperand(): JSToNumericNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(toNumericOperand: boolean)
    // private state_0_: number;
    // private toNumberNode: JSToNumberNode;
    // private toPrimitiveNode: JSToPrimitiveNode;
    execute(arg0Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Object): Object;
}