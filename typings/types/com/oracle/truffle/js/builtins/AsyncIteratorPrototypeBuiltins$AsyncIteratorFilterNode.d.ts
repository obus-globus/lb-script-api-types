import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AsyncIteratorHelperPrototypeBuiltins$CreateAsyncIteratorHelperNode } from '../../../../../com/oracle/truffle/js/builtins/AsyncIteratorHelperPrototypeBuiltins$CreateAsyncIteratorHelperNode.d.ts'
import type { AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode } from '../../../../../com/oracle/truffle/js/builtins/AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode.d.ts'
import type { AsyncIteratorPrototypeBuiltins$AsyncIteratorFilterNode$AsyncIteratorFilterArgs } from '../../../../../com/oracle/truffle/js/builtins/AsyncIteratorPrototypeBuiltins$AsyncIteratorFilterNode$AsyncIteratorFilterArgs.d.ts'
import type { IteratorPrototypeBuiltins$IteratorMethodWithCallableNode } from '../../../../../com/oracle/truffle/js/builtins/IteratorPrototypeBuiltins$IteratorMethodWithCallableNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AsyncIteratorPrototypeBuiltins$AsyncIteratorFilterNode extends IteratorPrototypeBuiltins$IteratorMethodWithCallableNode {
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
    // private awaitNode: AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode<AsyncIteratorPrototypeBuiltins$AsyncIteratorFilterNode$AsyncIteratorFilterArgs>;
    // private createAsyncIteratorHelperNode: AsyncIteratorHelperPrototypeBuiltins$CreateAsyncIteratorHelperNode;
    filter(thisObj: Object, filterer: Object): JSDynamicObject;
    unsupported(thisObj: Object, filterer: Object): Object;
}