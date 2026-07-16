import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { ArrayPrototypeBuiltins$ArrayForEachIndexCallOperation } from '../../../../../com/oracle/truffle/js/builtins/ArrayPrototypeBuiltins$ArrayForEachIndexCallOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ForEachIndexCallNode } from '../../../../../com/oracle/truffle/js/nodes/access/ForEachIndexCallNode.d.ts'
import type { ForEachIndexCallNode$CallbackNode } from '../../../../../com/oracle/truffle/js/nodes/access/ForEachIndexCallNode$CallbackNode.d.ts'
import type { ForEachIndexCallNode$MaybeResultNode } from '../../../../../com/oracle/truffle/js/nodes/access/ForEachIndexCallNode$MaybeResultNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Pair } from '../../../../../com/oracle/truffle/js/runtime/util/Pair.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayPrototypeBuiltins$JSArrayReduceNode extends ArrayPrototypeBuiltins$ArrayForEachIndexCallOperation {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin, isTypedArrayImplementation: boolean, isForward: boolean)
    // private forEachIndexFindInitialNode: ForEachIndexCallNode;
    // private isForward: boolean;
    findInitialValue(arrayObj: Object, fromIndex: number, length: number): Pair<number, Object>;
    // private getForEachIndexFindInitialNode(): ForEachIndexCallNode;
    isForward(): boolean;
    makeCallbackNode(): ForEachIndexCallNode$CallbackNode;
    makeMaybeResultNode(): ForEachIndexCallNode$MaybeResultNode;
    reduce(thisObj: Object, callback: Object, initialValueOpt: Object[], findInitialValueBranch: InlinedBranchProfile): Object;
}