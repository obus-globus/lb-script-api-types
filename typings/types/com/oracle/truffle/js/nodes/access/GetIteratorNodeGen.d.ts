import type { InlineSupport$InlineTarget } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { GetIteratorNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetIteratorNode.d.ts'
import type { GetMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GetIteratorNodeGen extends GetIteratorNode {
    static create(): GetIteratorNode;
    static getUncached(): GetIteratorNode;
    static inline(paramtarget: InlineSupport$InlineTarget): GetIteratorNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private getIteratorFromMethodNode__field1_: IsCallableNode;
    // private getIteratorFromMethodNode__field2_: JSFunctionCallNode;
    // private getIteratorFromMethodNode__field3_: PropertyGetNode;
    // private getIteratorFromMethodNode__field4_: InteropLibrary;
    // private getIteratorMethodNode_: GetMethodNode;
    // private state_0_: number;
    execute(arg0Value: Node, arg1Value: Object): IteratorRecord;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: Object): IteratorRecord;
}