import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ArrayPrototypeBuiltins$JSArrayOperation } from '../../../../../com/oracle/truffle/js/builtins/ArrayPrototypeBuiltins$JSArrayOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToBooleanNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayPrototypeBuiltins$JSArrayFindNode extends ArrayPrototypeBuiltins$JSArrayOperation {
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
    constructor(context: JSContext, builtin: JSBuiltin, isTypedArrayImplementation: boolean, isLast: boolean)
    // private callNode: JSFunctionCallNode;
    // private isLast: boolean;
    // private toBooleanNode: JSToBooleanNode;
    // private callPredicate(function_: Object, target: Object, value: Object, index: number, thisObj: Object): Object;
    find(thisObj: Object, callback: Object, thisArg: Object): Object;
}