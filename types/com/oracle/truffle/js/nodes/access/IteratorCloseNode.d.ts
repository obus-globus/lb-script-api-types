import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { GetMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IteratorCloseNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): IteratorCloseNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private getReturnNode: GetMethodNode;
    // private isObjectNode: IsObjectNode;
    // private methodCallNode: JSFunctionCallNode;
    execute(iterator: Object, value: Object): Object;
    executeAbrupt(iterator: Object): void;
    executeVoid(iterator: Object): void;
}