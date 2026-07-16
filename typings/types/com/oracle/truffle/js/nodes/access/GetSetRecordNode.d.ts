import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSNumberToDoubleNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSNumberToDoubleNode.d.ts'
import type { JSToIntegerOrInfinityNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerOrInfinityNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { SetRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/SetRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class GetSetRecordNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): GetSetRecordNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    execute(obj: Object): SetRecord;
    get(obj: Object, isObjectNode: IsObjectNode, getSizeNode: PropertyGetNode, getHasNode: PropertyGetNode, getKeysNode: PropertyGetNode, toNumberNode: JSToNumberNode, toIntegerOrInfinityNode: JSToIntegerOrInfinityNode, numberToDoubleValueNode: JSNumberToDoubleNode, isCallableNode: IsCallableNode, errorBranch: InlinedBranchProfile): SetRecord;
}