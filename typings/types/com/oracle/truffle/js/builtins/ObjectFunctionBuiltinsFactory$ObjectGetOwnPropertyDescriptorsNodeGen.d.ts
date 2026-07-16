import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObjectLibrary } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { ObjectFunctionBuiltins$ObjectGetOwnPropertyDescriptorsNode } from '../../../../../com/oracle/truffle/js/builtins/ObjectFunctionBuiltins$ObjectGetOwnPropertyDescriptorsNode.d.ts'
import type { ObjectFunctionBuiltinsFactory$ObjectGetOwnPropertyDescriptorsNodeGen$GetForeignObject0Data } from '../../../../../com/oracle/truffle/js/builtins/ObjectFunctionBuiltinsFactory$ObjectGetOwnPropertyDescriptorsNodeGen$GetForeignObject0Data.d.ts'
import type { ObjectFunctionBuiltinsFactory$ObjectGetOwnPropertyDescriptorsNodeGen$GetForeignObject1Data } from '../../../../../com/oracle/truffle/js/builtins/ObjectFunctionBuiltinsFactory$ObjectGetOwnPropertyDescriptorsNodeGen$GetForeignObject1Data.d.ts'
import type { ListGetNode } from '../../../../../com/oracle/truffle/js/builtins/helper/ListGetNode.d.ts'
import type { ListSizeNode } from '../../../../../com/oracle/truffle/js/builtins/helper/ListSizeNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { FromPropertyDescriptorNode } from '../../../../../com/oracle/truffle/js/nodes/access/FromPropertyDescriptorNode.d.ts'
import type { JSGetOwnPropertyNode } from '../../../../../com/oracle/truffle/js/nodes/access/JSGetOwnPropertyNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSClassProfile } from '../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectFunctionBuiltinsFactory$ObjectGetOwnPropertyDescriptorsNodeGen extends ObjectFunctionBuiltins$ObjectGetOwnPropertyDescriptorsNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: JavaScriptNode[]): ObjectFunctionBuiltins$ObjectGetOwnPropertyDescriptorsNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private fromPropertyDescriptorNode: FromPropertyDescriptorNode;
    // private getDefault_recursive_: ObjectFunctionBuiltins$ObjectGetOwnPropertyDescriptorsNode;
    // private getForeignObject0_cache: ObjectFunctionBuiltinsFactory$ObjectGetOwnPropertyDescriptorsNodeGen$GetForeignObject0Data;
    // private getForeignObject1_cache: ObjectFunctionBuiltinsFactory$ObjectGetOwnPropertyDescriptorsNodeGen$GetForeignObject1Data;
    // private getJSObject_classProfile_: JSClassProfile;
    // private getJSObject_getOwnPropertyNode_: JSGetOwnPropertyNode;
    // private getJSObject_listGet_: ListGetNode;
    // private getJSObject_listSize_: ListSizeNode;
    // private putPropDescNode: DynamicObjectLibrary;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object): JSDynamicObject;
    executeEvaluated(arguments0Value: Object): JSDynamicObject;
    getArguments(): JavaScriptNode[];
    // private getForeignObject1Boundary(state_0: number, s2_: ObjectFunctionBuiltinsFactory$ObjectGetOwnPropertyDescriptorsNodeGen$GetForeignObject1Data, arguments0Value: Object, fromPropertyDescriptorNode_1: FromPropertyDescriptorNode, putPropDescNode_1: DynamicObjectLibrary): JSDynamicObject;
    // private getForeignObject1Boundary0(state_0: number, s2_: ObjectFunctionBuiltinsFactory$ObjectGetOwnPropertyDescriptorsNodeGen$GetForeignObject1Data, arguments0Value_: Object, fromPropertyDescriptorNode_1: FromPropertyDescriptorNode, putPropDescNode_1: DynamicObjectLibrary): Object;
}