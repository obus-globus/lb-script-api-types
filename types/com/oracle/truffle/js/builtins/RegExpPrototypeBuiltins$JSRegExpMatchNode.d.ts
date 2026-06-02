import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString$ByteIndexOfCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfCodePointNode.d.ts'
import type { TruffleString$CharIndexOfAnyCharUTF16Node } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CharIndexOfAnyCharUTF16Node.d.ts'
import type { RegExpPrototypeBuiltins$AdvanceStringIndexNode } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$AdvanceStringIndexNode.d.ts'
import type { RegExpPrototypeBuiltins$RegExpPrototypeSymbolOperation } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$RegExpPrototypeSymbolOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsJSObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsJSObjectNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSToLengthNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToLengthNode.d.ts'
import type { JSToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class RegExpPrototypeBuiltins$JSRegExpMatchNode extends RegExpPrototypeBuiltins$RegExpPrototypeSymbolOperation {
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
    match(rx: JSDynamicObject, param: Object, node: Node, isObjectNode: IsJSObjectNode, getFlagsNode: PropertyGetNode, toStringNodeForFlags: JSToStringNode, stringIndexOfNode: TruffleString$ByteIndexOfCodePointNode, stringIndexOfAnyNode: TruffleString$CharIndexOfAnyCharUTF16Node, toString1Node: JSToStringNode, toString2Node: JSToStringNode, toLengthNode: JSToLengthNode, isGlobal: InlinedConditionProfile, advanceStringIndex: RegExpPrototypeBuiltins$AdvanceStringIndexNode, lastIndexNotIntBranch: InlinedBranchProfile): Object;
}