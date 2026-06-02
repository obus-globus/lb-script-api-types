import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IteratorFunctionBuiltins$IteratorConcatNextNode } from '../../../../../com/oracle/truffle/js/builtins/IteratorFunctionBuiltins$IteratorConcatNextNode.d.ts'
import type { IteratorCompleteNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorCompleteNode.d.ts'
import type { IteratorNextNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorNextNode.d.ts'
import type { IteratorValueNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorValueNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IteratorFunctionBuiltinsFactory$IteratorConcatNextNodeGen extends IteratorFunctionBuiltins$IteratorConcatNextNode {
    static create(paramcontext: JSContext): IteratorFunctionBuiltins$IteratorConcatNextNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private next_getIteratorFromMethodNode__field1_: Node;
    // private next_getIteratorFromMethodNode__field2_: Node;
    // private next_getIteratorFromMethodNode__field3_: Node;
    // private next_getIteratorFromMethodNode__field4_: Node;
    // private next_iteratorCompleteNode_: IteratorCompleteNode;
    // private next_iteratorNextNode_: IteratorNextNode;
    // private next_iteratorValueNode_: IteratorValueNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame, arg0Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Object): Object;
    // private fallbackGuard_(state_0: number, arg0Value: Object): boolean;
}