import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PromiseFunctionBuiltins$PromiseCombinatorNode } from '../../../../../com/oracle/truffle/js/builtins/PromiseFunctionBuiltins$PromiseCombinatorNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { PerformPromiseCombinatorNode } from '../../../../../com/oracle/truffle/js/nodes/promise/PerformPromiseCombinatorNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PromiseFunctionBuiltinsFactory$PromiseCombinatorNodeGen extends PromiseFunctionBuiltins$PromiseCombinatorNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramperformPromiseOp: PerformPromiseCombinatorNode, paramarguments: JavaScriptNode[]): PromiseFunctionBuiltins$PromiseCombinatorNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, performPromiseOp: PerformPromiseCombinatorNode, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private arguments1_: JavaScriptNode;
    // private object_getIteratorNode__field1_: Node;
    // private object_getIteratorNode__field2_: Node;
    // private object_getIteratorNode__field3_: Node;
    // private object_getIteratorNode__field4_: Node;
    // private object_getIteratorNode__field5_: Node;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object): Object;
    getArguments(): JavaScriptNode[];
}