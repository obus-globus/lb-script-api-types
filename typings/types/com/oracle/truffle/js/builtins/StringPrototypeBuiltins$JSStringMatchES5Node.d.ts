import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedCountingConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedCountingConditionProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$SubstringByteIndexNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$SubstringByteIndexNode.d.ts'
import type { RegExpPrototypeBuiltins$JSRegExpExecES5Node } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$JSRegExpExecES5Node.d.ts'
import type { StringPrototypeBuiltins$JSStringOperationWithRegExpArgument } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringOperationWithRegExpArgument.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { PropertySetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSToRegExpNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToRegExpNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRegExpObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSRegExpObject.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { TRegexUtil$InteropReadBooleanMemberNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadBooleanMemberNode.d.ts'
import type { TRegexUtil$InvokeGetGroupBoundariesMethodNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InvokeGetGroupBoundariesMethodNode.d.ts'
import type { TRegexUtil$TRegexCompiledRegexSingleFlagAccessorNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$TRegexCompiledRegexSingleFlagAccessorNode.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class StringPrototypeBuiltins$JSStringMatchES5Node extends StringPrototypeBuiltins$JSStringOperationWithRegExpArgument {
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
    // private setLastIndexNode: PropertySetNode;
    // private isGlobal(compiledRegex: Object, getGlobalFlag: TRegexUtil$TRegexCompiledRegexSingleFlagAccessorNode): boolean;
    match(thisObj: Object, searchObj: Object, toRegExpNode: JSToRegExpNode, regExpExecNode: RegExpPrototypeBuiltins$JSRegExpExecES5Node, isMatch: InlinedCountingConditionProfile, isGlobalRegExp: InlinedCountingConditionProfile, substringNode: TruffleString$SubstringByteIndexNode, readIsMatch: TRegexUtil$InteropReadBooleanMemberNode, getStart: TRegexUtil$InvokeGetGroupBoundariesMethodNode, getEnd: TRegexUtil$InvokeGetGroupBoundariesMethodNode, getGlobalFlag: TRegexUtil$TRegexCompiledRegexSingleFlagAccessorNode): JSDynamicObject;
    // private matchGlobal(input: TruffleString, regExp: JSRegExpObject, node: Node, isMatch: InlinedCountingConditionProfile, substringNode: TruffleString$SubstringByteIndexNode, readIsMatch: TRegexUtil$InteropReadBooleanMemberNode, getStart: TRegexUtil$InvokeGetGroupBoundariesMethodNode, getEnd: TRegexUtil$InvokeGetGroupBoundariesMethodNode): JSDynamicObject;
    // private setLastIndex(regExp: JSRegExpObject, value: number): void;
}