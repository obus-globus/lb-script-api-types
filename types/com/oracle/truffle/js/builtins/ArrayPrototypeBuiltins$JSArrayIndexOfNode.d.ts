import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { ArrayPrototypeBuiltins$ArrayForEachIndexCallOperation } from '../../../../../com/oracle/truffle/js/builtins/ArrayPrototypeBuiltins$ArrayForEachIndexCallOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ForEachIndexCallNode$CallbackNode } from '../../../../../com/oracle/truffle/js/nodes/access/ForEachIndexCallNode$CallbackNode.d.ts'
import type { ForEachIndexCallNode$MaybeResultNode } from '../../../../../com/oracle/truffle/js/nodes/access/ForEachIndexCallNode$MaybeResultNode.d.ts'
import type { JSToIntegerAsLongNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerAsLongNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayPrototypeBuiltins$JSArrayIndexOfNode extends ArrayPrototypeBuiltins$ArrayForEachIndexCallOperation {
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
    constructor(context: JSContext, builtin: JSBuiltin, isTypedArrayImplementation: boolean, isForward: boolean)
    // private isForward: boolean;
    indexOf(thisObj: Object, args: Object[], arrayWithContentBranch: InlinedBranchProfile, toInteger: JSToIntegerAsLongNode): Object;
    isForward(): boolean;
    makeCallbackNode(): ForEachIndexCallNode$CallbackNode;
    makeMaybeResultNode(): ForEachIndexCallNode$MaybeResultNode;
    shouldCheckHasProperty(): boolean;
}