import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class GetMethodNode extends JavaScriptBaseNode {
    static create(paramctx: JSContext, paramkey: Object): GetMethodNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, propertyKey: Object)
    // private cacheNode: PropertyGetNode;
    // private isCallableNode: IsCallableNode;
    doGetMethod(target: Object, undefinedOrNull: InlinedConditionProfile, notCallableBranch: InlinedBranchProfile): Object;
    executeWithTarget(target: Object): Object;
    getKey(): Object;
}