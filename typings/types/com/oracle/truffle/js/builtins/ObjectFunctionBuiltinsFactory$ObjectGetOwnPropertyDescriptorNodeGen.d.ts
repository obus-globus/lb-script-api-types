import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
import type { ObjectFunctionBuiltins$ObjectGetOwnPropertyDescriptorNode } from '../../../../../com/oracle/truffle/js/builtins/ObjectFunctionBuiltins$ObjectGetOwnPropertyDescriptorNode.d.ts'
import type { ObjectFunctionBuiltinsFactory$ObjectGetOwnPropertyDescriptorNodeGen$GetForeignObject0Data } from '../../../../../com/oracle/truffle/js/builtins/ObjectFunctionBuiltinsFactory$ObjectGetOwnPropertyDescriptorNodeGen$GetForeignObject0Data.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { FromPropertyDescriptorNode } from '../../../../../com/oracle/truffle/js/nodes/access/FromPropertyDescriptorNode.d.ts'
import type { JSGetOwnPropertyNode } from '../../../../../com/oracle/truffle/js/nodes/access/JSGetOwnPropertyNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { ImportValueNode } from '../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectFunctionBuiltinsFactory$ObjectGetOwnPropertyDescriptorNodeGen extends ObjectFunctionBuiltins$ObjectGetOwnPropertyDescriptorNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: JavaScriptNode[]): ObjectFunctionBuiltins$ObjectGetOwnPropertyDescriptorNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private arguments1_: JavaScriptNode;
    // private fromPropertyDescriptorNode: FromPropertyDescriptorNode;
    // private getForeignObject0_cache: ObjectFunctionBuiltinsFactory$ObjectGetOwnPropertyDescriptorNodeGen$GetForeignObject0Data;
    // private getForeignObject1_charAtNode_: TruffleString$ReadCharUTF16Node;
    // private getForeignObject1_toJSType_: ImportValueNode;
    // private getOwnPropertyNode: JSGetOwnPropertyNode;
    // private state_0_: number;
    // private toPropertyKeyNode: JSToPropertyKeyNode;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object): JSDynamicObject;
    getArguments(): JavaScriptNode[];
    // private getForeignObject1Boundary(state_0: number, arguments0Value_: Object, arguments1Value_: Object, toPropertyKeyNode_1: JSToPropertyKeyNode, fromPropertyDescriptorNode_1: FromPropertyDescriptorNode, toJSType__: ImportValueNode, charAtNode__: TruffleString$ReadCharUTF16Node): Object;
}