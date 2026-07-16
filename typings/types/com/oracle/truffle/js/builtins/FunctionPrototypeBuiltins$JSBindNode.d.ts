import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { FunctionPrototypeBuiltins$CopyFunctionNameAndLengthNode } from '../../../../../com/oracle/truffle/js/builtins/FunctionPrototypeBuiltins$CopyFunctionNameAndLengthNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GetPrototypeNode } from '../../../../../com/oracle/truffle/js/nodes/access/GetPrototypeNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { ForeignObjectPrototypeNode } from '../../../../../com/oracle/truffle/js/nodes/interop/ForeignObjectPrototypeNode.d.ts'
import type { IsCallableNode } from '../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { IsConstructorNode } from '../../../../../com/oracle/truffle/js/nodes/unary/IsConstructorNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class FunctionPrototypeBuiltins$JSBindNode extends JSBuiltinNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    bindJSFunction(thisFnObj: JSFunctionObject, thisArg: Object, args: Object[], getPrototypeNode: GetPrototypeNode, copyNameAndLengthNode: FunctionPrototypeBuiltins$CopyFunctionNameAndLengthNode, isConstructorProfile: InlinedConditionProfile, isAsyncProfile: InlinedConditionProfile, setProtoProfile: InlinedConditionProfile): JSDynamicObject;
    bindOther(thisObj: Object, thisArg: Object, args: Object[], isCallableNode: IsCallableNode, getPrototypeNode: GetPrototypeNode, foreignPrototypeNode: ForeignObjectPrototypeNode, isConstructorNode: IsConstructorNode, copyNameAndLengthNode: FunctionPrototypeBuiltins$CopyFunctionNameAndLengthNode, isProxyProfile: InlinedConditionProfile, isConstructorProfile: InlinedConditionProfile, setProtoProfile: InlinedConditionProfile): JSDynamicObject;
}