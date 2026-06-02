import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IteratorPrototypeBuiltins$IteratorMethodWithCallableNode } from '../../../../../com/oracle/truffle/js/builtins/IteratorPrototypeBuiltins$IteratorMethodWithCallableNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { IteratorCloseNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorCloseNode.d.ts'
import type { IteratorStepNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorStepNode.d.ts'
import type { IteratorValueNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorValueNode.d.ts'
import type { LongToIntOrDoubleNode } from '../../../../../com/oracle/truffle/js/nodes/cast/LongToIntOrDoubleNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class IteratorPrototypeBuiltins$IteratorReduceNode extends IteratorPrototypeBuiltins$IteratorMethodWithCallableNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    // private callNode: JSFunctionCallNode;
    // private iteratorCloseNode: IteratorCloseNode;
    // private iteratorStepNode: IteratorStepNode;
    // private iteratorValueNode: IteratorValueNode;
    incompatible(thisObj: Object, reducer: Object, args: Object[], isObjectNode: IsObjectNode): void;
    // private iteratorCloseNode(): IteratorCloseNode;
    reduce(thisObj: Object, reducer: Object, args: Object[], counterToJSNumber: LongToIntOrDoubleNode): Object;
}