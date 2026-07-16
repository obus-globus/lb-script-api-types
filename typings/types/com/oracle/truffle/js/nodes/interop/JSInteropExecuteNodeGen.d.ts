import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSInteropExecuteNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/JSInteropExecuteNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSInteropExecuteNodeGen extends JSInteropExecuteNode {
    static create(): JSInteropExecuteNode;
    static getUncached(): JSInteropExecuteNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private callNode_: JSFunctionCallNode;
    // private importValueNode_: ImportValueNode;
    // private isCallableNode_: IsCallableNode;
    // private state_0_: number;
    execute(arg0Value: JSDynamicObject, arg1Value: Object, arg2Value: Object[]): Object;
    // private executeAndSpecialize(arg0Value: JSDynamicObject, arg1Value: Object, arg2Value: Object[]): Object;
}