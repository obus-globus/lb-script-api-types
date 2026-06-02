import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSStringToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringToNumberNode.d.ts'
import type { JSToDoubleNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToDoubleNode.d.ts'
import type { JSToInt32Node } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32Node.d.ts'
import type { JSToInt32NodeGen$ForeignObjectData } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32NodeGen$ForeignObjectData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToInt32NodeGen extends JSToInt32Node {
    static create(paramchild: JavaScriptNode): JavaScriptNode;
    static create(paramchild: JavaScriptNode, parambitwiseOr: boolean): JavaScriptNode;
    static create(): JSToInt32Node;
    static getUncached(): JSToInt32Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private foreignObject_cache: JSToInt32NodeGen$ForeignObjectData;
    // private jSObject_toDoubleNode_: JSToDoubleNode;
    // private state_0_: number;
    // private string_stringToNumberNode_: JSStringToNumberNode;
    // private executeAndSpecialize(arg0Value: Object): number;
    executeInt(arg0Value: Object): number;
}