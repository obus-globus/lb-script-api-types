import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$EqualNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { TruffleStringBuilder$AppendStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendStringNode.d.ts'
import type { TruffleStringBuilder$AppendSubstringByteIndexNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendSubstringByteIndexNode.d.ts'
import type { TruffleStringBuilder$ToStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$ToStringNode.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { RegExpPrototypeBuiltins$JSRegExpReplaceNode$ReplaceAccordingToSpecNode } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$JSRegExpReplaceNode$ReplaceAccordingToSpecNode.d.ts'
import type { RegExpPrototypeBuiltins$JSRegExpReplaceNode$ReplaceInternalNode } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$JSRegExpReplaceNode$ReplaceInternalNode.d.ts'
import type { RegExpPrototypeBuiltins$RegExpPrototypeSymbolOperation } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$RegExpPrototypeSymbolOperation.d.ts'
import type { RegExpPrototypeBuiltins$ReplaceStringConsumerTRegex$ParentNode } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$ReplaceStringConsumerTRegex$ParentNode.d.ts'
import type { IsPristineObjectNode } from '../../../../../com/oracle/truffle/js/builtins/helper/IsPristineObjectNode.d.ts'
import type { ReplaceStringParser$Token } from '../../../../../com/oracle/truffle/js/builtins/helper/ReplaceStringParser$Token.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsJSObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsJSObjectNode.d.ts'
import type { ReadElementNode } from '../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { JSToObjectNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNode.d.ts'
import type { JSToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { IsCallableNode } from '../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { StringBuilderProfile } from '../../../../../com/oracle/truffle/js/runtime/util/StringBuilderProfile.d.ts'
import type { TRegexUtil$InteropReadMemberNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadMemberNode.d.ts'
import type { TRegexUtil$InteropToIntNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropToIntNode.d.ts'
import type { TRegexUtil$InvokeGetGroupBoundariesMethodNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InvokeGetGroupBoundariesMethodNode.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class RegExpPrototypeBuiltins$JSRegExpReplaceNode extends RegExpPrototypeBuiltins$RegExpPrototypeSymbolOperation implements RegExpPrototypeBuiltins$ReplaceStringConsumerTRegex$ParentNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    // private appendStringNode: TruffleStringBuilder$AppendStringNode;
    // private appendSubStringNode: TruffleStringBuilder$AppendSubstringByteIndexNode;
    // private builderToStringNode: TruffleStringBuilder$ToStringNode;
    readonly getEndNode: TRegexUtil$InvokeGetGroupBoundariesMethodNode;
    readonly getStartNode: TRegexUtil$InvokeGetGroupBoundariesMethodNode;
    // private groupIndicesInterop: InteropLibrary;
    readonly invalidGroupNumberProfile: BranchProfile;
    // private isCallableNode: IsCallableNode;
    // private isObjectNode: IsJSObjectNode;
    // private isPristineObjectNode: IsPristineObjectNode;
    // private namedCaptureGroupInterop: InteropLibrary;
    // private readGroupsNode: TRegexUtil$InteropReadMemberNode;
    // private readNamedCaptureGroupNode: ReadElementNode;
    // private stringBuilderProfile: StringBuilderProfile;
    // private toIntNode: TRegexUtil$InteropToIntNode;
    // private toObjectNode: JSToObjectNode;
    // private toString2Node: JSToStringNode;
    // private toString3Node: JSToStringNode;
    // private toString4Node: JSToStringNode;
    append(sb: TruffleStringBuilderUTF16, s: TruffleString): void;
    append(sb: TruffleStringBuilderUTF16, s: TruffleString, fromIndex: number, toIndex: number): void;
    // private builderToString(sb: TruffleStringBuilderUTF16): TruffleString;
    // private checkObject(rx: JSDynamicObject): void;
    doNoObject(rx: Object, searchString: Object, replaceValue: Object): Object;
    getGetEndNode(): TRegexUtil$InvokeGetGroupBoundariesMethodNode;
    getGetStartNode(): TRegexUtil$InvokeGetGroupBoundariesMethodNode;
    getInvalidGroupNumberProfile(): BranchProfile;
    // private isPristine(rx: JSDynamicObject): boolean;
    parseReplaceValue(replaceValue: TruffleString, parseNamedCG: boolean): ReplaceStringParser$Token[];
    parseReplaceValueWithNCG(replaceValue: TruffleString): ReplaceStringParser$Token[];
    parseReplaceValueWithoutNCG(replaceValue: TruffleString): ReplaceStringParser$Token[];
    readNamedCaptureGroup(namedCaptureGroups: Object, groupNameStr: Object): Object;
    replaceDynamic(rx: JSDynamicObject, searchValue: Object, replaceValue: Object, toString1Node: JSToStringNode, replaceInternal: RegExpPrototypeBuiltins$JSRegExpReplaceNode$ReplaceInternalNode, replaceAccordingToSpec: RegExpPrototypeBuiltins$JSRegExpReplaceNode$ReplaceAccordingToSpecNode, functionalReplaceProfile: InlinedConditionProfile): Object;
    replaceString(rx: JSDynamicObject, searchValue: Object, replaceValue: TruffleString, toString1Node: JSToStringNode, replaceInternal: RegExpPrototypeBuiltins$JSRegExpReplaceNode$ReplaceInternalNode, replaceAccordingToSpec: RegExpPrototypeBuiltins$JSRegExpReplaceNode$ReplaceAccordingToSpecNode): Object;
    replaceStringCached(rx: JSDynamicObject, searchValue: Object, replaceValue: TruffleString, cachedReplaceValue: TruffleString, cachedParsedReplaceValueWithNamedCG: ReplaceStringParser$Token[], cachedParsedReplaceValueWithoutNamedCG: ReplaceStringParser$Token[], toString1Node: JSToStringNode, equalsNode: TruffleString$EqualNode, replaceInternal: RegExpPrototypeBuiltins$JSRegExpReplaceNode$ReplaceInternalNode, replaceAccordingToSpec: RegExpPrototypeBuiltins$JSRegExpReplaceNode$ReplaceAccordingToSpecNode): Object;
    // private toObject(obj: Object): Object;
    // private toString2(obj: Object): TruffleString;
    // private toString3(obj: Object): TruffleString;
    toString4(obj: Object): TruffleString;
}