import type { InteropLibrary } from '../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotToHostNode } from '../../../../com/oracle/truffle/polyglot/PolyglotToHostNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class PolyglotObjectProxyHandler$ProxyInvokeNode extends Node {
    constructor()
    // private invokeFailed: boolean;
    doCachedMethod(languageContext: PolyglotLanguageContext, receiver: Object, method: Method, genericType: Type, arguments: Object[], node: Node, cachedMethod: Method, name: string, returnType: Type, returnClass: Class<Object>, receivers: InteropLibrary, members: InteropLibrary, branchProfile: InlinedConditionProfile, toHost: PolyglotToHostNode, error: InlinedBranchProfile): Object;
    execute(languageContext: PolyglotLanguageContext, receiver: Object, method: Method, genericType: Type, arguments: Object[]): Object;
    // private invokeOrExecute(node: Node, polyglotContext: PolyglotLanguageContext, receiver: Object, arguments: Object[], member: string, receivers: InteropLibrary, members: InteropLibrary, invokeProfile: InlinedConditionProfile, error: InlinedBranchProfile): Object;
}