import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { FromPropertyDescriptorNode } from '../../../../../../com/oracle/truffle/js/nodes/access/FromPropertyDescriptorNode.d.ts'
import type { GetMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { JSToBooleanNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSProxyPropertySetNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext, paramisStrict: boolean, paramdefineProperty: boolean, paramattributes: number): JSProxyPropertySetNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, isStrict: boolean, defineProperty: boolean, attributes: number)
    // private attributes: number;
    // private call: JSFunctionCallNode;
    // private context: JSContext;
    // private defineProperty: boolean;
    // private fromPropertyDescriptorNode: FromPropertyDescriptorNode;
    // private isStrict: boolean;
    // private toBoolean: JSToBooleanNode;
    // private trapGet: GetMethodNode;
    doGeneric(proxy: JSDynamicObject, receiver: Object, value: Object, key: Object, toPropertyKey: JSToPropertyKeyNode, errorBranch: InlinedBranchProfile, hasTrap: InlinedConditionProfile, targetClassProfile: JSClassProfile): boolean;
    executeWithReceiverAndValue(proxy: Object, receiver: Object, value: Object, key: Object): boolean;
    executeWithReceiverAndValueInt(proxy: Object, receiver: Object, value: number, key: Object): boolean;
    // private fromPropertyDescriptor(desc: PropertyDescriptor): Object;
}