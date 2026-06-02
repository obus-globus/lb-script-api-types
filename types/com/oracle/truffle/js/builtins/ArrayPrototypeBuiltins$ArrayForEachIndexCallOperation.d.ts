import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ArrayPrototypeBuiltins$JSArrayOperation } from '../../../../../com/oracle/truffle/js/builtins/ArrayPrototypeBuiltins$JSArrayOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ForEachIndexCallNode } from '../../../../../com/oracle/truffle/js/nodes/access/ForEachIndexCallNode.d.ts'
import type { ForEachIndexCallNode$CallbackNode } from '../../../../../com/oracle/truffle/js/nodes/access/ForEachIndexCallNode$CallbackNode.d.ts'
import type { ForEachIndexCallNode$MaybeResultNode } from '../../../../../com/oracle/truffle/js/nodes/access/ForEachIndexCallNode$MaybeResultNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayPrototypeBuiltins$ArrayForEachIndexCallOperation extends ArrayPrototypeBuiltins$JSArrayOperation {
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
    constructor(context: JSContext, builtin: JSBuiltin, isTypedArrayImplementation: boolean)
    // private forEachIndexNode: ForEachIndexCallNode;
    forEachIndexCall(arrayObj: Object, callbackObj: Object, thisArg: Object, fromIndex: number, length: number, initialResult: Object): Object;
    isForward(): boolean;
    makeCallbackNode(): ForEachIndexCallNode$CallbackNode;
    // private makeForEachIndexCallNode(): ForEachIndexCallNode;
    makeMaybeResultNode(): ForEachIndexCallNode$MaybeResultNode;
    shouldCheckHasProperty(): boolean;
}