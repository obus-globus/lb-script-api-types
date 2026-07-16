import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IsJSClassNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsJSClassNode.d.ts'
import type { JSObjectFactory } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSObjectFactory.d.ts'
import type { JSRegExpObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSRegExpObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSRegExpExecIntlNode$BuildGroupsObjectNode extends JavaScriptBaseNode {
    static create(): JSRegExpExecIntlNode$BuildGroupsObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doCachedGroupsFactory(regExp: JSRegExpObject, regexResult: Object, input: TruffleString, isIndices: boolean, cachedCompiledRegex: Object, cachedGroupsFactory: JSObjectFactory, isJSRegExpNode: IsJSClassNode): JSDynamicObject;
    doVaryingGroupsFactory(regExp: JSRegExpObject, regexResult: Object, input: TruffleString, isIndices: boolean): JSDynamicObject;
    execute(regExp: JSRegExpObject, regexResult: Object, input: Object, isIndices: boolean): JSDynamicObject;
}