import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ObjectFunctionBuiltins$ObjectBindPropertiesNode } from '../../../../../com/oracle/truffle/js/builtins/ObjectFunctionBuiltins$ObjectBindPropertiesNode.d.ts'
import type { ObjectFunctionBuiltinsFactory$ObjectBindPropertiesNodeGen$BindPropertiesFromForeign0Data } from '../../../../../com/oracle/truffle/js/builtins/ObjectFunctionBuiltinsFactory$ObjectBindPropertiesNodeGen$BindPropertiesFromForeign0Data.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectFunctionBuiltinsFactory$ObjectBindPropertiesNodeGen extends ObjectFunctionBuiltins$ObjectBindPropertiesNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: (Object | null)[]): ObjectFunctionBuiltins$ObjectBindPropertiesNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private arguments1_: JavaScriptNode;
    // private bindPropertiesFromForeign0_cache: ObjectFunctionBuiltinsFactory$ObjectBindPropertiesNodeGen$BindPropertiesFromForeign0Data;
    // private bindPropertiesFromForeign1_members_: InteropLibrary;
    // private state_0_: number;
    // private bindPropertiesFromForeign1Boundary(state_0: number, arguments0Value__: JSObject, arguments1Value_: Object, members__: InteropLibrary): Object;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object): JSDynamicObject;
    getArguments(): JavaScriptNode[];
}