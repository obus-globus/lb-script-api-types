import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSProxyCallNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSProxyCallNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { IsConstructorNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsConstructorNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSProxyCallNodeGen extends JSProxyCallNode {
    static create(paramcontext: JSContext, paramisNew: boolean, paramisNewTarget: boolean): JSProxyCallNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, isNew: boolean, isNewTarget: boolean)
    // private call_isCallable_: IsCallableNode;
    // private construct_isConstructor_: IsConstructorNode;
    // private state_0_: number;
    execute(arg0Value: Object[]): Object;
    // private executeAndSpecialize(arg0Value: Object[]): Object;
}