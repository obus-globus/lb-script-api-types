import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { HostToGuestRootNode } from '../../../../com/oracle/truffle/polyglot/HostToGuestRootNode.d.ts'
import type { PolyglotExecuteNode } from '../../../../com/oracle/truffle/polyglot/PolyglotExecuteNode.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotLanguageInstance } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageInstance.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class PolyglotFunctionProxyHandler$FunctionProxyNode extends HostToGuestRootNode {
    static createConstantNode(paramconstant: Object): RootNode;
    constructor(languageInstance: PolyglotLanguageInstance, receiverType: Class<Object>, method: Method, genericType: Type)
    // private genericType: Type;
    // private method: Method;
    // private receiverClass: Class<Object>;
    doCached(languageContext: PolyglotLanguageContext, function_: TruffleObject, args: Object[], returnType: Type, returnClass: Class<Object>, executeNode: PolyglotExecuteNode): Object;
    equals(obj: Object | null): boolean;
    getName(): string;
    getReceiverType(): Class<TruffleObject>;
    hashCode(): number;
}