import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObjectLibrary } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { ObjectPrototypeBuiltins$ObjectOperation } from '../../../../../com/oracle/truffle/js/builtins/ObjectPrototypeBuiltins$ObjectOperation.d.ts'
import type { ListGetNode } from '../../../../../com/oracle/truffle/js/builtins/helper/ListGetNode.d.ts'
import type { ListSizeNode } from '../../../../../com/oracle/truffle/js/builtins/helper/ListSizeNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { FromPropertyDescriptorNode } from '../../../../../com/oracle/truffle/js/nodes/access/FromPropertyDescriptorNode.d.ts'
import type { JSGetOwnPropertyNode } from '../../../../../com/oracle/truffle/js/nodes/access/JSGetOwnPropertyNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { ImportValueNode } from '../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { JSClassProfile } from '../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ObjectFunctionBuiltins$ObjectGetOwnPropertyDescriptorsNode extends ObjectPrototypeBuiltins$ObjectOperation {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    createRecursive(): ObjectFunctionBuiltins$ObjectGetOwnPropertyDescriptorsNode;
    executeEvaluated(obj: Object): JSDynamicObject;
    getDefault(thisObj: Object, recursive: ObjectFunctionBuiltins$ObjectGetOwnPropertyDescriptorsNode): JSDynamicObject;
    getForeignObject(thisObj: Object, node: Node, fromPropertyDescriptorNode: FromPropertyDescriptorNode, putPropDescNode: DynamicObjectLibrary, interop: InteropLibrary, members: InteropLibrary, toJSType: ImportValueNode, fromJavaString: TruffleString$FromJavaStringNode, errorBranch: InlinedBranchProfile): JSDynamicObject;
    getJSObject(thisObj: JSObject, fromPropertyDescriptorNode: FromPropertyDescriptorNode, putPropDescNode: DynamicObjectLibrary, getOwnPropertyNode: JSGetOwnPropertyNode, listSize: ListSizeNode, listGet: ListGetNode, classProfile: JSClassProfile): JSDynamicObject;
}