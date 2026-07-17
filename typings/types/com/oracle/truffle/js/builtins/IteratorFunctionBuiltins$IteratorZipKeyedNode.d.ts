import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString$EqualNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { IteratorFunctionBuiltins$IteratorZipMethodNode } from '../../../../../com/oracle/truffle/js/builtins/IteratorFunctionBuiltins$IteratorZipMethodNode.d.ts'
import type { ListGetNode } from '../../../../../com/oracle/truffle/js/builtins/helper/ListGetNode.d.ts'
import type { ListSizeNode } from '../../../../../com/oracle/truffle/js/builtins/helper/ListSizeNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GetIteratorFlattenableNode } from '../../../../../com/oracle/truffle/js/nodes/access/GetIteratorFlattenableNode.d.ts'
import type { IsObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { IteratorCloseNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorCloseNode.d.ts'
import type { JSGetOwnPropertyNode } from '../../../../../com/oracle/truffle/js/nodes/access/JSGetOwnPropertyNode.d.ts'
import type { OwnPropertyKeysNode } from '../../../../../com/oracle/truffle/js/nodes/access/OwnPropertyKeysNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { ReadElementNode } from '../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { GetOptionsObjectNode } from '../../../../../com/oracle/truffle/js/nodes/intl/GetOptionsObjectNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSIteratorHelperObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSIteratorHelperObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class IteratorFunctionBuiltins$IteratorZipKeyedNode extends IteratorFunctionBuiltins$IteratorZipMethodNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    iteratorZipKeyed(iterables: Object, options: Object, node: Node, isObjectNode: IsObjectNode, getOptionsObjectNode: GetOptionsObjectNode, getModeNode: PropertyGetNode, getPaddingNode: PropertyGetNode, readElementNode: ReadElementNode, ownPropertyKeysNode: OwnPropertyKeysNode, getOwnPropertyNode: JSGetOwnPropertyNode, listSize: ListSizeNode, listGet: ListGetNode, getIteratorFlattenableNode: GetIteratorFlattenableNode, iteratorCloseNode: IteratorCloseNode, equalNode: TruffleString$EqualNode, errorBranch: InlinedBranchProfile): JSIteratorHelperObject;
}