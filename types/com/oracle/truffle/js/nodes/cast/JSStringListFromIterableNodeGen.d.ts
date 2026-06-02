import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSStringListFromIterableNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringListFromIterableNode.d.ts'
import type { JSStringListFromIterableNodeGen$ToArrayData } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringListFromIterableNodeGen$ToArrayData.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSStringListFromIterableNodeGen extends JSStringListFromIterableNode {
    static create(paramcontext: JSContext): JSStringListFromIterableNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private state_0_: number;
    // private toArray_cache: JSStringListFromIterableNodeGen$ToArrayData;
    // private executeAndSpecialize(arg0Value: Object): string[];
    executeIterable(arg0Value: Object): string[];
}