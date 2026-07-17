import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSProxyHasPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSProxyHasPropertyNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSProxyHasPropertyNodeGen extends JSProxyHasPropertyNode {
    static create(paramcontext: JSContext): JSProxyHasPropertyNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private state_0_: number;
    executeWithTargetAndKeyBoolean(arg0Value: Object, arg1Value: Object): boolean;
}