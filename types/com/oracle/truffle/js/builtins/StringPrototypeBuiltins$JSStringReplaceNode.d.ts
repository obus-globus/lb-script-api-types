import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ByteIndexOfStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfStringNode.d.ts'
import type { TruffleString$EqualNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { StringPrototypeBuiltins$JSStringReplaceBaseNode } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringReplaceBaseNode.d.ts'
import type { ReplaceStringParser$Token } from '../../../../../com/oracle/truffle/js/builtins/helper/ReplaceStringParser$Token.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { JSToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { IsCallableNode } from '../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class StringPrototypeBuiltins$JSStringReplaceNode extends StringPrototypeBuiltins$JSStringReplaceBaseNode {
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
    // private stringIndexOfNode: TruffleString$ByteIndexOfStringNode;
    // private builtinReplace(searchValue: Object, replParam: Object, o: Object, toString2Node: JSToStringNode, toString3Node: JSToStringNode, isCallableNode: IsCallableNode, dollarProfile: InlinedBranchProfile, node: Node): Object;
    // private builtinReplaceString(searchString: TruffleString, replaceString: TruffleString, o: Object, parsedReplaceParam: ReplaceStringParser$Token[], dollarProfile: InlinedBranchProfile, node: Node): Object;
    // private indexOf(s1: TruffleString, s2: TruffleString): number;
    replaceGeneric(thisObj: Object, searchValue: Object, replaceValue: Object, node: Node, isObject: IsObjectNode, toString2Node: JSToStringNode, toString3Node: JSToStringNode, isCallableNode: IsCallableNode, dollarProfile: InlinedBranchProfile, isSpecialProfile: InlinedConditionProfile, callSpecialProfile: InlinedConditionProfile): Object;
    replaceString(thisObj: Object, searchValue: TruffleString, replaceValue: TruffleString, node: Node, dollarProfile: InlinedBranchProfile): Object;
    replaceStringCached(thisObj: TruffleString, searchValue: TruffleString, replaceValue: TruffleString, node: Node, cachedReplaceValue: TruffleString, cachedParsedReplaceValue: ReplaceStringParser$Token[], equalsNode: TruffleString$EqualNode, dollarProfile: InlinedBranchProfile): Object;
}