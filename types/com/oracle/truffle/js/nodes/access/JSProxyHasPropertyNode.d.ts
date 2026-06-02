import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { GetMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { JSToBooleanNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { ForeignObjectPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ForeignObjectPrototypeNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSProxyHasPropertyNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): JSProxyHasPropertyNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private callNode: JSFunctionCallNode;
    // private foreignObjectPrototypeNode: ForeignObjectPrototypeNode;
    // private toBooleanNode: JSToBooleanNode;
    // private toPropertyKeyNode: JSToPropertyKeyNode;
    // private trapGetter: GetMethodNode;
    doGeneric(proxy: JSDynamicObject, key: Object, trapFunProfile: InlinedConditionProfile, errorBranch: InlinedBranchProfile): boolean;
    executeWithTargetAndKeyBoolean(shared: Object, key: Object): boolean;
    // private maybeHasInPrototype(target: Object, propertyKey: Object): boolean;
}