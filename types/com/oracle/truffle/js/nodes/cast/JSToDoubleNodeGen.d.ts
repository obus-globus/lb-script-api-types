import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSStringToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringToNumberNode.d.ts'
import type { JSToDoubleNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToDoubleNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToDoubleNodeGen extends JSToDoubleNode {
    static create(): JSToDoubleNode;
    static getUncached(): JSToDoubleNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private recursiveToDouble: JSToDoubleNode;
    // private state_0_: number;
    // private stringDouble_stringToNumberNode_: JSStringToNumberNode;
    // private toPrimitiveNode: JSToPrimitiveNode;
    // private executeAndSpecialize(arg0Value: Object): number;
    executeDouble(arg0Value: Object): number;
}