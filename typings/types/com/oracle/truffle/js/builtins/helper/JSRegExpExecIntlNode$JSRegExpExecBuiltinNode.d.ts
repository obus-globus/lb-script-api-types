import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$PutConstantNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutConstantNode.d.ts'
import type { DynamicObject$PutNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { InlinedCountingConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedCountingConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSRegExpExecIntlNode$BuildGroupsObjectNode } from '../../../../../../com/oracle/truffle/js/builtins/helper/JSRegExpExecIntlNode$BuildGroupsObjectNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSToLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToLengthNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { JSRegExpObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSRegExpObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { TRegexUtil$InteropReadBooleanMemberNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadBooleanMemberNode.d.ts'
import type { TRegexUtil$InteropReadIntMemberNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadIntMemberNode.d.ts'
import type { TRegexUtil$InteropReadMemberNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadMemberNode.d.ts'
import type { TRegexUtil$InvokeExecMethodNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InvokeExecMethodNode.d.ts'
import type { TRegexUtil$InvokeGetGroupBoundariesMethodNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InvokeGetGroupBoundariesMethodNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSRegExpExecIntlNode$JSRegExpExecBuiltinNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): JSRegExpExecIntlNode$JSRegExpExecBuiltinNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private ecmaScriptVersion: number;
    // private getLastIndexNode: PropertyGetNode;
    // private groupsBuilder: JSRegExpExecIntlNode$BuildGroupsObjectNode;
    // private setGroupsNode: DynamicObject$PutNode;
    // private setIndexNode: DynamicObject$PutConstantNode;
    // private setIndicesGroupsNode: DynamicObject$PutNode;
    // private setIndicesNode: DynamicObject$PutNode;
    // private setIndicesRegexResultNode: DynamicObject$PutNode;
    // private setInputNode: DynamicObject$PutNode;
    // private setLastIndexNode: PropertySetNode;
    // private setRegexOriginalInputNode: PropertySetNode;
    // private setRegexResultNode: PropertySetNode;
    // private toLengthNode: JSToLengthNode;
    doCached(regExp: JSRegExpObject, input: TruffleString, node: Node, cachedCompiledRegex: Object, invalidLastIndex: InlinedConditionProfile, match: InlinedCountingConditionProfile, areLegacyFeaturesEnabled: InlinedConditionProfile, readIsMatch: TRegexUtil$InteropReadBooleanMemberNode, getStart: TRegexUtil$InvokeGetGroupBoundariesMethodNode, getEnd: TRegexUtil$InvokeGetGroupBoundariesMethodNode, invokeExec: TRegexUtil$InvokeExecMethodNode, readFlags: TRegexUtil$InteropReadMemberNode, readGlobal: TRegexUtil$InteropReadBooleanMemberNode, readSticky: TRegexUtil$InteropReadBooleanMemberNode, readHasIndices: TRegexUtil$InteropReadBooleanMemberNode, readGroupCount: TRegexUtil$InteropReadIntMemberNode): Object;
    doDynamic(regExp: JSRegExpObject, input: TruffleString, node: Node, invalidLastIndex: InlinedConditionProfile, match: InlinedCountingConditionProfile, areLegacyFeaturesEnabled: InlinedConditionProfile, readIsMatch: TRegexUtil$InteropReadBooleanMemberNode, getStart: TRegexUtil$InvokeGetGroupBoundariesMethodNode, getEnd: TRegexUtil$InvokeGetGroupBoundariesMethodNode, invokeExec: TRegexUtil$InvokeExecMethodNode, readFlags: TRegexUtil$InteropReadMemberNode, readGlobal: TRegexUtil$InteropReadBooleanMemberNode, readSticky: TRegexUtil$InteropReadBooleanMemberNode, readHasIndices: TRegexUtil$InteropReadBooleanMemberNode, readGroupCount: TRegexUtil$InteropReadIntMemberNode): Object;
    // private doExec(regExp: JSRegExpObject, compiledRegex: Object, input: TruffleString, node: Node, invalidLastIndex: InlinedConditionProfile, match: InlinedCountingConditionProfile, areLegacyFeaturesEnabled: InlinedConditionProfile, readIsMatch: TRegexUtil$InteropReadBooleanMemberNode, getStart: TRegexUtil$InvokeGetGroupBoundariesMethodNode, getEnd: TRegexUtil$InvokeGetGroupBoundariesMethodNode, invokeExec: TRegexUtil$InvokeExecMethodNode, readFlags: TRegexUtil$InteropReadMemberNode, readGlobal: TRegexUtil$InteropReadBooleanMemberNode, readSticky: TRegexUtil$InteropReadBooleanMemberNode, readHasIndices: TRegexUtil$InteropReadBooleanMemberNode, readGroupCount: TRegexUtil$InteropReadIntMemberNode): Object;
    execute(regExp: JSRegExpObject, input: TruffleString): Object;
    // private getEmptyResult(): Object;
    // private getGroupsObject(regExp: JSRegExpObject, result: Object, input: Object, isIndices: boolean): JSDynamicObject;
    // private getLastIndex(regExp: JSDynamicObject): number;
    // private getMatchResult(regExp: JSRegExpObject, regexResult: Object, groupCount: number, inputStr: TruffleString, hasIndices: boolean, realm: JSRealm): JSArrayObject;
    // private isSameRealm(regExp: JSRegExpObject, thisRealm: JSRealm): boolean;
    // private setLastIndex(regExp: JSDynamicObject, value: number): void;
}