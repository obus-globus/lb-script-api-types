import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleStringBuilder$AppendStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendStringNode.d.ts'
import type { TruffleStringBuilder$AppendSubstringByteIndexNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendSubstringByteIndexNode.d.ts'
import type { TruffleStringBuilder$ToStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$ToStringNode.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { StringPrototypeBuiltins$JSStringOperationWithRegExpArgument } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringOperationWithRegExpArgument.d.ts'
import type { ReplaceStringParser$Token } from '../../../../../com/oracle/truffle/js/builtins/helper/ReplaceStringParser$Token.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class StringPrototypeBuiltins$JSStringReplaceBaseNode extends StringPrototypeBuiltins$JSStringOperationWithRegExpArgument {
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
    // private appendStringNode: TruffleStringBuilder$AppendStringNode;
    // private appendSubStringNode: TruffleStringBuilder$AppendSubstringByteIndexNode;
    // private builderToStringNode: TruffleStringBuilder$ToStringNode;
    // private functionReplaceCallNode: JSFunctionCallNode;
    // private functionalReplaceProfile: ConditionProfile;
    // private replaceNecessaryProfile: ConditionProfile;
    append(sb: TruffleStringBuilderUTF16, s: TruffleString): void;
    append(sb: TruffleStringBuilderUTF16, s: TruffleString, fromIndex: number, toIndex: number): void;
    appendLen(sb: TruffleStringBuilderUTF16, s: TruffleString, fromIndex: number, length: number): void;
    builderToString(sb: TruffleStringBuilderUTF16): TruffleString;
    functionReplaceCall(splitter: Object, separator: Object, args: Object[]): Object;
    parseReplaceValue(replaceValue: TruffleString): ReplaceStringParser$Token[];
}