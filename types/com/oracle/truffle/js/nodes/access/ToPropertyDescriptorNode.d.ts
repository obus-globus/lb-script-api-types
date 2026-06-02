import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { HasPropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSToBooleanNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ToPropertyDescriptorNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): ToPropertyDescriptorNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private getConfigurableNode: PropertyGetNode;
    // private getEnumerableNode: PropertyGetNode;
    // private getGetNode: PropertyGetNode;
    // private getSetNode: PropertyGetNode;
    // private getValueNode: PropertyGetNode;
    // private getWritableNode: PropertyGetNode;
    // private hasConfigurableNode: HasPropertyCacheNode;
    // private hasEnumerableNode: HasPropertyCacheNode;
    // private hasGetNode: HasPropertyCacheNode;
    // private hasSetNode: HasPropertyCacheNode;
    // private hasValueNode: HasPropertyCacheNode;
    // private hasWritableNode: HasPropertyCacheNode;
    doDefault(obj: Object, isObjectNode: IsObjectNode, toBooleanNode: JSToBooleanNode, hasGetBranch: InlinedBranchProfile, hasSetBranch: InlinedBranchProfile, hasEnumerableBranch: InlinedBranchProfile, hasConfigurableBranch: InlinedBranchProfile, hasValueBranch: InlinedBranchProfile, hasWritableBranch: InlinedBranchProfile, errorBranch: InlinedBranchProfile, isCallable: IsCallableNode): PropertyDescriptor;
    doNonObject(obj: Object, isObjectNode: IsObjectNode): PropertyDescriptor;
    execute(operand: Object): PropertyDescriptor;
    // private getConfigurableNode(): PropertyGetNode;
    // private getEnumerableNode(): PropertyGetNode;
    // private getGet(obj: Object): Object;
    // private getSet(obj: Object): Object;
    // private getValue(obj: Object): Object;
    // private getWritableNode(): PropertyGetNode;
}