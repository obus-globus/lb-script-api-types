import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSStringToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringToNumberNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToNumberNodeGen extends JSToNumberNode {
    static create(paramchild: JavaScriptNode): JavaScriptNode;
    static create(): JSToNumberNode;
    static getUncached(): JSToNumberNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    // private string_stringToNumberNode_: JSStringToNumberNode;
    // private toNumberNode: JSToNumberNode;
    // private toPrimitiveNode: JSToPrimitiveNode;
    execute(arg0Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Object): Object;
}