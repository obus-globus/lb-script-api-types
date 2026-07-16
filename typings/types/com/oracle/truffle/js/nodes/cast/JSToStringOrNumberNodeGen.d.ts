import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSToDoubleNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToDoubleNode.d.ts'
import type { JSToStringOrNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringOrNumberNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToStringOrNumberNodeGen extends JSToStringOrNumberNode {
    static create(): JSToStringOrNumberNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private jSObject_toDoubleNode_: JSToDoubleNode;
    // private state_0_: number;
    execute(arg0Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Object): Object;
}