import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { GetMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GetMethodNodeGen extends GetMethodNode {
    static create(paramcontext: JSContext, parampropertyKey: Object): GetMethodNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, propertyKey: Object)
    // private state_0_: number;
    executeWithTarget(arg0Value: Object): Object;
}