import type { InlineSupport$InlineTarget } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { GetIteratorNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetIteratorNode.d.ts'
import type { GetMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GetIteratorNodeGen extends GetIteratorNode {
    static create(): GetIteratorNode;
    static getUncached(): GetIteratorNode;
    static inline(paramtarget: InlineSupport$InlineTarget): GetIteratorNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private getIteratorFromMethodNode__field1_: Node;
    // private getIteratorFromMethodNode__field2_: Node;
    // private getIteratorFromMethodNode__field3_: Node;
    // private getIteratorFromMethodNode__field4_: Node;
    // private getIteratorMethodNode_: GetMethodNode;
    // private state_0_: number;
    execute(arg0Value: Node, arg1Value: Object): IteratorRecord;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: Object): IteratorRecord;
}