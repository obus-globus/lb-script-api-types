import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ConstructorBuiltins$ConstructTemporalDurationNode } from '../../../../../com/oracle/truffle/js/builtins/ConstructorBuiltins$ConstructTemporalDurationNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToIntegerWithoutRoundingNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerWithoutRoundingNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ConstructorBuiltinsFactory$ConstructTemporalDurationNodeGen extends ConstructorBuiltins$ConstructTemporalDurationNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramisNewTargetCase: boolean, paramarguments: JavaScriptNode[]): ConstructorBuiltins$ConstructTemporalDurationNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, isNewTargetCase: boolean, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private arguments10_: JavaScriptNode;
    // private arguments1_: JavaScriptNode;
    // private arguments2_: JavaScriptNode;
    // private arguments3_: JavaScriptNode;
    // private arguments4_: JavaScriptNode;
    // private arguments5_: JavaScriptNode;
    // private arguments6_: JavaScriptNode;
    // private arguments7_: JavaScriptNode;
    // private arguments8_: JavaScriptNode;
    // private arguments9_: JavaScriptNode;
    // private state_0_: number;
    // private toIntegerNode_: JSToIntegerWithoutRoundingNode;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object, arguments2Value: Object, arguments3Value: Object, arguments4Value: Object, arguments5Value: Object, arguments6Value: Object, arguments7Value: Object, arguments8Value: Object, arguments9Value: Object, arguments10Value: Object): JSDynamicObject;
    getArguments(): JavaScriptNode[];
}