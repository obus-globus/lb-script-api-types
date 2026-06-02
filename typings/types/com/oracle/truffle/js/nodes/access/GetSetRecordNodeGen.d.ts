import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { GetSetRecordNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetSetRecordNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSToIntegerOrInfinityNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerOrInfinityNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { SetRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/SetRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GetSetRecordNodeGen extends GetSetRecordNode {
    static create(paramcontext: JSContext): GetSetRecordNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private getHasNode_: PropertyGetNode;
    // private getKeysNode_: PropertyGetNode;
    // private getSizeNode_: PropertyGetNode;
    // private isCallableNode_: IsCallableNode;
    // private isObjectNode_: IsObjectNode;
    // private state_0_: number;
    // private toIntegerOrInfinityNode_: JSToIntegerOrInfinityNode;
    // private toNumberNode_: JSToNumberNode;
    execute(arg0Value: Object): SetRecord;
    // private executeAndSpecialize(arg0Value: Object): SetRecord;
}