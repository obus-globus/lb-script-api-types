import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { GetIteratorFlattenableNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetIteratorFlattenableNode.d.ts'
import type { GetMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GetIteratorFlattenableNodeGen extends GetIteratorFlattenableNode {
    static create(paramrejectStrings: boolean, paramasync: boolean, paramcontext: JSContext): GetIteratorFlattenableNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(rejectStrings: boolean, async: boolean, context: JSContext)
    // private createAsyncFromSyncIteratorNode__field1_: Node;
    // private getAsyncIteratorMethodNode_: GetMethodNode;
    // private getIteratorMethodNode_: GetMethodNode;
    // private getNextMethodNode_: PropertyGetNode;
    // private isCallableNode_: IsCallableNode;
    // private isIteratorObjectNode_: IsObjectNode;
    // private isObjectNode_: IsObjectNode;
    // private iteratorCallNode_: JSFunctionCallNode;
    // private state_0_: number;
    execute(arg0Value: Object): IteratorRecord;
    // private executeAndSpecialize(arg0Value: Object): IteratorRecord;
}