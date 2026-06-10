import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ByteIndexOfStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfStringNode.d.ts'
import type { TruffleString$SubstringByteIndexNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$SubstringByteIndexNode.d.ts'
import type { StringPrototypeBuiltins$JSStringOperationWithRegExpArgument } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringOperationWithRegExpArgument.d.ts'
import type { StringPrototypeBuiltins$JSStringSplitNode$RegExpSplitter } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringSplitNode$RegExpSplitter.d.ts'
import type { StringPrototypeBuiltins$JSStringSplitNode$Splitter } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringSplitNode$Splitter.d.ts'
import type { StringPrototypeBuiltins$JSStringSplitNode$StringSplitter } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringSplitNode$StringSplitter.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { JSToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSToUInt32Node } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToUInt32Node.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { TRegexUtil$InteropReadBooleanMemberNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadBooleanMemberNode.d.ts'
import type { TRegexUtil$InteropReadIntMemberNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadIntMemberNode.d.ts'
import type { TRegexUtil$InvokeGetGroupBoundariesMethodNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InvokeGetGroupBoundariesMethodNode.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class StringPrototypeBuiltins$JSStringSplitNode extends StringPrototypeBuiltins$JSStringOperationWithRegExpArgument {
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
    // private getEndNode: TRegexUtil$InvokeGetGroupBoundariesMethodNode;
    // private getStartNode: TRegexUtil$InvokeGetGroupBoundariesMethodNode;
    // private readIsMatch: TRegexUtil$InteropReadBooleanMemberNode;
    // private stringIndexOfNode: TruffleString$ByteIndexOfStringNode;
    // private substringNode: TruffleString$SubstringByteIndexNode;
    // private toString2Node: JSToStringNode;
    // private toUInt32Node: JSToUInt32Node;
    // private builtinSplit(thisObj: Object, separator: Object, limit: Object, stringSplitter: StringPrototypeBuiltins$JSStringSplitNode$StringSplitter, zeroLimit: InlinedConditionProfile): Object;
    // private getLimit(limit: Object): number;
    // private indexOf(s1: TruffleString, s2: TruffleString, fromIndex: number): number;
    isES6OrNewer(): boolean;
    isFastPath(thisObj: Object, separator: Object, limit: Object): boolean;
    // private split<T extends Object | number | string | boolean>(thisStr: TruffleString, limit: number, splitter: StringPrototypeBuiltins$JSStringSplitNode$Splitter<T>, separator: T, groupCount: number, zeroLimit: InlinedConditionProfile): JSDynamicObject;
    splitES5(thisObj: Object, separator: Object, limitObj: Object, isUndefinedBranch: InlinedBranchProfile, isRegexpBranch: InlinedBranchProfile, isStringBranch: InlinedBranchProfile, stringSplitter: StringPrototypeBuiltins$JSStringSplitNode$StringSplitter, regexpSplitter: StringPrototypeBuiltins$JSStringSplitNode$RegExpSplitter, zeroLimit: InlinedConditionProfile, readGroupCount: TRegexUtil$InteropReadIntMemberNode): Object;
    splitES6Generic(thisObj: Object, separator: Object, limit: Object, isObject: IsObjectNode, stringSplitter: StringPrototypeBuiltins$JSStringSplitNode$StringSplitter, zeroLimit: InlinedConditionProfile, isSpecialProfile: InlinedConditionProfile, callSpecialProfile: InlinedConditionProfile): Object;
    splitES6StrStrUndefined(thisStr: TruffleString, sepStr: TruffleString, limit: Object, stringSplitter: StringPrototypeBuiltins$JSStringSplitNode$StringSplitter, zeroLimit: InlinedConditionProfile): Object;
    // private substring(a: TruffleString, fromIndex: number): TruffleString;
    // private substring(a: TruffleString, fromIndex: number, length: number): TruffleString;
    // private toString2(obj: Object): TruffleString;
    // private toUInt32(target: Object): number;
}