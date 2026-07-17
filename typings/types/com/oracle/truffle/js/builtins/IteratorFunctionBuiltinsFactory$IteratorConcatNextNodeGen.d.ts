import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IteratorFunctionBuiltins$IteratorConcatNextNode } from '../../../../../com/oracle/truffle/js/builtins/IteratorFunctionBuiltins$IteratorConcatNextNode.d.ts'
import type { IteratorCloseNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorCloseNode.d.ts'
import type { IteratorStepNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorStepNode.d.ts'
import type { IteratorValueNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorValueNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { IsCallableNode } from '../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IteratorFunctionBuiltinsFactory$IteratorConcatNextNodeGen extends IteratorFunctionBuiltins$IteratorConcatNextNode {
    static create(paramcontext: JSContext): IteratorFunctionBuiltins$IteratorConcatNextNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private next_getIteratorFromMethodNode__field1_: IsCallableNode;
    // private next_getIteratorFromMethodNode__field2_: JSFunctionCallNode;
    // private next_getIteratorFromMethodNode__field3_: PropertyGetNode;
    // private next_getIteratorFromMethodNode__field4_: InteropLibrary;
    // private next_iteratorCloseNode_: IteratorCloseNode;
    // private next_iteratorStepNode_: IteratorStepNode;
    // private next_iteratorValueNode_: IteratorValueNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame, arg0Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Object): Object;
    // private fallbackGuard_(state_0: number, arg0Value: Object): boolean;
}