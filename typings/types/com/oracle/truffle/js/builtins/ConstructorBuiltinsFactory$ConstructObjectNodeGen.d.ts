import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ConstructorBuiltins$ConstructObjectNode } from '../../../../../com/oracle/truffle/js/builtins/ConstructorBuiltins$ConstructObjectNode.d.ts'
import type { ConstructorBuiltinsFactory$ConstructObjectNodeGen$ConstructObjectJSObject0Data } from '../../../../../com/oracle/truffle/js/builtins/ConstructorBuiltinsFactory$ConstructObjectNodeGen$ConstructObjectJSObject0Data.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToObjectNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ConstructorBuiltinsFactory$ConstructObjectNodeGen extends ConstructorBuiltins$ConstructObjectNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramisNewTargetCase: boolean, paramarguments: JavaScriptNode[]): ConstructorBuiltins$ConstructObjectNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, isNewTargetCase: boolean, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private arguments1_: JavaScriptNode;
    // private constructObjectJSObject0_cache: ConstructorBuiltinsFactory$ConstructObjectNodeGen$ConstructObjectJSObject0Data;
    // private constructObjectJSObject1_toObjectNode_: JSToObjectNode;
    // private state_0_: number;
    // private constructObjectJSObject1Boundary(state_0: number, arguments0Value__: JSDynamicObject, arguments1Value__: Object[], toObjectNode__: JSToObjectNode): Object;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object): Object;
    getArguments(): JavaScriptNode[];
}