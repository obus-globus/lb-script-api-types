import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { InlinedCountingConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedCountingConditionProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ByteIndexOfStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfStringNode.d.ts'
import type { TruffleString$SubstringByteIndexNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$SubstringByteIndexNode.d.ts'
import type { StringPrototypeBuiltins$JSStringReplaceBaseNode } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringReplaceBaseNode.d.ts'
import type { StringPrototypeBuiltins$JSStringReplaceES5Node$FunctionReplacer } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringReplaceES5Node$FunctionReplacer.d.ts'
import type { StringPrototypeBuiltins$JSStringReplaceES5Node$Replacer } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringReplaceES5Node$Replacer.d.ts'
import type { StringPrototypeBuiltins$JSStringReplaceES5Node$StringReplacer } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringReplaceES5Node$StringReplacer.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { PropertySetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRegExpObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSRegExpObject.d.ts'
import type { TRegexUtil$InteropReadBooleanMemberNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadBooleanMemberNode.d.ts'
import type { TRegexUtil$InteropReadIntMemberNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadIntMemberNode.d.ts'
import type { TRegexUtil$InvokeGetGroupBoundariesMethodNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InvokeGetGroupBoundariesMethodNode.d.ts'
import type { TRegexUtil$TRegexCompiledRegexSingleFlagAccessorNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$TRegexCompiledRegexSingleFlagAccessorNode.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export abstract class StringPrototypeBuiltins$JSStringReplaceES5Node extends StringPrototypeBuiltins$JSStringReplaceBaseNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    // private functionReplacerNode: StringPrototypeBuiltins$JSStringReplaceES5Node$FunctionReplacer;
    // private getEnd: TRegexUtil$InvokeGetGroupBoundariesMethodNode;
    // private getStart: TRegexUtil$InvokeGetGroupBoundariesMethodNode;
    // private setLastIndexNode: PropertySetNode;
    // private stringIndexOfNode: TruffleString$ByteIndexOfStringNode;
    // private stringReplacerNode: StringPrototypeBuiltins$JSStringReplaceES5Node$StringReplacer;
    // private substringNode: TruffleString$SubstringByteIndexNode;
    // private getFunctionReplacerNode(): StringPrototypeBuiltins$JSStringReplaceES5Node$FunctionReplacer;
    // private getStringReplacerNode(): StringPrototypeBuiltins$JSStringReplaceES5Node$StringReplacer;
    // private indexOf(s1: TruffleString, s2: TruffleString): number;
    match(regExp: JSRegExpObject, input: TruffleString): Object;
    replace<T extends Node>(newNode: T): T;
    replace<T extends Node>(newNode: T, reason: CharSequence): T;
    // private replace<T extends Object | number | string | boolean>(thisStr: TruffleString, result: Object, groupCount: number, replacer: StringPrototypeBuiltins$JSStringReplaceES5Node$Replacer<T>, replaceValue: T, tRegexCompiledRegex: Object, node: Node): TruffleString;
    replace(thisObj: Object, searchValue: Object, replaceValue: Object, node: Node, toString2Node: JSToStringNode, toString3Node: JSToStringNode, ifIsMatch: InlinedCountingConditionProfile, isRegExp: InlinedConditionProfile, isFnRepl: InlinedCountingConditionProfile, readGroupCount: TRegexUtil$InteropReadIntMemberNode, readIsMatch: TRegexUtil$InteropReadBooleanMemberNode, getGlobalFlag: TRegexUtil$TRegexCompiledRegexSingleFlagAccessorNode, errorBranch: InlinedBranchProfile): Object;
    // private replaceAll<T extends Object | number | string | boolean>(regExp: JSRegExpObject, input: TruffleString, groupCount: number, replacer: StringPrototypeBuiltins$JSStringReplaceES5Node$Replacer<T>, replaceValue: T, tRegexCompiledRegex: Object, node: Node, ifIsMatch: InlinedCountingConditionProfile, readIsMatch: TRegexUtil$InteropReadBooleanMemberNode): TruffleString;
    // private replaceFirst<T extends Object | number | string | boolean>(thisStr: TruffleString, searchStr: TruffleString, replacer: StringPrototypeBuiltins$JSStringReplaceES5Node$Replacer<T>, replaceValue: T, node: Node, ifIsMatch: InlinedCountingConditionProfile): Object;
    // private replaceFirst<T extends Object | number | string | boolean>(thisStr: TruffleString, regExp: JSRegExpObject, groupCount: number, replacer: StringPrototypeBuiltins$JSStringReplaceES5Node$Replacer<T>, replaceValue: T, tRegexCompiledRegex: Object, node: Node, ifIsMatch: InlinedCountingConditionProfile, readIsMatch: TRegexUtil$InteropReadBooleanMemberNode): TruffleString;
    // private setLastIndex(regExp: JSRegExpObject, value: number): void;
}