import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSInteropCallNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/JSInteropCallNode.d.ts'
import type { IsConstructorNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsConstructorNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSInteropInstantiateNode extends JSInteropCallNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doDefault(function_: JSDynamicObject, arguments: Object[], isConstructorNode: IsConstructorNode, callNode: JSFunctionCallNode, importValueNode: ImportValueNode): Object;
    execute(function_: JSDynamicObject, args: Object[]): Object;
}