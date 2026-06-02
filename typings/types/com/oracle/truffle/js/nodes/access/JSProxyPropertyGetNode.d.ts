import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { GetMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { JSGetOwnPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSGetOwnPropertyNode.d.ts'
import type { JSIdenticalNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSIdenticalNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSProxyPropertyGetNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): JSProxyPropertyGetNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private callNode: JSFunctionCallNode;
    // private getOwnPropertyNode: JSGetOwnPropertyNode;
    // private sameValueNode: JSIdenticalNode;
    // private trapGet: GetMethodNode;
    // private checkInvariants(propertyKey: Object, proxyTarget: Object, trapResult: Object, errorBranch: InlinedBranchProfile): void;
    doGeneric(proxy: JSDynamicObject, receiver: Object, key: Object, defaultValue: Object, toPropertyKeyNode: JSToPropertyKeyNode, errorBranch: InlinedBranchProfile, hasTrap: InlinedConditionProfile, targetClassProfile: JSClassProfile): Object;
    executeWithReceiver(proxy: Object, receiver: Object, key: Object, defaultValue: Object): Object;
    // private getOwnProperty(target: JSDynamicObject, propertyKey: Object): PropertyDescriptor;
    // private isSameValue(trapResult: Object, value: Object): boolean;
}