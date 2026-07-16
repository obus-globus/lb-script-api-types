import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { GetPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetPrototypeNode.d.ts'
import type { IsJSObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsJSObjectNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { InstanceofNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/InstanceofNode.d.ts'
import type { ForeignObjectPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ForeignObjectPrototypeNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSException } from '../../../../../../com/oracle/truffle/js/runtime/JSException.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSFunctionObject$Bound } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject$Bound.d.ts'
import type { JSProxyObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSProxyObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class InstanceofNode$OrdinaryHasInstanceNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): InstanceofNode$OrdinaryHasInstanceNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private getPrototypeNode: PropertyGetNode;
    // private isCallableNode: IsCallableNode;
    // private lessThan4: boolean;
    // private createTypeErrorInvalidPrototype(obj: JSDynamicObject, proto: Object): JSException;
    doBound(obj: Object, bound: JSFunctionObject$Bound, instanceofNode: InstanceofNode): boolean;
    // private doForeignObject(left: Object, right: JSObject, isAnyObjectNode: IsObjectNode, getForeignPrototypeNode: ForeignObjectPrototypeNode, invalidPrototypeBranch: InlinedBranchProfile, ordinaryHasInstanceNode: InstanceofNode$OrdinaryHasInstanceNode): boolean;
    // private doForeignObjectPrototype(left: Object, right: JSObject, isObjectNode: IsObjectNode, getForeignPrototypeNode: ForeignObjectPrototypeNode, invalidPrototypeBranch: InlinedBranchProfile, ordinaryHasInstanceNode: InstanceofNode$OrdinaryHasInstanceNode): boolean;
    doForeignObjectProxy(left: Object, right: JSProxyObject, isAnyObjectNode: IsObjectNode, getForeignPrototypeNode: ForeignObjectPrototypeNode, invalidPrototypeBranch: InlinedBranchProfile, ordinaryHasInstanceNode: InstanceofNode$OrdinaryHasInstanceNode): boolean;
    doForeignObjectUnbound(left: Object, right: JSFunctionObject, isAnyObjectNode: IsObjectNode, getForeignPrototypeNode: ForeignObjectPrototypeNode, invalidPrototypeBranch: InlinedBranchProfile, ordinaryHasInstanceNode: InstanceofNode$OrdinaryHasInstanceNode): boolean;
    // private doJSObject(left: JSObject, right: JSObject, getPrototype1Node: GetPrototypeNode, getPrototype2Node: GetPrototypeNode, getPrototype3Node: GetPrototypeNode, firstTrue: InlinedBranchProfile, firstFalse: InlinedBranchProfile, need2Hops: InlinedBranchProfile, need3Hops: InlinedBranchProfile, errorBranch: InlinedBranchProfile, invalidPrototypeBranch: InlinedBranchProfile): boolean;
    // private doJSObject4(obj: JSDynamicObject, check: JSObject, getLoopedPrototypeNode: GetPrototypeNode, errorBranch: InlinedBranchProfile): boolean;
    doJSObjectFunction(left: Object, right: JSFunctionObject, isObjectNode: IsJSObjectNode, getPrototype1Node: GetPrototypeNode, getPrototype2Node: GetPrototypeNode, getPrototype3Node: GetPrototypeNode, firstTrue: InlinedBranchProfile, firstFalse: InlinedBranchProfile, need2Hops: InlinedBranchProfile, need3Hops: InlinedBranchProfile, errorBranch: InlinedBranchProfile, invalidPrototypeBranch: InlinedBranchProfile): boolean;
    doJSObjectProxy(left: Object, right: JSProxyObject, isObjectNode: IsJSObjectNode, getPrototype1Node: GetPrototypeNode, getPrototype2Node: GetPrototypeNode, getPrototype3Node: GetPrototypeNode, firstTrue: InlinedBranchProfile, firstFalse: InlinedBranchProfile, need2Hops: InlinedBranchProfile, need3Hops: InlinedBranchProfile, errorBranch: InlinedBranchProfile, invalidPrototypeBranch: InlinedBranchProfile): boolean;
    executeBoolean(left: Object, right: Object): boolean;
    // private getConstructorPrototype(target: JSObject, invalidPrototypeBranch: InlinedBranchProfile): JSObject;
}