import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRegExpObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSRegExpObject.d.ts'
import type { TRegexUtil$InteropReadBooleanMemberNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadBooleanMemberNode.d.ts'
import type { TRegexUtil$InvokeExecMethodNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InvokeExecMethodNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSRegExpExecIntlNode$JSRegExpExecIntlIgnoreLastIndexNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext, paramdoStaticResultUpdate: boolean): JSRegExpExecIntlNode$JSRegExpExecIntlIgnoreLastIndexNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, doStaticResultUpdate: boolean)
    // private context: JSContext;
    // private doStaticResultUpdate: boolean;
    doCached(regExp: JSRegExpObject, input: TruffleString, lastIndex: number, cachedCompiledRegex: Object, node: Node, areLegacyFeaturesEnabled: InlinedConditionProfile, invokeExec: TRegexUtil$InvokeExecMethodNode, readIsMatch: TRegexUtil$InteropReadBooleanMemberNode): Object;
    // private doExec(regExp: JSRegExpObject, input: TruffleString, lastIndex: number, compiledRegex: Object, node: Node, areLegacyFeaturesEnabled: InlinedConditionProfile, invokeExec: TRegexUtil$InvokeExecMethodNode, readIsMatch: TRegexUtil$InteropReadBooleanMemberNode): Object;
    doUncached(regExp: JSRegExpObject, input: TruffleString, lastIndex: number, areLegacyFeaturesEnabled: InlinedConditionProfile, invokeExec: TRegexUtil$InvokeExecMethodNode, readIsMatch: TRegexUtil$InteropReadBooleanMemberNode): Object;
    execute(regExp: JSRegExpObject, input: Object, lastIndex: number): Object;
}