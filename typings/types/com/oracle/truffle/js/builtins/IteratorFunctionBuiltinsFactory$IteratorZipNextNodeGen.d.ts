import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IteratorFunctionBuiltins$IteratorZipNextNode } from '../../../../../com/oracle/truffle/js/builtins/IteratorFunctionBuiltins$IteratorZipNextNode.d.ts'
import type { IteratorCloseNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorCloseNode.d.ts'
import type { IteratorStepNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorStepNode.d.ts'
import type { IteratorValueNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorValueNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IteratorFunctionBuiltinsFactory$IteratorZipNextNodeGen extends IteratorFunctionBuiltins$IteratorZipNextNode {
    static create(paramcontext: JSContext): IteratorFunctionBuiltins$IteratorZipNextNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private next_iteratorCloseNode_: IteratorCloseNode;
    // private next_iteratorStepNode_: IteratorStepNode;
    // private next_iteratorValueNode_: IteratorValueNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame, arg0Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Object): Object;
    // private fallbackGuard_(state_0: number, arg0Value: Object): boolean;
}