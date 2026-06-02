import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { WeakMapPrototypeBuiltins$WeakMapGetHelperNode } from '../../../../../com/oracle/truffle/js/builtins/WeakMapPrototypeBuiltins$WeakMapGetHelperNode.d.ts'
import type { WeakMapPrototypeBuiltins$WeakMapSetHelperNode } from '../../../../../com/oracle/truffle/js/builtins/WeakMapPrototypeBuiltins$WeakMapSetHelperNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { IsCallableNode } from '../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSWeakMapObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSWeakMapObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class WeakMapPrototypeBuiltins$WeakMapGetOrInsertComputedNode extends JSBuiltinNode {
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
    weakMap(thisObj: JSWeakMapObject, key: Object, callbackfn: Object, isCallable: IsCallableNode, getNode: WeakMapPrototypeBuiltins$WeakMapGetHelperNode, callNode: JSFunctionCallNode, setNode: WeakMapPrototypeBuiltins$WeakMapSetHelperNode, errorBranch: InlinedBranchProfile): Object;
}