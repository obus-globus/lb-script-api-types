import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSInteropCallNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/JSInteropCallNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSInteropExecuteNode extends JSInteropCallNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doDefault(function_: JSDynamicObject, thisArg: Object, arguments: Object[], isCallableNode: IsCallableNode, callNode: JSFunctionCallNode, importValueNode: ImportValueNode): Object;
    execute(function_: JSDynamicObject, thisArg: Object, args: Object[]): Object;
}