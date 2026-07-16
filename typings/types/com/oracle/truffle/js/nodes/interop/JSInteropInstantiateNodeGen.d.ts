import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSInteropInstantiateNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/JSInteropInstantiateNode.d.ts'
import type { IsConstructorNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsConstructorNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSInteropInstantiateNodeGen extends JSInteropInstantiateNode {
    static create(): JSInteropInstantiateNode;
    static getUncached(): JSInteropInstantiateNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private callNode_: JSFunctionCallNode;
    // private importValueNode_: ImportValueNode;
    // private isConstructorNode_: IsConstructorNode;
    // private state_0_: number;
    execute(arg0Value: JSDynamicObject, arg1Value: Object[]): Object;
    // private executeAndSpecialize(arg0Value: JSDynamicObject, arg1Value: Object[]): Object;
}