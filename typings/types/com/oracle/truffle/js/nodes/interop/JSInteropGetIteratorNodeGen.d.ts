import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptLanguage } from '../../../../../../com/oracle/truffle/js/lang/JavaScriptLanguage.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSInteropGetIteratorNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/JSInteropGetIteratorNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSInteropGetIteratorNodeGen extends JSInteropGetIteratorNode {
    static create(): JSInteropGetIteratorNode;
    static getUncached(): JSInteropGetIteratorNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private callNode_: JSFunctionCallNode;
    // private isCallableNode_: IsCallableNode;
    // private iteratorPropertyGetNode_: PropertyGetNode;
    // private nextPropertyGetNode_: PropertyGetNode;
    // private state_0_: number;
    execute(arg0Value: JSObject, arg1Value: JavaScriptLanguage, arg2Value: boolean): Object;
    // private executeAndSpecialize(arg0Value: JSObject, arg1Value: JavaScriptLanguage, arg2Value: boolean): Object;
}