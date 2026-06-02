import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InitializeCollatorNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/InitializeCollatorNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSCollatorObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSCollatorObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InitializeCollatorNodeGen extends InitializeCollatorNode {
    static create(paramcontext: JSContext): InitializeCollatorNode;
    static createInitalizeCollatorNode(paramcontext: JSContext): InitializeCollatorNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    executeInit(arg0Value: JSCollatorObject, arg1Value: Object, arg2Value: Object): JSCollatorObject;
}