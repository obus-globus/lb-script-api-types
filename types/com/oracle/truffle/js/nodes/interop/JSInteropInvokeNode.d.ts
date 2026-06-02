import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { ReadElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSInteropCallNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/JSInteropCallNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSInteropInvokeNode extends JSInteropCallNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    createGetProperty(name: TruffleString): PropertyGetNode;
    doCached(receiver: JSDynamicObject, name: TruffleString, arguments: Object[], cachedName: TruffleString, equalNode: TruffleString$EqualNode, functionPropertyGetNode: PropertyGetNode, isCallableNode: IsCallableNode, callNode: JSFunctionCallNode, importValueNode: ImportValueNode): Object;
    doUncached(receiver: JSDynamicObject, name: TruffleString, arguments: Object[], readNode: ReadElementNode, isCallableNode: IsCallableNode, callNode: JSFunctionCallNode, importValueNode: ImportValueNode): Object;
    execute(receiver: JSDynamicObject, name: TruffleString, arguments: Object[]): Object;
}