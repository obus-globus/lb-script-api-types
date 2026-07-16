import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { ReflectBuiltins$ReflectHasNode } from '../../../../../com/oracle/truffle/js/builtins/ReflectBuiltins$ReflectHasNode.d.ts'
import type { ReflectBuiltinsFactory$ReflectHasNodeGen$ForeignObject0Data } from '../../../../../com/oracle/truffle/js/builtins/ReflectBuiltinsFactory$ReflectHasNodeGen$ForeignObject0Data.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { ForeignObjectPrototypeNode } from '../../../../../com/oracle/truffle/js/nodes/interop/ForeignObjectPrototypeNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSClassProfile } from '../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReflectBuiltinsFactory$ReflectHasNodeGen extends ReflectBuiltins$ReflectHasNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: JavaScriptNode[]): ReflectBuiltins$ReflectHasNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private arguments1_: JavaScriptNode;
    // private foreignObject0_cache: ReflectBuiltinsFactory$ReflectHasNodeGen$ForeignObject0Data;
    // private foreignObject1_foreignObjectPrototypeNode_: ForeignObjectPrototypeNode;
    // private foreignObject1_toJavaStringNode_: TruffleString$ToJavaStringNode;
    // private jsclassProfile: JSClassProfile;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object): Object;
    // private foreignObject1Boundary(state_0: number, arguments0Value_: Object, arguments1Value_: Object, toJavaStringNode__: TruffleString$ToJavaStringNode, foreignObjectPrototypeNode__: ForeignObjectPrototypeNode, jsclassProfile_1: JSClassProfile): Object;
    getArguments(): JavaScriptNode[];
}