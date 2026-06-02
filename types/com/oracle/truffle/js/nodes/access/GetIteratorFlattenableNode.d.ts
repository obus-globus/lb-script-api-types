import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { CreateAsyncFromSyncIteratorNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateAsyncFromSyncIteratorNode.d.ts'
import type { GetMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class GetIteratorFlattenableNode extends JavaScriptBaseNode {
    static create(paramrejectStrings: boolean, paramasync: boolean, paramcontext: JSContext): GetIteratorFlattenableNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(rejectStrings: boolean, async: boolean, context: JSContext)
    // private async: boolean;
    // private context: JSContext;
    // private rejectStrings: boolean;
    execute(iteratedObject: Object): IteratorRecord;
    getIteratorFlattenable(iteratedObject: Object, isObjectNode: IsObjectNode, isIteratorObjectNode: IsObjectNode, isCallableNode: IsCallableNode, getAsyncIteratorMethodNode: GetMethodNode, getIteratorMethodNode: GetMethodNode, iteratorCallNode: JSFunctionCallNode, getNextMethodNode: PropertyGetNode, createAsyncFromSyncIteratorNode: CreateAsyncFromSyncIteratorNode, errorBranch: InlinedBranchProfile): IteratorRecord;
}