import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ByteIndexOfCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfCodePointNode.d.ts'
import type { TruffleString$ByteIndexOfStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfStringNode.d.ts'
import type { TruffleString$EqualNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { StringPrototypeBuiltins$JSStringReplaceBaseNode } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringReplaceBaseNode.d.ts'
import type { ReplaceStringParser$Token } from '../../../../../com/oracle/truffle/js/builtins/helper/ReplaceStringParser$Token.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { IsRegExpNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsRegExpNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { IsCallableNode } from '../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class StringPrototypeBuiltins$JSStringReplaceAllNode extends StringPrototypeBuiltins$JSStringReplaceBaseNode {
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
    // private getFlagsNode: PropertyGetNode;
    // private isRegExpNode: IsRegExpNode;
    // private builtinReplace(searchString: TruffleString, functionalReplace: boolean, replParam: Object, input: TruffleString, lastPosition: number, curPosition: number, sb: TruffleStringBuilderUTF16, node: Node, toString3Node: JSToStringNode, dollarProfile: InlinedBranchProfile): void;
    // private builtinReplaceString(searchString: TruffleString, replaceString: TruffleString, input: TruffleString, parsedReplaceParam: ReplaceStringParser$Token[], lastPosition: number, curPosition: number, sb: TruffleStringBuilderUTF16, node: Node, dollarProfile: InlinedBranchProfile): void;
    // private getFlags(regexp: Object): Object;
    // private getIsRegExpNode(): IsRegExpNode;
    performReplaceAll(searchValue: TruffleString, replaceValue: TruffleString, thisObj: Object, parsedReplaceParam: ReplaceStringParser$Token[], node: Node, stringIndexOfStringNode: TruffleString$ByteIndexOfStringNode, isSearchValueEmpty: InlinedConditionProfile, dollarProfile: InlinedBranchProfile): Object;
    performReplaceAllGeneric(searchValue: Object, replParam: Object, thisObj: Object, node: Node, toString2Node: JSToStringNode, toString3Node: JSToStringNode, isCallableNode: IsCallableNode, stringIndexOfStringNode: TruffleString$ByteIndexOfStringNode, isSearchValueEmpty: InlinedConditionProfile, dollarProfile: InlinedBranchProfile): Object;
    replaceGeneric(thisObj: Object, searchValue: Object, replaceValue: Object, node: Node, isObject: IsObjectNode, errorBranch: InlinedBranchProfile, toString2Node: JSToStringNode, toString3Node: JSToStringNode, isCallableNode: IsCallableNode, isRegExp: InlinedConditionProfile, stringIndexOfNode: TruffleString$ByteIndexOfCodePointNode, stringIndexOfStringNode: TruffleString$ByteIndexOfStringNode, isSearchValueEmpty: InlinedConditionProfile, dollarProfile: InlinedBranchProfile, isSpecialProfile: InlinedConditionProfile, callSpecialProfile: InlinedConditionProfile): Object;
    replaceString(thisObj: Object, searchValue: TruffleString, replaceValue: TruffleString, stringIndexOfStringNode: TruffleString$ByteIndexOfStringNode, isSearchValueEmpty: InlinedConditionProfile, dollarProfile: InlinedBranchProfile): Object;
    replaceStringCached(thisObj: Object, searchValue: TruffleString, replaceValue: TruffleString, cachedReplaceValue: TruffleString, cachedParsedReplaceValue: ReplaceStringParser$Token[], node: Node, equalsNode: TruffleString$EqualNode, stringIndexOfStringNode: TruffleString$ByteIndexOfStringNode, isSearchValueEmpty: InlinedConditionProfile, dollarProfile: InlinedBranchProfile): Object;
}